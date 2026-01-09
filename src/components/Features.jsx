
import { Globe, PieChart, Wallet, MessageSquare, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";


const Features = () => {
  return (
    <section id="features" className="py-32 px-6 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          badge="Platform Features"
          title="Everything you need to scale."
          subtitle="Replace your fragmented ad stack with one cohesive AI brain."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(0,1fr)]">
          {/* Large Card */}
          <FeatureCard 
            title="Multi-Channel Attribution" 
            desc="Track the customer journey across Meta, Google, TikTok, and more. No more double-counting conversions."
            icon={Globe}
            className="md:col-span-2"
          >
            <div className="bg-[#0f0f0f] rounded-xl p-6 border border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
               
               {['Google', 'Meta', 'TikTok', 'Shopify'].map((platform, i) => (
                 <div key={platform} className="flex items-center gap-2 text-gray-400 font-medium z-10">
                   <div className={`size-2 rounded-full ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-blue-400' : i === 2 ? 'bg-pink-500' : 'bg-green-500'}`} />
                   {platform}
                 </div>
               ))}
               <div className="col-span-2 sm:col-span-4 mt-4 space-y-2">
                 <div className="flex justify-between text-xs text-gray-500 uppercase font-bold tracking-wider">
                    <span>Spend</span>
                    <span>Revenue</span>
                 </div>
                 <div className="h-2 bg-[#262626] rounded-full overflow-hidden flex relative">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "35%" }} transition={{ duration: 1 }} className="bg-blue-500 h-full relative group">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">Google</div>
                    </motion.div>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "25%" }} transition={{ duration: 1, delay: 0.2 }} className="bg-blue-400 h-full" />
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "20%" }} transition={{ duration: 1, delay: 0.4 }} className="bg-pink-500 h-full" />
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "20%" }} transition={{ duration: 1, delay: 0.6 }} className="bg-green-500 h-full" />
                 </div>
               </div>
            </div>
          </FeatureCard>

          {/* Tall Card */}
          <FeatureCard 
            title="Creative Analysis" 
            desc="AI predicts creative fatigue before it happens."
            icon={PieChart}
            className="md:row-span-2"
            delay={0.2}
          >
            <div className="bg-[#0f0f0f] rounded-xl border border-white/5 p-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg animate-pulse border border-white/5" />
                <div className="flex-1">
                  <div className="h-2 w-20 bg-[#1a1a1a] rounded mb-2" />
                  <div className="h-1.5 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "80%" }} transition={{ duration: 1 }} className="h-full bg-emerald-500" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 opacity-60">
                <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg border border-white/5" />
                <div className="flex-1">
                  <div className="h-2 w-20 bg-[#1a1a1a] rounded mb-2" />
                  <div className="h-1.5 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "40%" }} transition={{ duration: 1 }} className="h-full bg-red-500" />
                  </div>
                </div>
              </div>
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-xs text-red-400 mt-4 flex gap-2 items-start">
                <ShieldCheck size={14} className="mt-0.5" />
                <div>
                  <p className="font-bold mb-0.5">Fatigue Detected</p>
                  <p className="opacity-80">Rotate Creative B within 24h</p>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Small Card */}
          <FeatureCard 
            title="Budget Guardrails" 
            desc="Set strict ROAS limits. Ryze kills losing ads instantly."
            icon={Wallet}
            delay={0.3}
          >
             <div className="flex items-center justify-between bg-[#0f0f0f] p-4 rounded-xl border border-white/5">
                <span className="text-gray-400 text-sm">Min. ROAS Target</span>
                <span className="text-[#da500b] font-bold font-mono text-lg">2.5x</span>
             </div>
          </FeatureCard>

          {/* Small Card */}
          <FeatureCard 
            title="Chat Analyst" 
            desc="Ask questions about your data in plain English."
            icon={MessageSquare}
            delay={0.4}
          >
            <div className="bg-[#0f0f0f] p-3 rounded-xl border border-white/5 text-xs text-gray-400 flex items-center gap-2">
              <div className="size-6 rounded-full bg-[#da500b]/20 text-[#da500b] flex items-center justify-center shrink-0">AI</div>
              "Why did CPA increase yesterday?"
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Features;