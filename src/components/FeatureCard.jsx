
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';                      


const FeatureCard = ({ title, desc, icon: Icon, className = "", children, delay = 0 }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
  
    function handleMouseMove({ currentTarget, clientX, clientY }) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay }}
        onMouseMove={handleMouseMove}
        className={`bg-[#121212] border border-white/5 rounded-3xl p-8 flex flex-col relative group overflow-hidden ${className}`}
      >
        {/* Spotlight Effect */}
        <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
                background: useMotionTemplate`
                radial-gradient(
                    650px circle at ${mouseX}px ${mouseY}px,
                    rgba(218, 80, 11, 0.15),
                    transparent 80%
                )
                `,
            }}
        />
        
        <div className="mb-6 size-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-white border border-white/10 group-hover:border-[#da500b]/50 group-hover:text-[#da500b] transition-colors relative z-10">
          <Icon size={24} />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{title}</h3>
        <p className="text-gray-400 leading-relaxed mb-8 relative z-10">{desc}</p>
        
        <div className="mt-auto relative z-10 w-full">
          {children}
        </div>
      </motion.div>
    );
};

export default FeatureCard;