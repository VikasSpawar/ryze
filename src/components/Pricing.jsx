import SectionHeader from "./SectionHeader";
import PricingCard from "./PricingCard";


const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] mask-gradient pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader title="Simple, Transparent Pricing" subtitle="No hidden fees. Cancel anytime." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          <PricingCard 
            tier="Starter" 
            price="49" 
            features={["$10k/mo Ad Spend Limit", "Google & Meta Integration", "Basic Analytics", "Daily Email Reports"]} 
          />
          <PricingCard 
            tier="Growth" 
            price="149" 
            recommended 
            features={["$50k/mo Ad Spend Limit", "All Integrations", "AI Creative Analysis", "Real-time Slack Alerts"]} 
          />
          <PricingCard 
            tier="Scale" 
            price="399" 
            features={["Unlimited Ad Spend", "Priority Support", "Custom API Access", "Dedicated Account Manager"]} 
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;