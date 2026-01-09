
import { motion } from 'framer-motion';
import Badge from './Badge';


const SectionHeader = ({ badge, title, subtitle, align = 'center' }) => (
  <div className={`flex flex-col gap-4 mb-16 ${align === 'center' ? 'text-center items-center' : 'text-left items-start'}`}>
    {badge && <Badge>{badge}</Badge>}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-gray-400 max-w-2xl leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionHeader;