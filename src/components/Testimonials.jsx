import { Star } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";


const Testimonials = () => {
  const reviews = [
    { name: "Sarah L.", role: "CMO @ TechStart", text: "Ryze cut our CPA by 40% in just two weeks. It's like having a team of media buyers." },
    { name: "James K.", role: "Founder @ EcoWear", text: "The creative analysis is a game changer. We know exactly what to design next." },
    { name: "Marcus R.", role: "Head of Growth", text: "Finally, attribution that actually makes sense. Scaling confidently now." }
  ];

  return (
    <section id="testimonials" className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#1a1a1a] to-transparent opacity-50 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Loved by Growth Teams" subtitle="Join 2,000+ brands scaling with autonomous AI." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#121212] p-8 rounded-2xl border border-white/5 hover:border-[#da500b]/30 hover:bg-[#1a1a1a] transition-all group"
            >
              <div className="flex gap-1 text-[#da500b] mb-6 opacity-80 group-hover:opacity-100">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                <div className="size-10 rounded-full bg-gradient-to-br from-[#da500b] to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
