type SectionDividerProps = {
  label?: string;
};

export default function SectionDivider({ label = "•" }: SectionDividerProps) {
  return (
    <div className="mx-auto flex max-w-7xl items-center px-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-slate-200" />
      <span className="mx-4 shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-teal-700 shadow-sm">
        {label}
      </span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 to-slate-200" />
    </div>
  );
}
