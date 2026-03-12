"use client";

import { useState, useMemo, useEffect } from "react";

// ─── localStorage ─────────────────────────────────────────────────────────────
function load(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const r = localStorage.getItem(key);
    return r ? JSON.parse(r) : fallback;
  } catch {
    return fallback;
  }
}
function save(key, val) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch {}
}

// ─── Status config ────────────────────────────────────────────────────────────
const STATUS = {
  accepted: { label: "قبل", color: "#22C55E", bg: "#F0FDF4", dot: "#16A34A" },
  rejected: { label: "رفض", color: "#EF4444", bg: "#FEF2F2", dot: "#DC2626" },
  no_reply: {
    label: "لم يرد",
    color: "#F59E0B",
    bg: "#FFFBEB",
    dot: "#D97706",
  },
  later: {
    label: "سيخبرنا لاحقاً",
    color: "#6C63FF",
    bg: "#F5F3FF",
    dot: "#5B4FCF",
  },
};

const STATUS_KEYS = Object.keys(STATUS);

const DEFAULT_CLIENTS = [
  {
    id: "c1",
    name: "أحمد الزهراني",
    cafe: "كافيه ذا بريم",
    slug: "thebream",
    phone: "0501234567",
    status: "accepted",
    note: "متحمس جداً للتجربة",
    date: "2026-03-01",
  },
 
  {
    id: "c3",
    name: "خالد العتيبي",
    cafe: "سبيشلتي روستر",
    slug: "specialty-r",
    phone: "0531122334",
    status: "no_reply",
    note: "",
    date: "2026-03-05",
  },
  {
    id: "c4",
    name: "نورة الدوسري",
    cafe: "بلاك كوف",
    slug: "blackcove",
    phone: "0509988776",
    status: "rejected",
    note: "لديهم نظام مشابه بالفعل",
    date: "2026-03-07",
  },
  {
    id: "c5",
    name: "فيصل الشمري",
    cafe: "أريجا كافيه",
    slug: "areeja",
    phone: "0555443322",
    status: "accepted",
    note: "طلب عرض سعر إضافي",
    date: "2026-03-08",
  },
  {
    id: "c6",
    name: "لمى القحطاني",
    cafe: "ستيم هاوس",
    slug: "steamhouse",
    phone: "0523344556",
    status: "no_reply",
    note: "",
    date: "2026-03-10",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function uid() {
  return `c-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
function today() {
  return new Date().toISOString().slice(0, 10);
}
function arabicDate(d) {
  return new Date(d).toLocaleDateString("ar-SA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// ─── StatusBadge ──────────────────────────────────────────────────────────────
function StatusBadge({ status, size = "md" }) {
  const s = STATUS[status];
  const px = size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium handiReg ${px}`}
      style={{ background: s.bg, color: s.color }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: s.dot }}
      />
      {s.label}
    </span>
  );
}

// ─── Stats bar ────────────────────────────────────────────────────────────────
function StatsBar({ clients }) {
  const counts = useMemo(() => {
    const c = {
      accepted: 0,
      rejected: 0,
      no_reply: 0,
      later: 0,
      total: clients.length,
    };
    clients.forEach((cl) => c[cl.status]++);
    return c;
  }, [clients]);

  const items = [
    {
      key: "total",
      label: "الكل",
      val: counts.total,
      color: "#6C63FF",
      bg: "#F5F3FF",
    },
    {
      key: "accepted",
      label: "قبلوا",
      val: counts.accepted,
      color: "#22C55E",
      bg: "#F0FDF4",
    },
    {
      key: "later",
      label: "لاحقاً",
      val: counts.later,
      color: "#6C63FF",
      bg: "#EDE9FE",
    },
    {
      key: "no_reply",
      label: "لم يردوا",
      val: counts.no_reply,
      color: "#F59E0B",
      bg: "#FFFBEB",
    },
    {
      key: "rejected",
      label: "رفضوا",
      val: counts.rejected,
      color: "#EF4444",
      bg: "#FEF2F2",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-2">
      {items.map((it) => (
        <div
          key={it.key}
          className="rounded-2xl p-3 text-center flex flex-col items-center gap-1"
          style={{ background: it.bg }}
        >
          <span
            className="handiBold text-lg leading-none"
            style={{ color: it.color, fontFamily: "Handi-Bold,sans-serif" }}
          >
            {it.val}
          </span>
          <span
            className="handiReg text-[10px] leading-tight"
            style={{ color: it.color }}
          >
            {it.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── ClientCard (mobile) ──────────────────────────────────────────────────────
function ClientCard({ client, onEdit, onDelete }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="bg-white rounded-2xl border border-[#EEEAF8] shadow-sm overflow-hidden
                    transition-all duration-300"
      style={{ animation: "fadeSlide 0.25s ease-out" }}
    >
      <button
        className="w-full flex items-center gap-3 p-4 text-right active:bg-[#FAFAFE]"
        onClick={() => setExpanded((e) => !e)}
      >
        {/* avatar */}
        <div
          className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-sm handiBold"
          style={{
            background: stringToColor(client.name),
            fontFamily: "Handi-Bold,sans-serif",
          }}
        >
          {client.name.trim().charAt(0)}
        </div>

        <div className="flex-1 min-w-0">
          <p
            className="handiBold text-sm text-[#1E1743] truncate text-right"
            style={{ fontFamily: "Handi-Bold,sans-serif" }}
          >
            {client.name}
          </p>
          <p className="handiReg text-xs text-[#9B93C8] truncate text-right">
            {client.cafe}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <StatusBadge status={client.status} size="sm" />
          <p className="handiReg text-[10px] text-[#C5BCE8]">
            {arabicDate(client.date)}
          </p>
        </div>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`flex-shrink-0 text-[#C5BCE8] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-3 border-t border-[#F0EDF9]">
          <div className="grid grid-cols-2 gap-3 pt-3">
            <InfoChip label="سلق" value={`/${client.slug}`} icon="🔗" mono />
            <InfoChip label="رقم الجوال" value={client.phone} icon="📱" />
          </div>
          {client.note && (
            <div className="bg-[#FAFAFE] rounded-xl p-3 text-right">
              <p className="handiReg text-xs text-[#9B93C8] mb-1">ملاحظة</p>
              <p className="handiReg text-sm text-[#1E1743]">{client.note}</p>
            </div>
          )}
          <div className="flex gap-2 pt-1">
            <button
              onClick={() => onDelete(client.id)}
              className="flex-1 py-2.5 rounded-xl border border-red-100 text-red-400
                handiReg text-xs flex items-center justify-center gap-1.5
                hover:bg-red-50 transition-colors duration-200 active:scale-95"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M2 3h9M5 3V2h3v1M4 3l.5 7.5h4L9 3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              حذف
            </button>
            <button
              onClick={() => onEdit(client)}
              className="flex-[2] py-2.5 rounded-xl text-white handiReg text-xs
                flex items-center justify-center gap-1.5
                active:scale-95 transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #6C63FF, #9B93FF)",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M8 2.5l2.5 2.5-6 6H2V8.5l6-6z"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              تعديل
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function InfoChip({ label, value, icon, mono }) {
  return (
    <div className="bg-[#F6F4FC] rounded-xl p-2.5 text-right">
      <p className="handiReg text-[10px] text-[#9B93C8] mb-0.5">
        {icon} {label}
      </p>
      <p
        className={`text-xs text-[#1E1743] truncate ${mono ? "font-mono" : "handiReg"}`}
      >
        {value}
      </p>
    </div>
  );
}

// ─── Desktop table row ────────────────────────────────────────────────────────
function TableRow({ client, onEdit, onDelete, index }) {
  return (
    <tr
      className="group border-b border-[#F0EDF9] hover:bg-[#FAFAFE] transition-colors duration-150"
      style={{ animation: `fadeSlide 0.2s ease-out ${index * 0.04}s both` }}
    >
      <td className="px-4 py-3 text-right">
        <div className="flex items-center gap-3 justify-end">
          <div className="text-right">
            <p
              className="handiBold text-sm text-[#1E1743]"
              style={{ fontFamily: "Handi-Bold,sans-serif" }}
            >
              {client.name}
            </p>
            <p className="handiReg text-xs text-[#9B93C8]">{client.phone}</p>
          </div>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm flex-shrink-0"
            style={{
              background: stringToColor(client.name),
              fontFamily: "Handi-Bold,sans-serif",
            }}
          >
            {client.name.trim().charAt(0)}
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-right">
        <p className="handiReg text-sm text-[#1E1743]">{client.cafe}</p>
      </td>
      <td className="px-4 py-3 text-right">
        <code className="handiReg text-xs text-[#6C63FF] bg-[#F5F3FF] px-2 py-1 rounded-lg">
          /{client.slug}
        </code>
      </td>
      <td className="px-4 py-3">
        <StatusBadge status={client.status} />
      </td>
      <td className="px-4 py-3 text-right">
        <p className="handiReg text-xs text-[#9B93C8]">
          {arabicDate(client.date)}
        </p>
      </td>
      <td className="px-4 py-3 text-right max-w-[160px]">
        <p className="handiReg text-xs text-[#9B93C8] truncate">
          {client.note || "—"}
        </p>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => onEdit(client)}
            className="w-8 h-8 rounded-lg bg-[#F5F3FF] text-[#6C63FF] flex items-center justify-center
              hover:bg-[#6C63FF] hover:text-white transition-all duration-200"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M8 2.5l2.5 2.5-6 6H2V8.5l6-6z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => onDelete(client.id)}
            className="w-8 h-8 rounded-lg bg-red-50 text-red-400 flex items-center justify-center
              hover:bg-red-500 hover:text-white transition-all duration-200"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M2 3h9M5 3V2h3v1M4 3l.5 7.5h4L9 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}

// ─── Add/Edit Modal ───────────────────────────────────────────────────────────
function ClientModal({ initial, onClose, onSave }) {
  const isEdit = !!initial?.id;
  const empty = {
    name: "",
    cafe: "",
    slug: "",
    phone: "",
    status: "no_reply",
    note: "",
    date: today(),
  };
  const [form, setForm] = useState(initial ? { ...initial } : empty);
  const [errors, setErrors] = useState({});

  function set(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "مطلوب";
    if (!form.cafe.trim()) e.cafe = "مطلوب";
    if (!form.slug.trim()) e.slug = "مطلوب";
    if (!form.phone.trim()) e.phone = "مطلوب";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSave() {
    if (!validate()) return;
    onSave({
      ...form,
      id: form.id || uid(),
      slug: form.slug.replace(/^\//, ""),
    });
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div
        className="relative w-full md:max-w-lg bg-white md:rounded-3xl rounded-t-3xl
                      shadow-2xl overflow-hidden flex flex-col max-h-[92vh] md:max-h-[85vh]"
        style={{ animation: "slideUp 0.3s cubic-bezier(0.32,0.72,0,1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-[#F0EDF9] flex-shrink-0">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F6F4FC] text-[#9B93C8] flex items-center justify-center
              hover:bg-[#EEE8FF] transition-colors duration-200"
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
          <p
            className="handiBold text-base text-[#1E1743]"
            style={{ fontFamily: "Handi-Bold,sans-serif" }}
          >
            {isEdit ? "تعديل العميل" : "إضافة عميل جديد"}
          </p>
          <div className="w-8" />
        </div>

        {/* body */}
        <div className="overflow-y-auto flex-1 p-5 space-y-4" dir="rtl">
          <div className="grid grid-cols-1 gap-4">
            <Field label="اسم صاحب المقهى" error={errors.name}>
              <input
                dir="rtl"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="مثال: أحمد الزهراني"
                className={inputCls(errors.name)}
              />
            </Field>

            <Field label="اسم المقهى" error={errors.cafe}>
              <input
                dir="rtl"
                value={form.cafe}
                onChange={(e) => set("cafe", e.target.value)}
                placeholder="مثال: كافيه ذا بريم"
                className={inputCls(errors.cafe)}
              />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="الرابط (Slug)" error={errors.slug}>
                <div className="relative">
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9B93C8] text-xs handiReg select-none">
                    /
                  </span>
                  <input
                    dir="ltr"
                    value={form.slug}
                    onChange={(e) => set("slug", e.target.value)}
                    placeholder="cafe-slug"
                    className={`${inputCls(errors.slug)} pr-6 text-left font-mono text-sm`}
                  />
                </div>
              </Field>
              <Field label="رقم الجوال" error={errors.phone}>
                <input
                  dir="ltr"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="05XXXXXXXX"
                  className={`${inputCls(errors.phone)} text-left`}
                />
              </Field>
            </div>

            <Field label="الحالة">
              <div className="grid grid-cols-2 gap-2">
                {STATUS_KEYS.map((k) => (
                  <button
                    key={k}
                    onClick={() => set("status", k)}
                    className={`py-2.5 px-3 rounded-xl text-xs handiReg flex items-center justify-center gap-2
                      border-2 transition-all duration-200 active:scale-95
                      ${form.status === k ? "border-transparent" : "border-[#F0EDF9] bg-white text-[#9B93C8]"}`}
                    style={
                      form.status === k
                        ? {
                            background: STATUS[k].bg,
                            color: STATUS[k].color,
                            borderColor: STATUS[k].color + "44",
                          }
                        : {}
                    }
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background:
                          form.status === k ? STATUS[k].dot : "#D1D5DB",
                      }}
                    />
                    {STATUS[k].label}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="تاريخ التواصل">
              <input
                type="date"
                value={form.date}
                onChange={(e) => set("date", e.target.value)}
                className={`${inputCls()} text-right`}
                dir="rtl"
              />
            </Field>

            <Field label="ملاحظة (اختياري)">
              <textarea
                dir="rtl"
                value={form.note}
                onChange={(e) => set("note", e.target.value)}
                rows={3}
                placeholder="أي ملاحظات عن العميل..."
                className={`${inputCls()} resize-none`}
              />
            </Field>
          </div>
        </div>

        {/* footer */}
        <div className="px-5 pb-6 pt-3 border-t border-[#F0EDF9] flex-shrink-0">
          <button
            onClick={handleSave}
            className="w-full py-3.5 rounded-2xl text-white handiBold text-sm
              flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #6C63FF, #9B93FF)",
              fontFamily: "Handi-Bold,sans-serif",
            }}
          >
            {isEdit ? "حفظ التعديلات" : "إضافة العميل"}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(60px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div className="space-y-1.5 text-right">
      <label className="handiReg text-xs text-[#6B6490] block">{label}</label>
      {children}
      {error && <p className="handiReg text-[10px] text-red-400">{error}</p>}
    </div>
  );
}

function inputCls(error) {
  return `w-full h-11 bg-[#F6F4FC] rounded-xl px-3 text-sm text-[#1E1743] handiReg
    outline-none border-2 transition-all duration-200 text-right
    ${error ? "border-red-300 bg-red-50" : "border-transparent focus:border-[#C5BCE8] focus:bg-white"}`;
}

// ─── Color hash for avatars ───────────────────────────────────────────────────
function stringToColor(str) {
  const palette = [
    "#6C63FF",
    "#EC4899",
    "#F59E0B",
    "#10B981",
    "#3B82F6",
    "#8B5CF6",
    "#EF4444",
    "#06B6D4",
  ];
  let h = 0;
  for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h);
  return palette[Math.abs(h) % palette.length];
}

// ─── Filter chip ──────────────────────────────────────────────────────────────
function FilterChip({ label, active, color, bg, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs handiReg
        border transition-all duration-200 active:scale-95
        ${active ? "border-transparent shadow-sm" : "border-[#E8E4F3] bg-white text-[#9B93C8] hover:border-[#C5BCE8]"}`}
      style={active ? { background: bg, color, borderColor: color + "44" } : {}}
    >
      {label}
    </button>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ClientsPage() {
  const [clients, setClients] = useState(() =>
    load("saas_clients", DEFAULT_CLIENTS),
  );
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null); // null | "add" | client-object
  const [deleteId, setDeleteId] = useState(null);
  const [sortBy, setSortBy] = useState("date"); // "date" | "name" | "status"
  const [sortDir, setSortDir] = useState("desc");

  useEffect(() => {
    save("saas_clients", clients);
  }, [clients]);

  function handleSave(client) {
    setClients((prev) => {
      const exists = prev.find((c) => c.id === client.id);
      return exists
        ? prev.map((c) => (c.id === client.id ? client : c))
        : [...prev, client];
    });
  }

  function handleDelete(id) {
    setClients((prev) => prev.filter((c) => c.id !== id));
    setDeleteId(null);
  }

  function toggleSort(col) {
    if (sortBy === col) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortBy(col);
      setSortDir("asc");
    }
  }

  const filtered = useMemo(() => {
    let list = [...clients];
    if (filter !== "all") list = list.filter((c) => c.status === filter);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.cafe.toLowerCase().includes(q) ||
          c.slug.toLowerCase().includes(q) ||
          c.phone.includes(q),
      );
    }
    list.sort((a, b) => {
      let va = a[sortBy],
        vb = b[sortBy];
      if (sortBy === "status") {
        va = STATUS[va].label;
        vb = STATUS[vb].label;
      }
      const r = va < vb ? -1 : va > vb ? 1 : 0;
      return sortDir === "asc" ? r : -r;
    });
    return list;
  }, [clients, filter, search, sortBy, sortDir]);

  const filterOptions = [
    { key: "all", label: "الكل", color: "#6C63FF", bg: "#F5F3FF" },
    {
      key: "accepted",
      label: STATUS.accepted.label,
      color: STATUS.accepted.color,
      bg: STATUS.accepted.bg,
    },
    {
      key: "later",
      label: STATUS.later.label,
      color: STATUS.later.color,
      bg: STATUS.later.bg,
    },
    {
      key: "no_reply",
      label: STATUS.no_reply.label,
      color: STATUS.no_reply.color,
      bg: STATUS.no_reply.bg,
    },
    {
      key: "rejected",
      label: STATUS.rejected.label,
      color: STATUS.rejected.color,
      bg: STATUS.rejected.bg,
    },
  ];

  const SortIcon = ({ col }) => (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className="inline ml-1 opacity-50"
    >
      {sortBy === col ? (
        <path
          d={sortDir === "asc" ? "M2 7l3-4 3 4" : "M2 3l3 4 3-4"}
          stroke="#6C63FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M2 3.5l3-2 3 2M2 6.5l3 2 3-2"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F6F4FC]"
      style={{ fontFamily: "Handi-Regular,sans-serif" }}
    >
      {/* bg blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#6C63FF] opacity-[0.06] blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-64 h-64 rounded-full bg-[#43C6AC] opacity-[0.06] blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16 pt-6 space-y-5">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="handiBold text-2xl text-[#1E1743] leading-tight"
              style={{ fontFamily: "Handi-Bold,sans-serif" }}
            >
              متابعة العملاء
            </h1>
            <p className="handiReg text-xs text-[#9B93C8] mt-0.5">
              {clients.length} عميل مسجّل
            </p>
          </div>
          <button
            onClick={() => setModal("add")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white handiBold text-sm
              shadow-lg shadow-[#6C63FF33] active:scale-95 transition-all duration-200"
            style={{
              background: "linear-gradient(135deg,#6C63FF,#9B93FF)",
              fontFamily: "Handi-Bold,sans-serif",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 2v10M2 7h10"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="hidden sm:inline">إضافة عميل</span>
          </button>
        </div>

        {/* STATS */}
        <StatsBar clients={clients} />

        {/* SEARCH + FILTERS */}
        <div className="space-y-3">
          {/* search */}
          <div className="relative">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#C5BCE8]"
            >
              <circle
                cx="7"
                cy="7"
                r="4.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M10.5 10.5l2.5 2.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              dir="rtl"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث بالاسم، المقهى، الرابط..."
              className="w-full h-11 bg-white rounded-2xl pr-10 pl-4 text-sm text-[#1E1743]
                handiReg border-2 border-[#EEEAF8] focus:border-[#C5BCE8] outline-none
                transition-all duration-200 text-right"
            />
          </div>

          {/* filter chips */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {filterOptions.map((f) => (
              <FilterChip
                key={f.key}
                label={f.label}
                active={filter === f.key}
                color={f.color}
                bg={f.bg}
                onClick={() => setFilter(f.key)}
              />
            ))}
          </div>
        </div>

        {/* EMPTY STATE */}
        {filtered.length === 0 && (
          <div className="bg-white rounded-3xl border border-[#EEEAF8] py-16 text-center">
            <p className="text-4xl mb-3">📭</p>
            <p
              className="handiBold text-sm text-[#9B93C8]"
              style={{ fontFamily: "Handi-Bold,sans-serif" }}
            >
              لا توجد نتائج
            </p>
            <p className="handiReg text-xs text-[#C5BCE8] mt-1">
              {search ? "جرب كلمة بحث أخرى" : "أضف أول عميل لك"}
            </p>
          </div>
        )}

        {/* MOBILE CARDS (< md) */}
        {filtered.length > 0 && (
          <div className="md:hidden space-y-2">
            {filtered.map((c) => (
              <ClientCard
                key={c.id}
                client={c}
                onEdit={(cl) => setModal(cl)}
                onDelete={(id) => setDeleteId(id)}
              />
            ))}
          </div>
        )}

        {/* DESKTOP TABLE (≥ md) */}
        {filtered.length > 0 && (
          <div className="hidden md:block bg-white rounded-3xl border border-[#EEEAF8] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full" dir="rtl">
                <thead>
                  <tr className="border-b border-[#F0EDF9] bg-[#FAFAFE]">
                    {[
                      { key: "name", label: "العميل" },
                      { key: "cafe", label: "المقهى" },
                      { key: "slug", label: "الرابط" },
                      { key: "status", label: "الحالة" },
                      { key: "date", label: "التاريخ" },
                      { key: "note", label: "ملاحظة" },
                      { key: null, label: "" },
                    ].map((col, i) => (
                      <th
                        key={i}
                        onClick={() => col.key && toggleSort(col.key)}
                        className={`px-4 py-3 text-right handiReg text-xs text-[#9B93C8]
                            ${col.key ? "cursor-pointer hover:text-[#6C63FF] select-none" : ""}`}
                      >
                        {col.label}
                        {col.key && <SortIcon col={col.key} />}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c, i) => (
                    <TableRow
                      key={c.id}
                      client={c}
                      index={i}
                      onEdit={(cl) => setModal(cl)}
                      onDelete={(id) => setDeleteId(id)}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {/* table footer */}
            <div className="px-5 py-3 border-t border-[#F0EDF9] flex items-center justify-between">
              <p className="handiReg text-xs text-[#C5BCE8]">
                عرض {filtered.length} من {clients.length}
              </p>
              <div className="flex items-center gap-1">
                {STATUS_KEYS.map((k) => (
                  <span
                    key={k}
                    className="flex items-center gap-1 px-2 py-0.5 rounded-full handiReg text-[10px]"
                    style={{ background: STATUS[k].bg, color: STATUS[k].color }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: STATUS[k].dot }}
                    />
                    {clients.filter((c) => c.status === k).length}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* DELETE CONFIRM */}
      {deleteId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setDeleteId(null)}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center"
            style={{ animation: "slideUp 0.2s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"
                  stroke="#EF4444"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              className="handiBold text-base text-[#1E1743] mb-2"
              style={{ fontFamily: "Handi-Bold,sans-serif" }}
            >
              حذف العميل؟
            </p>
            <p className="handiReg text-sm text-[#9B93C8] mb-5">
              لا يمكن التراجع عن هذا الإجراء
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 py-3 rounded-2xl bg-[#F6F4FC] text-[#9B93C8] handiReg text-sm
                  hover:bg-[#EEEAF8] transition-colors duration-200"
              >
                إلغاء
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="flex-1 py-3 rounded-2xl bg-red-500 text-white handiBold text-sm
                  hover:bg-red-600 transition-colors duration-200"
                style={{ fontFamily: "Handi-Bold,sans-serif" }}
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD / EDIT MODAL */}
      {modal && (
        <ClientModal
          initial={modal === "add" ? null : modal}
          onClose={() => setModal(null)}
          onSave={handleSave}
        />
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes slideUp {
          from { transform: translateY(60px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
