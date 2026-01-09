import { Globe, Zap } from "lucide-react";


const Footer = () => (
  <footer className="bg-[#050505] border-t border-white/5 py-16 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="size-8 bg-[#da500b] rounded flex items-center justify-center text-white">
          <Zap size={18} fill="currentColor" />
        </div>
        <span className="text-xl font-bold text-white">Ryze</span>
      </div>
      <div className="text-gray-500 text-sm">
        © 2026 Ryze AI Inc. All rights reserved.
      </div>
      <div className="flex gap-6">
        <Globe size={20} className="text-gray-500 hover:text-white cursor-pointer" />
        <div className="size-5 bg-gray-500 hover:bg-white cursor-pointer rounded-full" />
        <div className="size-5 bg-gray-500 hover:bg-white cursor-pointer rounded-full" />
      </div>
    </div>
  </footer>
);


export default Footer;