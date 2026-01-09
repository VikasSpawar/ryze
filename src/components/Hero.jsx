import GridBackground from "./GridBackground";
import { motion } from "framer-motion";
import Badge from "./Badge";
import Button from "./Button";
import { ArrowRight, PlayCircle, TrendingUp, Sparkles } from "lucide-react";
import TiltCard from "./TiltCard";



const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <GridBackground />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-8 border-[#da500b]/30 bg-[#da500b]/10">Autonomous Ad Management</Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.95]">
            Stop Burning Cash.<br />
            Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#da500b] via-[#ff8c42] to-[#da500b] bg-[length:200%_auto] animate-gradient">Ryzing.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            The first AI agent that audits, optimizes, and scales your ad campaigns 24/7. Connect your accounts and let Ryze handle the rest.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <Button variant="primary" className="px-8 py-4 text-lg">
              Start Free Trial <ArrowRight size={20} />
            </Button>
            <Button variant="secondary" className="px-8 py-4 text-lg">
              <PlayCircle size={20} /> View Demo
            </Button>
          </div>
        </motion.div>

        {/* 3D Tilt Dashboard */}
        <div className="relative max-w-5xl mx-auto group">
          <TiltCard className="rounded-2xl">
            <div className="relative rounded-2xl bg-[#121212] border border-white/10 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
              
              {/* Glossy Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-20" />
              
              {/* Fake UI Header */}
              <div className="h-12 border-b border-white/5 bg-[#1a1a1a] flex items-center justify-between px-4 gap-2 relative z-10">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-red-500/20" />
                  <div className="size-3 rounded-full bg-yellow-500/20" />
                  <div className="size-3 rounded-full bg-green-500/20" />
                </div>
                <div className="text-[10px] text-gray-500 font-mono">dashboard.ryze.ai</div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 md:p-10 grid grid-cols-12 gap-6 h-full relative z-10">
                
                {/* Main Graph Area */}
                <div className="col-span-12 md:col-span-8 flex flex-col gap-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-gray-500 font-mono mb-1">TOTAL REVENUE</p>
                      <p className="text-4xl font-bold text-white">$124,592.00</p>
                    </div>
                    <div className="text-emerald-500 flex items-center gap-1 font-bold bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20">
                      <TrendingUp size={16} /> +24%
                    </div>
                  </div>
                  
                  {/* Dynamic Graph */}
                  <div className="flex-1 bg-gradient-to-t from-[#da500b]/5 to-transparent rounded-xl border border-white/5 relative overflow-hidden group-hover:border-[#da500b]/20 transition-colors duration-500">
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                     <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                       <defs>
                         <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                           <stop offset="0%" stopColor="#da500b" stopOpacity="0.4" />
                           <stop offset="100%" stopColor="#da500b" stopOpacity="0" />
                         </linearGradient>
                       </defs>
                       <path d="M0,150 C100,140 200,160 300,100 S600,80 900,40 L900,300 L0,300 Z" fill="url(#gradient)" />
                       <path d="M0,150 C100,140 200,160 300,100 S600,80 900,40" stroke="#da500b" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke" />
                     </svg>
                     
                     {/* Floating Points */}
                     <motion.div 
                       animate={{ y: [0, -10, 0] }} 
                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                       className="absolute top-[30%] left-[30%] size-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20"
                     />
                  </div>
                </div>

                {/* Sidebar Stats */}
                <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
                  <div className="bg-[#1a1a1a] border border-white/10 p-5 rounded-xl hover:bg-[#222] transition-colors shadow-xl">
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Live Actions</p>
                        <div className="size-2 bg-[#da500b] rounded-full animate-pulse" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 text-sm text-gray-300">
                        <div className="mt-1 size-4 rounded bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-[10px]">✓</div>
                        <div>
                            <span className="block font-medium text-white">Paused "Summer_V2"</span>
                            <span className="text-xs text-gray-500">Low CTR detected (0.4%)</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 text-sm text-gray-300">
                        <div className="mt-1 size-4 rounded bg-blue-500/20 text-blue-500 flex items-center justify-center text-[10px]">↑</div>
                        <div>
                            <span className="block font-medium text-white">Scaled "Winner_01"</span>
                            <span className="text-xs text-gray-500">+15% Budget allocation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#da500b] p-4 rounded-xl text-white flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden group/card shadow-lg shadow-[#da500b]/20">
                    <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors" />
                    <Sparkles className="mb-2 opacity-80" />
                    <p className="font-bold text-2xl relative z-10">4.2x ROAS</p>
                    <p className="text-white/70 text-sm relative z-10">Achieved this week</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambient Glow Behind Dashboard */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#da500b] to-purple-600 rounded-2xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 -z-10" />
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;