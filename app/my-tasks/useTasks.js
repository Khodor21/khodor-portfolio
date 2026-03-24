// app/my-tasks/useTasks.js
"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "../../lib/supabaseClient";

const USER_ID = "demo-user"; 

export function useTasks() {
  const [daily, setDaily] = useState([]);
  const [work, setWork] = useState([]);
  const [loading, setLoading] = useState(true);

  // ── Fetch all tasks on mount ──────────────────────────────────────────
  useEffect(() => {
    async function fetchTasks() {
      setLoading(true);

      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", USER_ID)
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching tasks:", error.message);
      } else {
        setDaily(data.filter((t) => t.type === "daily"));
        setWork(data.filter((t) => t.type === "work"));
      }

      setLoading(false);
    }

    fetchTasks();
  }, []);

  // ── Add a task ────────────────────────────────────────────────────────
  const addTask = useCallback(async (type, task) => {
    const newTask = { ...task, type, user_id: USER_ID };

    // optimistic update (instant UI)
    if (type === "daily") setDaily((p) => [...p, newTask]);
    else setWork((p) => [...p, newTask]);

    const { error } = await supabase.from("tasks").insert(newTask);
    if (error) console.error("Error adding task:", error.message);
  }, []);

  // ── Toggle done ───────────────────────────────────────────────────────
  const toggleTask = useCallback(
    async (type, id) => {
      const list = type === "daily" ? daily : work;
      const task = list.find((t) => t.id === id);
      if (!task) return;

      const newDone = !task.done;

      // optimistic update
      const update = (p) =>
        p.map((t) => (t.id === id ? { ...t, done: newDone } : t));
      if (type === "daily") setDaily(update);
      else setWork(update);

      const { error } = await supabase
        .from("tasks")
        .update({ done: newDone })
        .eq("id", id);
      if (error) console.error("Error toggling task:", error.message);
    },
    [daily, work],
  );

  // ── Delete a task ─────────────────────────────────────────────────────
  const deleteTask = useCallback(async (type, id) => {
    // optimistic update
    if (type === "daily") setDaily((p) => p.filter((t) => t.id !== id));
    else setWork((p) => p.filter((t) => t.id !== id));

    const { error } = await supabase.from("tasks").delete().eq("id", id);
    if (error) console.error("Error deleting task:", error.message);
  }, []);

  return { daily, work, loading, addTask, toggleTask, deleteTask };
}
