import { Link } from "react-router-dom";

export default function LinkButton({ to, children, className = "", variant = "primary", ...props }) {
  const base =
    variant === "primary"
      ? `inline-flex items-center justify-center min-w-[11rem] px-5 py-3 bg-emerald-600 text-white rounded-xl text-sm font-semibold shadow-sm hover:bg-emerald-700 active:bg-emerald-800 transition ${className}`
      : `inline-flex items-center justify-center min-w-[11rem] px-5 py-3 bg-white border border-gray-200 text-slate-700 rounded-xl text-sm font-semibold shadow-sm hover:bg-gray-50 active:bg-gray-100 transition ${className}`;

  const isExternal = typeof to === "string" && to.startsWith("http");

  if (isExternal) {
    return (
      <a href={to} className={base} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        <svg className="ml-1.5 h-3.5 w-3.5 opacity-70" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    );
  }

  return (
    <Link to={to} className={base} {...props}>
      {children}
    </Link>
  );
}
