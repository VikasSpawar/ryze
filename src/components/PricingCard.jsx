import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";


const PricingCard = ({ tier, price, features, recommended = false }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`p-8 rounded-3xl border flex flex-col transition-all ${recommended ? 'bg-[#121212] border-[#da500b] shadow-2xl shadow-[#da500b]/10 relative z-10 scale-105' : 'bg-[#0a0a0a] border-white/10 hover:border-white/20'}`}
  >
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#da500b] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
        Most Popular
      </div>
    )}
    <h3 className="text-xl font-bold text-white mb-2">{tier}</h3>
    <div className="mb-6 flex items-baseline gap-1">
      <span className="text-4xl font-bold text-white">${price}</span>
      <span className="text-gray-500">/mo</span>
    </div>
    <p className="text-gray-400 text-sm mb-8 pb-8 border-b border-white/5">Perfect for scaling brands looking to automate.</p>
    
    <div className="space-y-4 mb-8 flex-1">
      {features.map((feature) => (
        <div key={feature} className="flex items-center gap-3 text-sm text-gray-300">
          <CheckCircle2 size={16} className="text-[#da500b] shrink-0" />
          {feature}
        </div>
      ))}
    </div>
    
    <Button variant={recommended ? 'primary' : 'secondary'} className="w-full justify-center">
      Choose {tier}
    </Button>
  </motion.div>
);

export default PricingCard;