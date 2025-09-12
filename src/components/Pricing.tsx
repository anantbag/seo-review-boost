import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹5,000",
      period: "/month",
      description: "Perfect for small businesses starting their review journey",
      features: [
        "Up to 500 reviews/month",
        "5 platform integrations",
        "Basic analytics dashboard",
        "Email support",
        "Review response templates",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹10,000",
      period: "/month",
      description: "Ideal for growing businesses with multiple locations",
      features: [
        "Up to 2,000 reviews/month",
        "15 platform integrations",
        "Advanced analytics & reporting",
        "Priority support + phone",
        "Custom response automation",
        "Team collaboration tools",
        "Reputation monitoring",
        "SEO optimization tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹15,000",
      period: "/month",
      description: "Complete solution for large enterprises and agencies",
      features: [
        "Unlimited reviews",
        "50+ platform integrations",
        "AI-powered sentiment analysis",
        "Dedicated account manager",
        "White-label solutions",
        "API access",
        "Custom integrations",
        "Advanced reporting suite",
        "Priority phone & chat support"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your
            <span className="block gradient-primary bg-clip-text text-transparent">
              Growth Plan
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Start with any plan and scale as you grow. All plans include a 14-day free trial 
            with full access to premium features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative gradient-card rounded-3xl p-8 transition-smooth hover-scale ${
                plan.popular 
                  ? 'ring-2 ring-purple-500 shadow-premium transform scale-105' 
                  : 'shadow-card hover-glow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-primary px-6 py-2 rounded-full flex items-center space-x-2">
                    <Star className="w-4 h-4 text-white fill-current" />
                    <span className="text-white font-semibold text-sm">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/70 mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/70 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-4 text-lg font-semibold transition-smooth ${
                  plan.popular 
                    ? 'gradient-primary text-white hover-glow shadow-premium' 
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                Start Free Trial
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;