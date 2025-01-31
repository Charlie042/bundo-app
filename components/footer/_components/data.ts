import { facebook,instagram,linkedin,twitter } from "@/public/svgs";

export const footerData: FooterSection[] = [
  {
    title: "Company",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Careers", url: "/careers" },
      { name: "Community", url: "/community" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Lagos, Nigeria", url: "#" },
      { name: "hello@bundo.app", url: "mailto:hello@bundo.app" },
      { name: "info@bundo.app", url: "mailto:info@bundo.app" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs", url: "/faqs" },
      { name: "support@bundo.app", url: "mailto:support@bundo.app" },
      { name: "help@bundo.app", url: "mailto:help@bundo.app" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms of use", url: "/terms-of-use" },
      { name: "Vendor Agreement", url: "/vendor-agreement" },
    ],
  },
];


export const socialLinks: SocialLink[] = [
  { name: "Instagram", url: "https://instagram.com", icon: "/svgs/instagram.svg" },
  { name: "Twitter", url: "https://twitter.com", icon: "/svgs/twitter.svg" },
  { name: "Facebook", url: "https://facebook.com", icon: "/svgs/facebook.svg" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "/svgs/linkedin.svg" },
];
