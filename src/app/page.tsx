"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { BarChart3, Building, DollarSign, Link, Mail, MessageSquare, Rocket, Shield, Sparkles, Star, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="SaasFlow"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Build Better SaaS Products Faster"
          description="Transform your workflow with our all-in-one platform. Streamline operations, boost productivity, and scale your business effortlessly."
          tag="New Platform"
          tagIcon={Sparkles}
          buttons={[
            { text: "Start Free Trial", href: "https://app.saasflow.com/signup" },
            { text: "View Demo", href: "features" }
          ]}
          imageSrc="https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="right"
          imageAlt="SaasFlow dashboard interface"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We empower businesses to achieve more with intelligent automation and seamless integrations that scale with your growth"
          buttons={[
            { text: "Learn More", href: "features" },
            { text: "Get Started", href: "https://app.saasflow.com/signup" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Everything You Need to Scale"
          description="Powerful features designed to streamline your workflow and accelerate growth"
          tag="Features"
          tagIcon={Zap}
          features={[
            {
              title: "Advanced Analytics",
              description: "Get deep insights into your business performance with real-time dashboards and comprehensive reporting tools",
              icon: BarChart3,
              button: { text: "Learn More", href: "analytics" }
            },
            {
              title: "Workflow Automation",
              description: "Automate repetitive tasks and streamline processes to save time and reduce errors across your organization",
              icon: Zap,
              button: { text: "Explore", href: "automation" }
            },
            {
              title: "Seamless Integrations",
              description: "Connect with over 100+ popular tools and services through our robust API and pre-built integrations",
              icon: Link,
              button: { text: "View Integrations", href: "integrations" }
            },
            {
              title: "Enterprise Security",
              description: "Bank-level security with end-to-end encryption, SSO, and compliance with industry standards",
              icon: Shield,
              button: { text: "Security Details", href: "security" }
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your Plan"
          description="Flexible pricing options that scale with your business needs"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              badge: "Starter",
              badgeIcon: Rocket,
              price: "$29/month",
              subtitle: "Perfect for small teams getting started",
              buttons: [
                { text: "Start Free Trial", href: "https://app.saasflow.com/signup?plan=starter" },
                { text: "Contact Sales", href: "contact" }
              ],
              features: [
                "Up to 10 team members",
                "Basic analytics dashboard",
                "5 workflow automations",
                "Email support",
                "50GB storage"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$79/month",
              subtitle: "Best for growing businesses",
              buttons: [
                { text: "Start Free Trial", href: "https://app.saasflow.com/signup?plan=pro" },
                { text: "Contact Sales", href: "contact" }
              ],
              features: [
                "Up to 50 team members",
                "Advanced analytics & reporting",
                "Unlimited automations",
                "Priority support",
                "500GB storage",
                "API access"
              ]
            },
            {
              id: "enterprise",
              badge: "Enterprise",
              badgeIcon: Building,
              price: "$199/month",
              subtitle: "For large organizations with advanced needs",
              buttons: [
                { text: "Contact Sales", href: "contact" },
                { text: "Custom Demo", href: "https://calendly.com/saasflow/demo" }
              ],
              features: [
                "Unlimited team members",
                "Custom reporting & dashboards",
                "Enterprise automations",
                "24/7 dedicated support",
                "Unlimited storage",
                "SSO & advanced security"
              ]
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that rely on SaasFlow to power their operations"
          logos={[
            "https://images.pexels.com/photos/27906668/pexels-photo-27906668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/258174/pexels-photo-258174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/32146479/pexels-photo-32146479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4113684/pexels-photo-4113684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/3370333/pexels-photo-3370333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={30}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from businesses transforming their operations with SaasFlow"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "VP of Operations",
              company: "TechCorp Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CEO",
              company: "InnovateHub",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7567213/pexels-photo-7567213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Product Manager",
              company: "GrowthLabs",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8871904/pexels-photo-8871904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Kim",
              role: "CTO",
              company: "ScaleWorks",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Director",
              company: "FutureVision Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4491478/pexels-photo-4491478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about SaasFlow and our platform"
          textPosition="left"
          buttons={[
            { text: "Contact Support", href: "https://support.saasflow.com" }
          ]}
          faqs={[
            {
              id: "1",
              title: "How does the free trial work?",
              content: "Our 14-day free trial gives you full access to all features. No credit card required. You can upgrade, downgrade, or cancel anytime during or after the trial period."
            },
            {
              id: "2",
              title: "Can I integrate SaasFlow with my existing tools?",
              content: "Yes! SaasFlow integrates with over 100+ popular tools including Slack, Google Workspace, Microsoft Office, Salesforce, HubSpot, and many more through our API and pre-built connectors."
            },
            {
              id: "3",
              title: "Is my data secure with SaasFlow?",
              content: "Absolutely. We use bank-level encryption, SOC 2 compliance, and follow industry best practices. Your data is encrypted in transit and at rest, with regular security audits and backups."
            },
            {
              id: "4",
              title: "Can I change my plan later?",
              content: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences on your next invoice."
            },
            {
              id: "5",
              title: "What kind of support do you provide?",
              content: "We offer email support for all plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers. We also have comprehensive documentation and tutorials."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Transform Your Business?"
          description="Join thousands of companies already using SaasFlow to streamline operations and accelerate growth. Start your free trial today."
          inputPlaceholder="Enter your work email"
          buttonText="Start Free Trial"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. Cancel anytime."
          imageSrc="https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional team collaborating"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="SaasFlow"
          columns={[
            {
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Integrations", href: "integrations" },
                { label: "API", href: "https://docs.saasflow.com/api" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "https://careers.saasflow.com" },
                { label: "Blog", href: "https://blog.saasflow.com" },
                { label: "Press", href: "press" }
              ]
            },
            {
              items: [
                { label: "Help Center", href: "https://help.saasflow.com" },
                { label: "Contact", href: "contact" },
                { label: "Status", href: "https://status.saasflow.com" },
                { label: "Community", href: "https://community.saasflow.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}