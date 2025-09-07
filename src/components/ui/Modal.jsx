// src/components/ui/Modal.jsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, title, children }) => {
  // 🔒 Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 "
      onClick={onClose} // ✅ click background closes modal
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // ❌ prevent close when clicking inside
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-4">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
