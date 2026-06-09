const variants = {
  info: {
    wrap:  "bg-sky-50 border-sky-400",
    label: "text-sky-900",
    icon: (
      <svg className="h-4 w-4 shrink-0 mt-0.5 text-sky-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
      </svg>
    ),
  },
  warning: {
    wrap:  "bg-amber-50 border-amber-400",
    label: "text-amber-900",
    icon: (
      <svg className="h-4 w-4 shrink-0 mt-0.5 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
  },
  success: {
    wrap:  "bg-emerald-50 border-emerald-400",
    label: "text-emerald-900",
    icon: (
      <svg className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  alert: {
    wrap:  "bg-red-50 border-red-400",
    label: "text-red-900",
    icon: (
      <svg className="h-4 w-4 shrink-0 mt-0.5 text-red-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
  },
};

export default function InfoBox({ type = "info", title, children }) {
  const v = variants[type] ?? variants.info;
  return (
    <div className={`border-l-4 rounded-r-xl px-4 py-3.5 mb-6 ${v.wrap}`}>
      <div className={`flex items-start gap-2 font-semibold text-sm mb-1 ${v.label}`}>
        {v.icon}
        <span>{title}</span>
      </div>
      <div className={`text-sm leading-relaxed pl-6 ${v.label} font-normal opacity-90`}>
        {children}
      </div>
    </div>
  );
}
