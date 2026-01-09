const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-xl font-bold transition-all duration-200 flex items-center gap-2 active:scale-95 z-10 relative";
  const variants = {
    primary: "bg-[#da500b] hover:bg-[#b54006] text-white shadow-lg shadow-[#da500b]/20",
    secondary: "bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-sm",
    outline: "border border-[#da500b] text-[#da500b] hover:bg-[#da500b]/10",
    ghost: "text-gray-400 hover:text-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;