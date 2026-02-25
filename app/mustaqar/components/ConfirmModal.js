"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="
              relative
              w-full
              max-w-md
              bg-white
              rounded-3xl
              p-6
              shadow-2xl
            "
          >
            <h2 className="text-3xl font-extrabold text-[#0B1261] text-center">
              {title}
            </h2>

            <p className="text-gray-600 mb-6 font-bold text-center text-xl">
              {description}
            </p>

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="w-full py-2 rounded-xl border border-gray-300 font-extrabold"
              >
                إلغاء
              </button>

              <button
                onClick={onConfirm}
                className="w-full py-2 rounded-xl bg-[#0B1261] text-white font-extrabold"
              >
                تأكيد
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
