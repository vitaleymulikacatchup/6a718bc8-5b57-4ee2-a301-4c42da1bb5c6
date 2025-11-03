"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { BarChart3, Building, DollarSign, HelpCircle, Quote, Rocket, Send, Shield, Sparkles, Star, Target, TrendingUp, Users, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="SaasFlow"
          button={{
            text: "Get Started",
            href: "https://app.saasflow.com/signup"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Scale Your Business with Intelligent SaaS Solutions"
          description="Streamline operations, boost productivity, and drive growth with our all-in-one platform designed for modern businesses."
          tag="Trusted by 10,000+ Companies"
          tagIcon={TrendingUp}
          buttons={[
            {
              text: "Start Free Trial",
              href: "https://app.saasflow.com/trial"
            },
            {
              text: "Watch Demo",
              href: "demo"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="SaasFlow dashboard interface showing analytics and workflows"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Built for Growth"
          description={[
            "We understand the challenges of scaling a business in today's competitive landscape. That's why we've built SaasFlow - a comprehensive platform that grows with you.",
            "From startups to enterprise, our solutions adapt to your needs, providing the tools and insights you need to make data-driven decisions and accelerate growth."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Everything You Need to Succeed"
          description="Powerful features designed to streamline your workflow and accelerate business growth"
          tag="Features"
          tagIcon={Sparkles}
          features={[
            {
              title: "Advanced Analytics",
              description: "Get deep insights into your business performance with real-time analytics, custom dashboards, and comprehensive reporting tools.",
              icon: BarChart3
            },
            {
              title: "Process Automation",
              description: "Automate repetitive tasks and workflows to save time and reduce errors while your team focuses on high-value activities.",
              icon: Zap
            },
            {
              title: "Team Collaboration",
              description: "Foster seamless collaboration with integrated communication tools, shared workspaces, and real-time project tracking.",
              icon: Users
            },
            {
              title: "Enterprise Security",
              description: "Protect your data with bank-level security, end-to-end encryption, and compliance with industry standards.",
              icon: Shield
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that rely on SaasFlow to power their operations"
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/3370333/pexels-photo-3370333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/5207507/pexels-photo-5207507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/34533333/pexels-photo-34533333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your business needs with no hidden fees"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              badge: "Perfect for Startups",
              badgeIcon: Rocket,
              price: "$29/month",
              subtitle: "Everything you need to get started",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "https://app.saasflow.com/trial"
                },
                {
                  text: "Learn More",
                  href: "pricing"
                }
              ],
              features: [
                "Up to 10 team members",
                "50GB storage",
                "Basic analytics",
                "Email support",
                "Core integrations"
              ]
            },
            {
              id: "business",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$79/month",
              subtitle: "Advanced features for growing teams",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "https://app.saasflow.com/trial"
                },
                {
                  text: "Contact Sales",
                  href: "contact"
                }
              ],
              features: [
                "Up to 50 team members",
                "500GB storage",
                "Advanced analytics",
                "Priority support",
                "All integrations",
                "Custom workflows"
              ]
            },
            {
              id: "enterprise",
              badge: "Custom Solutions",
              badgeIcon: Building,
              price: "Custom",
              subtitle: "Enterprise-grade security and support",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                },
                {
                  text: "Schedule Demo",
                  href: "demo"
                }
              ],
              features: [
                "Unlimited team members",
                "Unlimited storage",
                "Custom analytics",
                "24/7 dedicated support",
                "Custom integrations",
                "Advanced security",
                "Dedicated success manager"
              ]
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Proven Results"
          description="See the impact SaasFlow has made for businesses worldwide"
          tag="Impact"
          tagIcon={Target}
          metrics={[
            {
              id: "1",
              value: "10,000+",
              description: "Active Companies"
            },
            {
              id: "2",
              value: "99.9%",
              description: "Uptime Guarantee"
            },
            {
              id: "3",
              value: "5M+",
              description: "Tasks Automated Monthly"
            },
            {
              id: "4",
              value: "40%",
              description: "Average Productivity Increase"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Don't just take our word for it - hear from the teams who've transformed their business with SaasFlow"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechStartup Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Operations Director",
              company: "Growth Dynamics",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Product Manager",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7648239/pexels-photo-7648239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Founder",
              company: "ScaleUp Ventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "VP of Operations",
              company: "Enterprise Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7648239/pexels-photo-7648239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about SaasFlow and how it can help your business"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "How quickly can I get started with SaasFlow?",
              content: "You can get started immediately with our free trial. Setup takes less than 5 minutes, and our onboarding team will help you configure everything for your specific needs."
            },
            {
              id: "2",
              title: "Is my data secure with SaasFlow?",
              content: "Absolutely. We use bank-level security with end-to-end encryption, regular security audits, and compliance with SOC 2, GDPR, and other industry standards."
            },
            {
              id: "3",
              title: "Can I integrate SaasFlow with my existing tools?",
              content: "Yes! SaasFlow integrates with over 500 popular business tools including Slack, Salesforce, Google Workspace, Microsoft 365, and many more."
            },
            {
              id: "4",
              title: "What kind of support do you provide?",
              content: "We offer comprehensive support including 24/7 chat support, detailed documentation, video tutorials, and dedicated customer success managers for enterprise customers."
            },
            {
              id: "5",
              title: "Can I cancel my subscription anytime?",
              content: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your data will remain accessible during your billing period."
            },
            {
              id: "6",
              title: "Do you offer custom enterprise solutions?",
              content: "Yes, we offer fully customizable enterprise solutions including custom integrations, dedicated infrastructure, advanced security features, and dedicated support teams."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Send}
          title="Ready to Transform Your Business?"
          description="Join thousands of companies already using SaasFlow to streamline operations and accelerate growth. Start your free trial today."
          inputPlaceholder="Enter your work email"
          buttonText="Start Free Trial"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. No credit card required."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Features",
                  href: "feature"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Integrations",
                  href: "https://saasflow.com/integrations"
                },
                {
                  label: "API",
                  href: "https://docs.saasflow.com/api"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Blog",
                  href: "https://saasflow.com/blog"
                },
                {
                  label: "Careers",
                  href: "https://saasflow.com/careers"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Help Center",
                  href: "https://help.saasflow.com"
                },
                {
                  label: "Documentation",
                  href: "https://docs.saasflow.com"
                },
                {
                  label: "Status",
                  href: "https://status.saasflow.com"
                },
                {
                  label: "Community",
                  href: "https://community.saasflow.com"
                }
              ]
            }
          ]}
          copyrightText="© 2025 SaasFlow. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}