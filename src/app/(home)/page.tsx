import {
  Search,
  Code,
  Layers,
  Zap,
  ArrowRight,
  Package,
  Sparkles,
  Shield,
  Clock,
  Users,
  Palette,
  Target,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const Index = () => {
  const features = [
    {
      icon: Rocket,
      title: "Lightning Fast Development",
      description:
        "Build production-ready applications in hours, not weeks, with our comprehensive toolkit",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Quality",
      description:
        "Battle-tested solutions used by thousands of developers in production environments",
    },
    {
      icon: Palette,
      title: "Fully Customizable",
      description:
        "Adapt every element to match your brand and design system requirements perfectly",
    },
    {
      icon: Clock,
      title: "Always Up-to-Date",
      description:
        "Regular updates with the latest React patterns, performance optimizations, and best practices",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Built by developers, for developers, with contributions from the global React community",
    },
    {
      icon: Target,
      title: "TypeScript First",
      description:
        "Complete type safety and excellent developer experience with full IntelliSense support",
    },
  ];

  const solutions = [
    {
      title: "Design Systems",
      description:
        "Create consistent, scalable design languages across your entire product suite",
      benefits: [
        "Brand consistency",
        "Faster iterations",
        "Reduced technical debt",
      ],
    },
    {
      title: "Rapid Prototyping",
      description:
        "Transform ideas into interactive prototypes within minutes using our extensive library",
      benefits: [
        "Quick validation",
        "Stakeholder buy-in",
        "Reduced development cycles",
      ],
    },
    {
      title: "Production Applications",
      description:
        "Ship robust, accessible, and performant applications with confidence",
      benefits: [
        "Accessibility compliant",
        "Performance optimized",
        "Cross-browser tested",
      ],
    },
    {
      title: "Developer Experience",
      description:
        "Enhance your team's productivity with tools that developers actually love using",
      benefits: [
        "Reduced boilerplate",
        "Better code quality",
        "Faster onboarding",
      ],
    },
  ];

  const categories = [
    {
      name: "User Interface",
      count: 150,
      icon: Layers,
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "Data Management",
      count: 85,
      icon: Code,
      color: "from-green-500 to-blue-600",
    },
    {
      name: "User Experience",
      count: 120,
      icon: Sparkles,
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "Performance",
      count: 75,
      icon: Zap,
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Accessibility",
      count: 95,
      icon: Shield,
      color: "from-teal-500 to-green-600",
    },
    {
      name: "Developer Tools",
      count: 110,
      icon: Package,
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const stats = [
    { value: "10+", label: "Ready-to-use Elements" },
    { value: "5+", label: "Active Developers" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Community Support" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative">
          <div className="w-full flex justify-center">
            <div className="mb-4 text-fd-accent-foreground bg-fd-accent w-fit px-3 py-1 rounded-lg">
              🚀 Everything to build with React
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Ship Better Apps
            <br />
            Ship Them Faster
          </h1>
          <p className="text-xl text-fd-accent-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The most comprehensive React development platform. From design
            systems to deployment tools, everything you need to build modern web
            applications that users love and developers enjoy maintaining.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {stat?.value}
                </div>
                <div className="text-sm text-fd-accent-foreground">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-md px-8 py-3 rounded-lg"
            >
              Start Building
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-fd-primary">
              Why Developers Choose OpenHooks
            </h2>
            <p className="text-fd-accent-foreground max-w-2xl mx-auto">
              More than just a library - it's a complete development philosophy
              focused on speed, quality, and developer happiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features?.map((feature, index) => {
              const IconComponent = feature?.icon;
              return (
                <div
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1 bg-fd-card rounded-lg backdrop-blur-sm"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-fd-primary mb-2 text-lg">
                      {feature?.title}
                    </h3>
                    <p className="text-fd-accent-foreground text-sm leading-relaxed">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-fd-primary">
            Comprehensive Toolkit
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories?.map((category) => {
              const IconComponent = category?.icon;
              return (
                <div
                  key={category?.name}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1 bg-fd-card backdrop-blur-sm rounded-lg"
                >
                  <div className="p-6 text-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${category?.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-fd-primary mb-1">
                      {category?.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {category?.count}+ solutions
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-fd-primary">
              Perfect for Every Use Case
            </h2>
            <p className="text-fd-accent-foreground max-w-2xl mx-auto">
              Whether you're a startup moving fast or an enterprise scaling
              globally, we have the tools you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions?.map((solution, index) => (
              <div
                key={index}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1 bg-fd-card p-3 rounded-lg items-start gap-4"
              >
                <div>
                  <div className="text-xl group-hover:text-purple-600 transition-colors">
                    {solution?.title}
                  </div>
                  <div className="leading-relaxed text-sm my-2">
                    {solution?.description}
                  </div>
                </div>
                <div>
                  <ul className="space-y-2 text-sm">
                    {solution?.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-fd-accent-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
