// app/my-tasks/useNotifications.js
"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const STORAGE_KEY = "tasks_reminder_time";

export function useNotifications(daily, work) {
  const [permission, setPermission] = useState("default");
  const [reminderTime, setReminderTime] = useState(() => {
    if (typeof window === "undefined") return "09:00";
    return localStorage.getItem(STORAGE_KEY) || "09:00";
  });
  const [enabled, setEnabled] = useState(false);
  const intervalRef = useRef(null);

  // Register service worker once
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(console.error);
    }
    // Read current permission
    if ("Notification" in window) {
      setPermission(Notification.permission);
      setEnabled(Notification.permission === "granted");
    }
  }, []);

  // Ask for permission
  const requestPermission = useCallback(async () => {
    if (!("Notification" in window)) return;
    const result = await Notification.requestPermission();
    setPermission(result);
    setEnabled(result === "granted");
    return result;
  }, []);

  // Show a local notification immediately (no server needed)
  const showNotification = useCallback((title, body) => {
    if (Notification.permission !== "granted") return;
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((reg) => {
        reg.showNotification(title, {
          body,
          icon: "/favicon.ico",
          dir: "rtl",
          lang: "ar",
        });
      });
    }
  }, []);

  // Save reminder time
  const saveReminderTime = useCallback((time) => {
    setReminderTime(time);
    localStorage.setItem(STORAGE_KEY, time);
  }, []);

  // The main checker — runs every minute
  useEffect(() => {
    if (!enabled) return;

    function check() {
      const now = new Date();
      const nowTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

      // 1. Daily reminder at chosen time
      if (nowTime === reminderTime) {
        const totalDone = [...daily, ...work].filter((t) => t.done).length;
        const totalCount = daily.length + work.length;
        if (totalCount > 0 && totalDone < totalCount) {
          showNotification(
            "مهامي اليوم ✅",
            `لديك ${totalCount - totalDone} مهمة لم تُنجز بعد. هيا بنا! 💪`,
          );
        }
      }

      // 2. Overdue check — notify if it's past 8 PM and tasks are unfinished
      if (now.getHours() === 20 && now.getMinutes() === 0) {
        const unfinished = [...daily, ...work].filter((t) => !t.done);
        if (unfinished.length > 0) {
          showNotification(
            "تذكير مسائي 🌙",
            `تبقّى ${unfinished.length} مهمة لم تُكتمل اليوم!`,
          );
        }
      }
    }

    intervalRef.current = setInterval(check, 60 * 1000); // every minute
    return () => clearInterval(intervalRef.current);
  }, [enabled, reminderTime, daily, work, showNotification]);

  return {
    permission,
    enabled,
    reminderTime,
    requestPermission,
    saveReminderTime,
  };
}
