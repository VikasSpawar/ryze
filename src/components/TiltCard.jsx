
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';


const TiltCard = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Adjusted spring physics for a more responsive
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Increased range from 10 to 25 degrees for intensive visibility
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [25, -25]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-25, 25]);
  
  // Dynamic brightness/glare based on angle
  const brightness = useTransform(mouseY, [-0.5, 0.5], [1.1, 0.9]);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        perspective: 1200, // Explicit CSS perspective is critical for 3D
        transformStyle: "preserve-3d" 
      }}
      className={`relative ${className}`}
    >
       <motion.div
         style={{
           rotateX,
           rotateY,
           filter: useMotionTemplate`brightness(${brightness})`,
           transformStyle: "preserve-3d"
         }}
         className="w-full h-full origin-center"
       >
          {/* Push content forward on Z-axis to enhance depth perception */}
          <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
            {children}
          </div>
       </motion.div>
    </motion.div>
  );
};

export default TiltCard;