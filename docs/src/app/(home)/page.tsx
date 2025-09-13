/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  Code,
  Layers,
  Zap,
  Package,
  Sparkles,
  Shield,
  Users,
  Target,
  Rocket,
  ArrowRight,
  Star,
  Download,
  Github,
  BookOpen,
  Play,
  Copy,
  CheckCircle,
  Palette,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

const Index = () => {
  const [highlightedCode, setHighlightedCode] = useState("");

  const codeExample = `// Copy any hook directly into your project
import { useLocalStorage } from './hooks/useLocalStorage';

function UserPreferences() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [language, setLanguage] = useLocalStorage('lang', 'en');
  
  return (
    <div className={\`app \${theme}\`}>
      <button onClick={() => setTheme(
        theme === 'light' ? 'dark' : 'light'
      )}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
      
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}`;

  useEffect(() => {
    const highlightCode = async () => {
      try {
        const html = await codeToHtml(codeExample, {
          lang: "tsx",
          theme: "dark-plus",
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlightedCode(`<pre><code>${codeExample}</code></pre>`);
      }
    };

    highlightCode();
  }, [codeExample]);
  const features = [
    {
      icon: Rocket,
      title: "Production Ready",
      description:
        "Battle-tested React hooks used by thousands of developers worldwide",
      highlight: "TypeScript Support",
    },
    {
      icon: Zap,
      title: "Zero Dependencies",
      description:
        "Lightweight hooks with no external dependencies - just React 16.8+",
      highlight: "< 1KB Bundle",
    },
    {
      icon: Shield,
      title: "Fully Tested",
      description:
        "Comprehensive test coverage ensuring reliability in production",
      highlight: "100% Coverage",
    },
    {
      icon: Palette,
      title: "Copy & Paste",
      description:
        "Simple installation - copy the hook you need directly into your project",
      highlight: "No Package Lock",
    },
    {
      icon: Target,
      title: "Modern Patterns",
      description:
        "Built with latest React patterns and best practices in mind",
      highlight: "React 18 Ready",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Open source project with active community contributions and support",
      highlight: "MIT License",
    },
  ];

  const hookCategories = [
    {
      name: "State Management",
      description: "Manage component and application state effectively",
      count: 2,
      icon: Layers,
      hooks: ["useLocalStorage", "usePrevious"],
      color: "primary",
    },
    {
      name: "Event Handling",
      description: "Handle user interactions and browser events",
      count: 2,
      icon: Code,
      hooks: ["useClickOutside", "useClipboard"],
      color: "secondary",
    },
    {
      name: "Device & Browser",
      description: "Detect device capabilities and browser features",
      count: 2,
      icon: Sparkles,
      hooks: ["useMobile", "useLocation"],
      color: "accent",
    },
    {
      name: "Performance",
      description: "Optimize performance with debouncing and throttling",
      count: 2,
      icon: Zap,
      hooks: ["useDebounce", "useTimeout"],
      color: "destructive",
    },
  ];

  const testimonials = [
    {
      quote:
        "Instead of reinventing the wheel, I just copy these hooks. They're well-documented and TypeScript-ready.",
      author: "Alex Chen",
      role: "Frontend Developer",
      company: "TechStartup",
    },
    {
      quote:
        "Perfect for prototyping. No npm install, no package conflicts - just grab what you need and go.",
      author: "Maria Rodriguez",
      role: "Full Stack Engineer",
      company: "DevAgency",
    },
    {
      quote:
        "Clean, simple, and effective. These hooks solve common React patterns without the bloat.",
      author: "Sam Johnson",
      role: "React Developer",
      company: "WebStudio",
    },
  ];

  const stats = [
    { value: "8", label: "React Hooks", icon: Package },
    { value: "100%", label: "TypeScript", icon: Code },
    { value: "0", label: "Dependencies", icon: Zap },
    { value: "MIT", label: "License", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          {/* Announcement Badge */}
          <div className="inline-flex items-center mb-6 sm:mb-8">
            <Badge variant="secondary" className="text-xs sm:text-sm">
              🔥 8 Essential Hooks Ready to Use
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
            8 Essential React Hooks
            <br />
            <span className="text-primary">Copy, Paste, Ship</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            A curated collection of 8 production-ready React hooks. No
            installation required - just copy the hook you need directly into
            your project.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/docs" className="inline-flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Browse Hooks
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link
                href="https://github.com/rajeshkumar02/openhooks"
                className="inline-flex items-center"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-12 sm:py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Ready-to-Use React Hooks
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Copy any hook directly into your project. No installation, no
              dependencies, just pure React.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground">
                  UserPreferences.tsx
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <div className="overflow-x-auto">
                {highlightedCode ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    className="[&>pre]:p-4 [&>pre]:sm:p-6 [&>pre]:m-0 [&>pre]:bg-transparent [&>pre]:text-sm [&>pre]:overflow-x-auto [&_code]:font-mono"
                  />
                ) : (
                  <div className="p-4 sm:p-6 text-sm overflow-x-auto bg-slate-950 text-slate-100">
                    <pre className="font-mono leading-relaxed">
                      <code>{codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Why Choose OpenHooks?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Built by developers, for developers. Every hook is crafted with
              performance, reliability, and developer experience in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-4 sm:p-6 bg-card border rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-2">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight">
                          {feature.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs w-fit">
                          {feature.highlight}
                        </Badge>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hook Categories Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Organized by Purpose
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect hook for your use case. Each category contains
              carefully curated hooks for specific scenarios.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {hookCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="group bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {category.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {category.count} hooks
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {category.hooks.map((hook, hookIndex) => (
                      <Badge
                        key={hookIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {hook}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/docs">
                Explore All Categories
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Loved by Developers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of developers who've accelerated their React
              development with OpenHooks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-primary fill-primary"
                    />
                  ))}
                </div>
                <blockquote className="text-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 sm:mb-10">
              Start using OpenHooks today and experience the difference. No
              installation required - just copy and go.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/docs" className="inline-flex items-center">
                  <Play className="w-4 h-4 mr-2" />
                  Get Started Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/docs/installation">
                  <Download className="w-4 h-4 mr-2" />
                  Installation Guide
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                  MIT License
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                  TypeScript Support
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                  Zero Dependencies
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
