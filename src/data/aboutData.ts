import { Founder, Advisor, JobOpening } from "@/types";

// Mock data for founders
export const foundersData: Founder[] = [
  {
    id: "founder-1",
    name: "Prayush Shah",
    title: "Co-Founder & Chief Technology Officer",
    education: "CEPT University",
    description: "A CEPT alum with a tech-savvy, entrepreneurial spirit, Prayush drives Crestox's product vision. From crafting seamless user journeys to building robust digital tools, he's the brains behind our platform's innovation. With a deep passion for Indian art and its future, Prayush ensures every feature empowers artists and collectors alike.",
    contact: "9978902743",
    expertise: ["Product Vision", "Digital Innovation", "User Experience", "Platform Architecture", "Indian Art"],
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: "founder-2",
    name: "Udit Shah",
    title: "Co-Founder & Chief Executive Officer",
    education: "CEPT University",
    description: "A CEPT graduate, Udit brings a strong business pedigree rooted in his family's ventures. He excels at forging partnerships, growing networks, and overseeing logistics. Udit's knack for Indian art and culture fuels Crestox's community building—connecting creators, collectors, and collaborators across the country.",
    contact: "9879608470",
    expertise: ["Business Development", "Strategic Partnerships", "Community Building", "Operations", "Art Curation"],
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  }
];

// Mock data for advisors
export const advisorsData: Advisor[] = [
  {
    id: "advisor-1",
    name: "Dr. Priya Mehta",
    title: "Art Market Specialist",
    company: "Mumbai Art Foundation",
    expertise: ["Art Valuation", "Market Analysis", "Contemporary Art"],
    bio: "Dr. Mehta brings over 15 years of experience in art market analysis and valuation. She has worked with leading galleries and auction houses, specializing in contemporary Indian art and emerging digital art markets.",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: "advisor-2",
    name: "Rajesh Kumar",
    title: "Blockchain Technology Advisor",
    company: "TechVentures India",
    expertise: ["Blockchain", "Cryptocurrency", "Smart Contracts", "DeFi"],
    bio: "Rajesh is a blockchain technology expert with extensive experience in developing secure, scalable platforms. He has advised multiple fintech startups and brings deep knowledge of tokenization and digital asset management.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: "advisor-3",
    name: "Sarah Chen",
    title: "Investment Strategy Advisor",
    company: "Global Art Investments",
    expertise: ["Investment Strategy", "Portfolio Management", "Risk Assessment"],
    bio: "Sarah specializes in alternative investment strategies with a focus on art and collectibles. She has managed portfolios worth over $500M and brings valuable insights into fractional ownership models.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: "advisor-4",
    name: "Arjun Patel",
    title: "Legal & Compliance Advisor",
    company: "Patel & Associates",
    expertise: ["Securities Law", "Regulatory Compliance", "Digital Assets"],
    bio: "Arjun is a leading expert in securities law and regulatory compliance for digital asset platforms. He has helped numerous startups navigate complex regulatory landscapes and ensure legal compliance.",
    imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face"
  }
];

// Mock data for job openings
export const jobOpeningsData: JobOpening[] = [
  {
    id: "job-1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Mumbai, India / Remote",
    type: "full-time",
    description: "We're looking for a passionate frontend developer to help build the future of art investment. You'll work on cutting-edge features that connect artists with investors worldwide.",
    requirements: [
      "5+ years of React/TypeScript experience",
      "Experience with modern frontend frameworks",
      "Knowledge of responsive design and accessibility",
      "Familiarity with blockchain/Web3 technologies (preferred)",
      "Strong problem-solving skills"
    ],
    posted: new Date("2024-01-15")
  },
  {
    id: "job-2",
    title: "Art Curator & Community Manager",
    department: "Operations",
    location: "Mumbai, India",
    type: "full-time",
    description: "Join our team to help discover and showcase emerging artists. You'll be responsible for building relationships with artists and managing our growing community.",
    requirements: [
      "Background in art history or fine arts",
      "3+ years of experience in art curation",
      "Strong communication and networking skills",
      "Understanding of digital art and NFTs",
      "Passion for supporting emerging artists"
    ],
    posted: new Date("2024-01-10")
  },
  {
    id: "job-3",
    title: "Blockchain Developer",
    department: "Engineering",
    location: "Remote",
    type: "full-time",
    description: "Help us build secure, scalable blockchain solutions for art tokenization. You'll work on smart contracts and integration with various blockchain networks.",
    requirements: [
      "3+ years of blockchain development experience",
      "Proficiency in Solidity and smart contract development",
      "Experience with Ethereum, Polygon, or similar networks",
      "Understanding of DeFi protocols and tokenization",
      "Strong security mindset"
    ],
    posted: new Date("2024-01-08")
  }
];

// Company culture and benefits data
export const companyCulture = {
  mission: "To democratize art investment and empower artists through innovative technology",
  values: [
    "Innovation in everything we do",
    "Transparency and trust",
    "Supporting artistic creativity",
    "Building inclusive communities",
    "Continuous learning and growth"
  ],
  benefits: [
    "Competitive salary and equity package",
    "Flexible working hours and remote options",
    "Health insurance and wellness programs",
    "Professional development budget",
    "Art collection and gallery visits",
    "Team retreats and cultural events"
  ]
};

// Legal and tax information
export const legalInfo = {
  gstNumber: "24ATTPS1287M1ZT",
  companyName: "Crestox Technologies Private Limited",
  registeredAddress: "Mumbai, Maharashtra, India",
  incorporationDate: "2023",
  companyType: "Private Limited Company",
  regulatoryCompliance: [
    "Registered under the Companies Act, 2013",
    "GST registered entity",
    "Compliant with IT Act, 2000",
    "Following RBI guidelines for digital payments",
    "Adhering to SEBI regulations for investment platforms"
  ],
  policies: [
    { name: "Terms of Service", url: "/terms" },
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Cookie Policy", url: "/cookies" },
    { name: "Refund Policy", url: "/refunds" },
    { name: "Investment Disclaimer", url: "/disclaimer" }
  ]
};