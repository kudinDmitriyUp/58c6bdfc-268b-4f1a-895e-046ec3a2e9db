"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogoBillboardSplitImage from '@/components/sections/hero/HeroLogoBillboardSplitImage';
import FeatureCardTwenty from '@/components/sections/feature/FeatureCardTwenty';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import MetricCardEight from '@/components/sections/metrics/MetricCardEight';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFourteen from '@/components/sections/testimonial/TestimonialCardFourteen';
import BlogCardFour from '@/components/sections/blog/BlogCardFour';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { Mail, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="largeSizeMediumTitles"
      background="animatedGrid"
      cardStyle="elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802830920-k0zcwz0n.jpg"
          logoAlt="Buildercult"
          brandName="BUILDERCULT"
          button={{
            text: "Start Building",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplitImage
          logoText="BUILDERCULT"
          description="Learn how to build apps with AI and grow them using short-form content. We teach indie hackers, creators, and solo founders how to turn ideas into real products that make money."
          buttons={[
            {
              text: "Start Building",
              href: "#pricing"
            },
            {
              text: "Explore the Curriculum",
              href: "#modules"
            }
          ]}
          layoutOrder="default"
          splitImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802832556-stbta07z.jpg"
          splitImageAlt="AI app building tools and workspace"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802831774-6bzpumsw.jpg"
          imageAlt="Creator building apps with AI"
          frameStyle="card"
        />
      </div>

      <div id="modules" data-section="modules">
        <FeatureCardTwenty
          images={[
            {
              id: 1,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802832556-stbta07z.jpg"
            },
            {
              id: 2,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802833329-jw9z5arz.jpg"
            },
            {
              id: 3,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802836477-jr2m5s49.jpg"
            },
            {
              id: 4,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802837471-p4ws2alg.jpg"
            }
          ]}
          title="What You'll Learn at Buildercult"
          description="We break down the entire journey from idea to paying users in four core modules that work together."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          tag="Core Curriculum"
        />
      </div>

      <div id="faceless-content" data-section="faceless-content">
        <ProductCardFive
          title="Faceless Content Growth Systems"
          description="This is how you grow without showing your face. We teach proven frameworks for content-first app distribution using AI."
          tag="The Secret Weapon"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "faceless-1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802834221-ovnb3ozt.jpg",
              imageAlt: "AI voiceover screen recording tutorial",
              button: {
                text: "Learn More",
                id: "btn-faceless-1"
              }
            },
            {
              id: "faceless-2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802834920-vaomt488.jpg",
              imageAlt: "Text overlay viral content hooks",
              button: {
                text: "Learn More",
                id: "btn-faceless-2"
              }
            },
            {
              id: "faceless-3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802835680-eeo20oh3.jpg",
              imageAlt: "Before after transformation reels",
              button: {
                text: "Learn More",
                id: "btn-faceless-3"
              }
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
        />
      </div>

      <div id="differentiation" data-section="differentiation">
        <SplitAboutMetric
          title="Why Buildercult Is Different"
          description={[
            "We are not a generic coding course or theory-only program. Buildercult is execution-focused, built by builders for builders. We focus on distribution and real-world results, not just building in a vacuum."
          ]}
          metrics={[
            {
              label: "Teaching practical execution",
              value: "100%"
            },
            {
              label: "Focus on organic growth",
              value: "No ads"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEight
          title="Built by Builders Who Actually Ship"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802837471-p4ws2alg.jpg"
          imageAlt="Buildercult community of makers"
          metrics={[
            {
              id: "1",
              value: "50+",
              title: "App ideas taught"
            },
            {
              id: "2",
              value: "1000+",
              title: "Builders in community"
            },
            {
              id: "3",
              value: "$100K+",
              title: "Revenue generated collectively"
            },
            {
              id: "4",
              value: "30-day",
              title: "Average time to MVP"
            }
          ]}
          metricVariant="card"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Used by the Best in the Industry"
          description="Buildercult members use the same tools and strategies as the fastest-growing startups."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802843248-42rze7j1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802844017-zy7zyn1h.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802844816-rjf00i77.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802845483-lan4c8qx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802846034-jd2i5ui4.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802846826-8cam91ol.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802847349-nss3xozk.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802847910-t94nqwi6.jpg"
          ]}
          showCard={true}
          speed={40}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFourteen
          title="What Builders Are Saying"
          description="Real stories from indie hackers and creators who shipped products and got paying users."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          containerStyle="default"
          testimonials={[
            {
              id: "1",
              name: "Alex Rivera",
              handle: "@alexrivera_dev",
              testimonial: "Buildercult taught me how to validate ideas in 48 hours and use TikTok to get my first 100 users. No marketing budget needed.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802838456-emafite2.jpg"
            },
            {
              id: "2",
              name: "Jordan Chen",
              handle: "@jordanbuilds",
              testimonial: "The faceless content framework alone is worth it. Got 10K views on my first reel and 50 signups without showing my face.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802839419-4pif1pc1.jpg"
            },
            {
              id: "3",
              name: "Sarah Mitchell",
              handle: "@sarahmakes_apps",
              testimonial: "I went from idea to profitable app in 8 weeks. The community and curriculum are genuinely different from other courses.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802840208-ac1jtfgq.jpg"
            },
            {
              id: "4",
              name: "Marcus Johnson",
              handle: "@marcustech",
              testimonial: "Best investment in my creator career. The AI tools section saved me months of learning curve.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802840786-p8tsqnjq.jpg"
            },
            {
              id: "5",
              name: "Emma Zhang",
              handle: "@emmabuildsstuff",
              testimonial: "The accountability and daily insights in the community kept me shipping. Got my first customer by week 3.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802841638-p2qxuwgj.jpg"
            },
            {
              id: "6",
              name: "David Brown",
              handle: "@davidindie",
              testimonial: "Finally, a course that treats distribution as seriously as building. This changed how I think about product launches.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802842482-jqnokmbn.jpg"
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardFour
          title="Latest Resources & Insights"
          description="Strategies, frameworks, and real-world tips from successful builders in the community."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              title: "How to Validate App Ideas in 48 Hours",
              description: "Use Reddit, Twitter, and Product Hunt to test ideas before building. Real framework used by Buildercult members.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802848872-0368nsdh.jpg"
            },
            {
              id: "2",
              title: "30-Day Content Plan for App Growth",
              description: "Exact hooks, angles, and posting schedule that generates organic users without paid ads.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802849673-39oozv56.jpg"
            },
            {
              id: "3",
              title: "Top AI Tools for No-Code App Building",
              description: "From UI generation to backend logic. The tools we teach and how to combine them for speed.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802851362-go9h0qy3.jpg"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about Buildercult, the curriculum, and the community."
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do I need to be a coder to join?",
              content: "No. Buildercult is specifically designed for non-technical founders. We teach you how to use AI tools like ChatGPT, Webflow, and no-code platforms to build apps without writing code."
            },
            {
              id: "2",
              title: "What makes faceless content different?",
              content: "Faceless content lets you grow without putting yourself in every video. We teach screen recordings, AI voiceovers, text overlays, and story-based hooks that convert viewers to users."
            },
            {
              id: "3",
              title: "How long is the curriculum?",
              content: "The core modules take 6-8 weeks to complete. But the community continues providing daily insights, new app ideas, and updated strategies forever."
            },
            {
              id: "4",
              title: "Will I get actual customers?",
              content: "That depends on you executing the framework. But our members on average get their first 50-100 users within 8 weeks of launching. The curriculum works if you apply it."
            },
            {
              id: "5",
              title: "Is there a money-back guarantee?",
              content: "We offer a 14-day satisfaction guarantee. If you don't see the value, we'll refund you. No questions asked."
            },
            {
              id: "6",
              title: "What's included in membership?",
              content: "Daily strategy insights, a searchable library of 50+ app ideas, the full curriculum, community access, live Q&A sessions, and exclusive resources on content, AI tools, and monetization."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Start Building?"
          description="Join founders, creators, and hackers who are learning to build apps with AI and grow them with short-form content. Start your journey in Buildercult today."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "What's your biggest challenge right now? (Building, growing, or finding ideas?)",
            rows: 4,
            required: false
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36r0PgQZzhj8jQqh48LKsIG58we/uploaded-1765802852338-43mu4gte.jpg"
          mediaPosition="right"
          buttonText="Join Buildercult"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="BUILDERCULT"
          title="Build. Grow. Make Money. Repeat."
          columns={[
            {
              title: "Learn",
              items: [
                {
                  label: "Curriculum",
                  href: "#modules"
                },
                {
                  label: "Resources",
                  href: "#blog"
                },
                {
                  label: "Community",
                  href: "#"
                }
              ]
            },
            {
              title: "Build",
              items: [
                {
                  label: "App Ideas",
                  href: "#"
                },
                {
                  label: "AI Tools",
                  href: "#"
                },
                {
                  label: "Templates",
                  href: "#"
                }
              ]
            },
            {
              title: "Grow",
              items: [
                {
                  label: "Content Strategies",
                  href: "#"
                },
                {
                  label: "Case Studies",
                  href: "#"
                },
                {
                  label: "Guides",
                  href: "#"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Terms",
                  href: "#"
                },
                {
                  label: "Privacy",
                  href: "#"
                },
                {
                  label: "Contact",
                  href: "#contact"
                }
              ]
            }
          ]}
          contactItems={[
            {
              icon: Mail,
              text: "hello@buildercult.com"
            },
            {
              icon: Twitter,
              text: "@buildercult"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}