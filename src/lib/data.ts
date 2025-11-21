
import { ShieldCheck, Trees, Landmark, Users } from "lucide-react";

export const heroImages: { src: string; alt: string; aiHint: string }[] = [
  { src: "/banner.png", alt: "Presenting Palghar's Most Iconic Project", aiHint: "modern building exterior" },
];

export const projects = [
  {
    id: 1,
    name: "Navkar Heights",
    location: "Palghar, Maharashtra",
    type: "Residential",
    status: "Ready-to-move",
    area: "1,200 - 1,800 sq.ft.",
    image: "https://i.postimg.cc/bNYhN3FY/Whats-App-Image-2025-08-25-at-4-55-07-PM-2.jpg",
    aiHint: "modern house",
    reraNo: "P99000012345",
    description: "Discover modern living at Navkar Heights, a ready-to-move residential project in Palghar. Offering thoughtfully designed 2 & 3 BHK apartments, it combines comfort with the convenience of being located near the railway station, making your daily commute effortless.",
    gallery: [
      { src: "https://i.postimg.cc/bNYhN3FY/Whats-App-Image-2025-08-25-at-4-55-07-PM-2.jpg", alt: "Exterior view of Navkar Heights", aiHint: "modern building exterior" },
      { src: "https://i.postimg.cc/8z8mm0QN/Whats-App-Image-2025-08-25-at-4-55-07-PM-1.jpg", alt: "Navkar Heights building front view", aiHint: "modern building" },
    ],
  },
  {
    id: 2,
    name: "Nova Exotica",
    location: "Palghar, Maharashtra",
    type: "Residential",
    status: "Ongoing",
    area: "1,500 - 2,500 sq.ft.",
    image: "https://i.postimg.cc/NjW3Bvgk/bldg-1-20x30.jpg",
    aiHint: "luxury apartment",
    reraNo: "P99000067890",
    description: "Experience exquisite living at Nova Exotica. A symbol of modern architecture and luxury, offering spacious apartments with world-class amenities for a truly exotic lifestyle.",
    gallery: [
        { src: "https://i.postimg.cc/HnYGR0pG/top-view-30x40.jpg", alt: "Top view of Nova Exotica", aiHint: "building top view" },
    ],
  },
  {
    id: 3,
    name: "Shreeram Sampaada",
    location: "Beside ICICI Bank, Mahim Road, Palghar",
    type: "Commercial",
    status: "New Launch",
    area: "Shops: 170-897 sq.ft | Offices: 258-545 sq.ft",
    image: "https://i.postimg.cc/d11VKbR6/shree-Ram-sampada-3-D-Img-page-0001.jpg",
    aiHint: "modern building",
    reraNo: "P99000054321",
    description: "Shreeram Sampaada is a landmark mixed-use development offering luxurious 2 BHK residences, commercial offices, and anchor shops. Located just 5 minutes from Palghar Railway Station, it is positioned as Palghar's most iconic project, blending luxury living with prime commercial opportunities.",
    gallery: [
        { src: "https://i.postimg.cc/d11VKbR6/shree-Ram-sampada-3-D-Img-page-0001.jpg", alt: "Shreeram Sampaada 3D view", aiHint: "building 3d model" },
    ],
  },
    {
    id: 4,
    name: "Shiv Aashish Industrial Estate",
    location: "Palghar, Maharashtra",
    type: "Industrial",
    status: "Ongoing",
    area: "Units from 500 sq.ft.",
    image: "https://i.postimg.cc/C1hpyb0V/Whats-App-Image-2025-08-26-at-5-25-29-PM.jpg",
    aiHint: "industrial estate",
    description: "Shiv Aashish Industrial Estate offers numerous industrial units (galas) under construction. It is an ideal location for businesses looking to expand their operations in a thriving industrial hub.",
    gallery: [
        { src: "https://i.postimg.cc/C1hpyb0V/Whats-App-Image-2025-08-26-at-5-25-29-PM.jpg", alt: "Shiv Aashish Industrial Estate", aiHint: "industrial building" },
    ],
  },
];

export const stats = [
  { label: "Years of Legacy", value: 10, suffix: "+" },
  { label: "Sq.ft Delivered", value: 1, suffix: "M+" },
  { label: "Happy Families", value: 1000, suffix: "+" },
  { label: "Ongoing Projects", value: 5, suffix: "+" },
];

export const features = [
  {
    icon: ShieldCheck,
    title: "RERA Compliant",
    desc: "Transparent processes, clear titles and on-time delivery.",
  },
  {
    icon: Trees,
    title: "Sustainable by Design",
    desc: "Energy-efficient elevations, rainwater harvesting & green roofs.",
  },
  {
    icon: Landmark,
    title: "Prime Locations",
    desc: "Well-connected addresses across Mumbai Metropolitan Region.",
  },
  {
    icon: Users,
    title: "Customer-First",
    desc: "Dedicated relationship managers from booking to handover.",
  },
];

export const testimonials = [
  {
    quote: "The quality of construction and the attention to detail in our home is outstanding. The team was supportive throughout the process. We are truly happy!",
    author: "Rohan & Priya Mehta",
    location: "Homeowners, Navkar Heights",
    avatar: "https://i.postimg.cc/wMSy31xT/indian-family-1.jpg",
  },
  {
    quote: "Navkar Group delivered on their promise of a premium living experience. The amenities are fantastic, and the location is perfect for our family. Highly recommended!",
    author: "Anjali Sharma",
    location: "Resident, Nova Exotica",
    avatar: "https://i.postimg.cc/VvKXf9fD/indian-family-2.jpg",
  },
  {
    quote: "From the initial inquiry to the final handover, the process was seamless. The customer service team is excellent and very responsive. A trustworthy builder.",
    author: "Sandeep Patel",
    location: "Investor",
    avatar: "https://i.postimg.cc/8cmJgJj3/indian-man-1.jpg",
  },
  {
    quote: "We were impressed by the modern design and the thoughtful layout of the apartment. It feels spacious and gets plenty of natural light. A great investment.",
    author: "The D'souza Family",
    location: "Homeowners, Navkar Heights",
    avatar: "https://i.postimg.cc/ryC8b1zB/indian-family-3.jpg",
  }
];

export const TABS = ["All", "Residential", "Commercial", "Industrial"] as const;
export type Tab = (typeof TABS)[number];

export const footerLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Careers", href: "/careers" },
];


export const careerOpenings = [
  {
    title: "Senior Civil Engineer",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    department: "Engineering",
    description: "We are looking for an experienced Senior Civil Engineer to join our team. The ideal candidate will have a a strong background in residential and commercial projects, with a proven track record of managing projects from conception to completion.",
    responsibilities: [
      "Oversee and manage all aspects of construction projects.",
      "Ensure compliance with safety regulations and building codes.",
      "Collaborate with architects, contractors, and other stakeholders.",
      "Prepare project budgets and timelines.",
    ],
  },
  {
    title: "Sales Manager",
    location: "Palghar, Maharashtra",
    type: "Full-time",
    department: "Sales",
    description: "We are seeking a motivated and results-driven Sales Manager to lead our sales team. The successful candidate will be responsible for developing and implementing sales strategies, managing customer relationships, and achieving sales targets.",
    responsibilities: [
      "Lead and mentor the sales team to achieve targets.",
      "Develop and maintain strong customer relationships.",
      "Identify new market opportunities and expand the customer base.",
      "Prepare sales reports and forecasts.",
    ],
  },
];
