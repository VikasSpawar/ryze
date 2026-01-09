import { Sparkles } from "lucide-react";


const Badge = ({ children, className = "" }) => (
  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#da500b]/20 bg-[#da500b]/10 text-[#da500b] ${className}`}>
    <Sparkles size={12} />
    {children}
  </div>
);

export default Badge;