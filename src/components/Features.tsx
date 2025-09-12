import { MessageSquare, BarChart3, Shield, Zap, Globe, HeadphonesIcon } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Smart Review Management",
      description: "Automatically collect, monitor, and respond to reviews across all platforms with AI-powered responses."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into customer sentiment, review trends, and performance metrics with real-time dashboards."
    },
    {
      icon: Shield,
      title: "Reputation Protection",
      description: "Proactive monitoring and rapid response system to protect your brand reputation 24/7."
    },
    {
      icon: Zap,
      title: "Instant Automation",
      description: "Set up automated review requests, responses, and follow-ups to maximize your review volume."
    },
    {
      icon: Globe,
      title: "Multi-Platform Sync",
      description: "Seamlessly integrate with Google, Facebook, Yelp, TripAdvisor, and 50+ review platforms."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Expert Support",
      description: "Dedicated account managers and round-the-clock technical support to ensure your success."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <span className="block gradient-primary bg-clip-text text-transparent">
              Dominate Reviews
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our comprehensive platform gives you all the tools and insights needed to 
            transform your online reputation into a competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="gradient-card rounded-2xl p-8 hover-scale hover-glow shadow-card transition-smooth border border-white/10"
            >
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;