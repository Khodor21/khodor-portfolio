"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { supabase } from "@/lib/supabaseClient";
import { useTasks } from "./useTasks";

// ─── Arabic date ───────────────────────────────────────────────────────────────
function getArabicDate() {
  return new Date().toLocaleDateString("ar-SA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ─── Icon lists ────────────────────────────────────────────────────────────────
const DAILY_ICONS = [
  "📖",
  "🏃",
  "💧",
  "🎯",
  "🧘",
  "🌿",
  "🍎",
  "😴",
  "✏️",
  "🎵",
];
const WORK_ICONS = ["📊", "📬", "👥", "🗂️", "💼", "🖥️", "📝", "📞", "🔍", "⚙️"];

// ─── CircularProgress ──────────────────────────────────────────────────────────
function CircularProgress({ pct, size = 56, stroke = 6, color = "#6C63FF" }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  const cx = size / 2;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle
        cx={cx}
        cy={cx}
        r={r}
        fill="none"
        stroke="#EEE8FF"
        strokeWidth={stroke}
      />
      <circle
        cx={cx}
        cy={cx}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />
    </svg>
  );
}

// ─── ProgressBar ───────────────────────────────────────────────────────────────
function ProgressBar({ pct, color = "#6C63FF" }) {
  return (
    <div className="w-full h-2 bg-[#F0EDF9] rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  );
}

// ─── TaskCard ──────────────────────────────────────────────────────────────────
function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div
      className={`
      group w-full flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300
      ${
        task.done
          ? "bg-[#F0EDF9] border-[#C5BCE8] opacity-75"
          : "bg-white border-[#E8E4F3] shadow-sm hover:shadow-md hover:border-[#A89DD4]"
      }
    `}
    >
      <button
        onClick={() => onToggle(task.id)}
        className={`
          w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center
          transition-all duration-300 active:scale-90
          ${task.done ? "border-[#6C63FF] bg-[#6C63FF]" : "border-[#C5BCE8] bg-white hover:border-[#6C63FF]"}
        `}
      >
        {task.done && (
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path
              d="M1 4L4.5 7.5L11 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <span className="text-xl flex-shrink-0">{task.icon}</span>

      <span
        onClick={() => onToggle(task.id)}
        className={`flex-1 text-sm leading-relaxed handiReg cursor-pointer select-none text-right ${
          task.done ? "line-through text-[#A89DD4]" : "text-[#2D2654]"
        }`}
      >
        {task.text}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 focus:opacity-100 w-7 h-7 flex-shrink-0
          flex items-center justify-center rounded-full text-[#C5BCE8]
          hover:bg-red-50 hover:text-red-400 transition-all duration-200"
        aria-label="حذف"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 2l10 10M12 2L2 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

// ─── StatusCard ────────────────────────────────────────────────────────────────
function StatusCard({ pct }) {
  const cfg =
    pct >= 80
      ? {
          msg: "أداء ممتاز اليوم 🏆",
          bg: "from-[#6C63FF] to-[#9B93FF]",
          sub: "أنت على المسار الصحيح!",
        }
      : pct >= 50
        ? {
            msg: "أداء جيد 👍",
            bg: "from-[#43C6AC] to-[#6DC8B8]",
            sub: "استمر في التقدم!",
          }
        : {
            msg: "يحتاج تحسين 💪",
            bg: "from-[#F7971E] to-[#FFD200]",
            sub: "لديك الوقت لتحقيق المزيد",
          };
  return (
    <div
      className={`rounded-3xl p-5 bg-gradient-to-br ${cfg.bg} text-white text-right shadow-lg`}
    >
      <p
        className="handiBold text-xl"
        style={{ fontFamily: "Handi-Bold, sans-serif" }}
      >
        {cfg.msg}
      </p>
      <p className="handiReg text-sm mt-1 opacity-90">{cfg.sub}</p>
      <p className="handiReg text-xs mt-3 opacity-75">
        نسبة الإنجاز الكلية: {Math.round(pct)}٪
      </p>
    </div>
  );
}

// ─── CustomTooltip ─────────────────────────────────────────────────────────────
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white rounded-xl shadow-lg px-3 py-2 border border-[#E8E4F3] text-right">
      <p className="handiReg text-xs text-[#6C63FF]">{label}</p>
      <p
        className="handiBold text-sm text-[#2D2654]"
        style={{ fontFamily: "Handi-Bold, sans-serif" }}
      >
        {payload[0].value}٪
      </p>
    </div>
  );
}

// ─── AddTaskModal ──────────────────────────────────────────────────────────────
function AddTaskModal({ type, onClose, onAdd }) {
  const [text, setText] = useState("");
  const [icon, setIcon] = useState(
    type === "daily" ? DAILY_ICONS[0] : WORK_ICONS[0],
  );
  const icons = type === "daily" ? DAILY_ICONS : WORK_ICONS;
  const accentColor = type === "daily" ? "#6C63FF" : "#43C6AC";
  const label = type === "daily" ? "مهمة يومية جديدة" : "مهمة عمل جديدة";

  function handleAdd() {
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd({ id: `${type}-${Date.now()}`, text: trimmed, done: false, icon });
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg bg-white rounded-t-3xl p-6 pb-10 shadow-2xl"
        style={{ animation: "slideUp 0.28s cubic-bezier(0.32,0.72,0,1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1 bg-[#E0DCF0] rounded-full mx-auto mb-5" />
        <p
          className="handiBold text-base text-[#2D2654] mb-4 text-right"
          style={{ fontFamily: "Handi-Bold, sans-serif" }}
        >
          {label}
        </p>

        <div className="flex flex-wrap gap-2 justify-end mb-4">
          {icons.map((ic) => (
            <button
              key={ic}
              onClick={() => setIcon(ic)}
              className={`text-xl w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-150
                ${icon === ic ? "scale-110 shadow-md" : "bg-[#F6F4FC] hover:bg-[#EEE8FF]"}`}
              style={
                icon === ic
                  ? {
                      background: accentColor + "22",
                      outline: `2px solid ${accentColor}`,
                    }
                  : {}
              }
            >
              {ic}
            </button>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <button
            onClick={handleAdd}
            disabled={!text.trim()}
            className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center
              text-white transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: accentColor }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 3v12M3 9h12"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <input
            dir="rtl"
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            placeholder="اكتب المهمة هنا..."
            className="flex-1 h-12 bg-[#F6F4FC] rounded-2xl px-4 text-sm text-[#2D2654]
              handiReg placeholder-[#C5BCE8] outline-none border-2 border-transparent
              focus:border-[#C5BCE8] transition-all duration-200 text-right"
          />
        </div>
      </div>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ─── AddButton ─────────────────────────────────────────────────────────────────
function AddButton({ color, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 rounded-full flex items-center justify-center
        transition-all duration-200 active:scale-90 hover:scale-110"
      style={{ background: color + "22" }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M7 2v10M2 7h10"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

// ─── LoginScreen ───────────────────────────────────────────────────────────────
function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    if (!trimmedEmail || !trimmedPassword) return;

    setLoading(true);
    setError("");

    const { error: authError } = isSignUp
      ? await supabase.auth.signUp({
          email: trimmedEmail,
          password: trimmedPassword,
        })
      : await supabase.auth.signInWithPassword({
          email: trimmedEmail,
          password: trimmedPassword,
        });

    if (authError) setError(authError.message);
    setLoading(false);
  }

  async function handleGoogle() {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  }

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F6F4FC] flex items-center justify-center px-4"
      style={{ fontFamily: "Handi-Regular, sans-serif" }}
    >
      {/* blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#6C63FF] opacity-[0.08] blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-56 h-56 rounded-full bg-[#43C6AC] opacity-[0.07] blur-3xl" />
      </div>

      <div className="w-full max-w-sm bg-white rounded-3xl shadow-sm border border-[#E8E4F3] p-8 space-y-5">
        {/* logo / title */}
        <div className="text-center space-y-1">
          <div className="text-4xl">✅</div>
          <h1
            className="handiBold text-2xl text-[#2D2654]"
            style={{ fontFamily: "Handi-Bold, sans-serif" }}
          >
            مهامي اليوم
          </h1>
          <p className="handiReg text-xs text-[#9B93C8]">
            {isSignUp ? "أنشئ حساباً جديداً" : "سجّل دخولك للمتابعة"}
          </p>
        </div>

        {/* error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-500 handiReg text-xs rounded-xl px-4 py-3 text-right">
            {error}
          </div>
        )}

        {/* fields */}
        <div className="space-y-3">
          <input
            dir="rtl"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="البريد الإلكتروني"
            className="w-full h-12 bg-[#F6F4FC] rounded-2xl px-4 text-sm text-[#2D2654]
              handiReg placeholder-[#C5BCE8] outline-none border-2 border-transparent
              focus:border-[#C5BCE8] transition-all duration-200 text-right"
          />
          <input
            dir="rtl"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="كلمة المرور"
            className="w-full h-12 bg-[#F6F4FC] rounded-2xl px-4 text-sm text-[#2D2654]
              handiReg placeholder-[#C5BCE8] outline-none border-2 border-transparent
              focus:border-[#C5BCE8] transition-all duration-200 text-right"
          />
        </div>

        {/* submit */}
        <button
          onClick={handleSubmit}
          disabled={loading || !email.trim() || !password.trim()}
          className="w-full h-12 rounded-2xl text-white text-sm handiBold
            transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            fontFamily: "Handi-Bold, sans-serif",
            background: "#6C63FF",
          }}
        >
          {loading ? "..." : isSignUp ? "إنشاء حساب" : "تسجيل الدخول"}
        </button>

        {/* divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-[#E8E4F3]" />
          <span className="handiReg text-xs text-[#C5BCE8]">أو</span>
          <div className="flex-1 h-px bg-[#E8E4F3]" />
        </div>

        {/* google */}
        <button
          onClick={handleGoogle}
          className="w-full h-12 rounded-2xl border-2 border-[#E8E4F3] text-[#2D2654]
            handiReg text-sm flex items-center justify-center gap-2
            hover:border-[#A89DD4] transition-all duration-200 active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
              fill="#4285F4"
            />
            <path
              d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
              fill="#34A853"
            />
            <path
              d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"
              fill="#FBBC05"
            />
            <path
              d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"
              fill="#EA4335"
            />
          </svg>
          الدخول عبر Google
        </button>

        {/* toggle sign up / sign in */}
        <p className="handiReg text-xs text-center text-[#9B93C8]">
          {isSignUp ? "لديك حساب بالفعل؟ " : "ليس لديك حساب؟ "}
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError("");
            }}
            className="text-[#6C63FF] underline"
          >
            {isSignUp ? "سجّل دخولك" : "أنشئ حساباً"}
          </button>
        </p>
      </div>
    </div>
  );
}

// ─── TasksPage (inner, receives userId) ───────────────────────────────────────
function TasksPage({ userId, userEmail, onSignOut }) {
  const { daily, work, loading, addTask, toggleTask, deleteTask } =
    useTasks(userId);
  const [modal, setModal] = useState(null); // "daily" | "work" | null

  const dailyPct = useMemo(
    () =>
      daily.length === 0
        ? 0
        : Math.round((daily.filter((t) => t.done).length / daily.length) * 100),
    [daily],
  );
  const workPct = useMemo(
    () =>
      work.length === 0
        ? 0
        : Math.round((work.filter((t) => t.done).length / work.length) * 100),
    [work],
  );
  const totalPct = useMemo(() => {
    const total = daily.length + work.length;
    if (total === 0) return 0;
    return Math.round(
      ((daily.filter((t) => t.done).length +
        work.filter((t) => t.done).length) /
        total) *
        100,
    );
  }, [daily, work]);

  const barData = [
    { name: "المهام اليومية", value: dailyPct },
    { name: "مهام العمل", value: workPct },
  ];
  const radialData = [{ name: "إنجاز", value: totalPct, fill: "#6C63FF" }];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F6F4FC] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 rounded-full border-4 border-[#6C63FF] border-t-transparent animate-spin mx-auto" />
          <p className="handiReg text-sm text-[#9B93C8]">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F6F4FC]"
      style={{ fontFamily: "Handi-Regular, sans-serif" }}
    >
      {/* blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#6C63FF] opacity-[0.08] blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-56 h-56 rounded-full bg-[#43C6AC] opacity-[0.07] blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-[#FFD200] opacity-[0.05] blur-3xl" />
      </div>

      <div className="max-w-lg mx-auto px-4 pb-16 pt-6 space-y-6">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="handiBold text-2xl text-[#2D2654] leading-tight"
              style={{ fontFamily: "Handi-Bold, sans-serif" }}
            >
              مهامي اليوم
            </h1>
            <p className="handiReg text-xs text-[#9B93C8] mt-0.5">
              {getArabicDate()}
            </p>
          </div>

          {/* right side: clients link + sign out */}
          <div className="flex items-center gap-2">
            <a href="/my-tasks/clients">
              <p className="handiBold text-[#6C63FF] bg-[#6C63FF]/30 px-3 py-1 rounded text-sm">
                جدول العملاء
              </p>
            </a>
            <button
              onClick={onSignOut}
              title={userEmail}
              className="w-8 h-8 rounded-full bg-[#F0EDF9] flex items-center justify-center
                text-[#9B93C8] hover:text-red-400 hover:bg-red-50 transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3M9 10l3-3-3-3M12 7H5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* PROGRESS CARD */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#E8E4F3] p-6">
          <p
            className="handiBold text-sm text-[#2D2654] mb-4"
            style={{ fontFamily: "Handi-Bold, sans-serif" }}
          >
            نسبة إنجاز اليوم
          </p>
          <div className="flex items-center gap-6">
            <div className="w-28 h-28 flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  innerRadius="70%"
                  outerRadius="100%"
                  data={radialData}
                  startAngle={90}
                  endAngle={-270}
                >
                  <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                  />
                  <RadialBar
                    background={{ fill: "#EEE8FF" }}
                    dataKey="value"
                    angleAxisId={0}
                    cornerRadius={8}
                    data={radialData}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="handiReg text-xs text-[#9B93C8]">يومية</span>
                  <span
                    className="handiBold text-xs text-[#6C63FF]"
                    style={{ fontFamily: "Handi-Bold, sans-serif" }}
                  >
                    {dailyPct}٪
                  </span>
                </div>
                <ProgressBar pct={dailyPct} color="#6C63FF" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="handiReg text-xs text-[#9B93C8]">عمل</span>
                  <span
                    className="handiBold text-xs text-[#43C6AC]"
                    style={{ fontFamily: "Handi-Bold, sans-serif" }}
                  >
                    {workPct}٪
                  </span>
                </div>
                <ProgressBar pct={workPct} color="#43C6AC" />
              </div>
              <div className="pt-1">
                <span
                  className="handiBold text-3xl text-[#2D2654]"
                  style={{ fontFamily: "Handi-Bold, sans-serif" }}
                >
                  {totalPct}٪
                </span>
                <span className="handiReg text-xs text-[#9B93C8] mr-1">
                  إجمالي
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* DAILY TASKS */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2
                className="handiBold text-base text-[#2D2654]"
                style={{ fontFamily: "Handi-Bold, sans-serif" }}
              >
                المهام اليومية
              </h2>
              <AddButton color="#6C63FF" onClick={() => setModal("daily")} />
            </div>
            <span className="handiReg text-xs bg-[#EEE8FF] text-[#6C63FF] px-3 py-1 rounded-full">
              {daily.filter((t) => t.done).length}/{daily.length}
            </span>
          </div>
          <ProgressBar pct={dailyPct} color="#6C63FF" />
          <div className="space-y-2">
            {daily.length === 0 && (
              <button
                onClick={() => setModal("daily")}
                className="w-full py-6 rounded-2xl border-2 border-dashed border-[#C5BCE8]
                  text-[#C5BCE8] handiReg text-sm text-center hover:border-[#6C63FF]
                  hover:text-[#6C63FF] transition-all duration-200"
              >
                اضغط لإضافة مهمة يومية +
              </button>
            )}
            {daily.map((t) => (
              <TaskCard
                key={t.id}
                task={t}
                onToggle={(id) => toggleTask("daily", id)}
                onDelete={(id) => deleteTask("daily", id)}
              />
            ))}
          </div>
        </section>

        {/* WORK TASKS */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2
                className="handiBold text-base text-[#2D2654]"
                style={{ fontFamily: "Handi-Bold, sans-serif" }}
              >
                مهام العمل
              </h2>
              <AddButton color="#43C6AC" onClick={() => setModal("work")} />
            </div>
            <span className="handiReg text-xs bg-[#E6F9F6] text-[#2BAF98] px-3 py-1 rounded-full">
              {work.filter((t) => t.done).length}/{work.length}
            </span>
          </div>
          <ProgressBar pct={workPct} color="#43C6AC" />
          <div className="space-y-2">
            {work.length === 0 && (
              <button
                onClick={() => setModal("work")}
                className="w-full py-6 rounded-2xl border-2 border-dashed border-[#A5D8D0]
                  text-[#A5D8D0] handiReg text-sm text-center hover:border-[#43C6AC]
                  hover:text-[#43C6AC] transition-all duration-200"
              >
                اضغط لإضافة مهمة عمل +
              </button>
            )}
            {work.map((t) => (
              <TaskCard
                key={t.id}
                task={t}
                onToggle={(id) => toggleTask("work", id)}
                onDelete={(id) => deleteTask("work", id)}
              />
            ))}
          </div>
        </section>

        {/* STATUS */}
        <StatusCard pct={totalPct} />

        {/* BAR CHART */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#E8E4F3] p-6">
          <h2
            className="handiBold text-sm text-[#2D2654] mb-4"
            style={{ fontFamily: "Handi-Bold, sans-serif" }}
          >
            مقارنة التقدم
          </h2>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart
              data={barData}
              layout="vertical"
              margin={{ top: 0, right: 0, left: 8, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
                stroke="#F0EDF9"
              />
              <XAxis
                type="number"
                domain={[0, 100]}
                tick={{
                  fontSize: 10,
                  fill: "#9B93C8",
                  fontFamily: "Handi-Regular",
                }}
                tickFormatter={(v) => `${v}٪`}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{
                  fontSize: 11,
                  fill: "#2D2654",
                  fontFamily: "Handi-Regular",
                }}
                axisLine={false}
                tickLine={false}
                width={105}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "#F6F4FC" }}
              />
              <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={28}>
                <Cell fill="#6C63FF" />
                <Cell fill="#43C6AC" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <p className="handiReg text-center text-xs text-[#C5BCE8]">
          كل يوم هو فرصة جديدة ✨
        </p>
      </div>

      {/* MODAL */}
      {modal && (
        <AddTaskModal
          type={modal}
          onClose={() => setModal(null)}
          onAdd={(task) => addTask(modal, task)}
        />
      )}
    </div>
  );
}

// ─── Root Export ───────────────────────────────────────────────────────────────
export default function DailyDashboard() {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    // Get session on first load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoadingAuth(false);
    });

    // Listen for login / logout
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  // Checking session...
  if (loadingAuth) {
    return (
      <div className="min-h-screen bg-[#F6F4FC] flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-4 border-[#6C63FF] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!user) return <LoginScreen />;

  return (
    <TasksPage
      userId={user.id}
      userEmail={user.email}
      onSignOut={() => supabase.auth.signOut()}
    />
  );
}
