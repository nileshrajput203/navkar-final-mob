
import { ShieldCheck, Trees, Landmark, Users } from "lucide-react";
import type { StaticImageData } from "next/image";

export const heroImages: { src: string; alt: string; aiHint: string }[] = [
  { src: "https://i.postimg.cc/C1yFnRbZ/bldg-3-20x30.jpg", alt: "Modern building exterior", aiHint: "modern building" },
  { src: "https://i.postimg.cc/1tYbVTkv/SHREERAM-SAMPAADA-RESIDENTIAL-E-BROCHURE-page-0002.jpg", alt: "Shreeram Sampaada brochure", aiHint: "brochure" },
  { src: "https://i.postimg.cc/xCH16v9y/bldg-5-20x30.jpg", alt: "Side view of a modern building", aiHint: "modern building" },
  { src: "https://i.postimg.cc/9Xq56X50/Whats-App-Image-2025-08-26-at-5-25-31-PM.jpg", alt: "Shiv Aashish Industrial Estate building", aiHint: "industrial building" },
];

export const projects = [
  {
    id: 1,
    name: "Navkar Heights",
    location: "Palghar, Maharashtra",
    type: "Residential",
    status: "Ready-to-move",
    image: "https://i.postimg.cc/bNYhN3FY/Whats-App-Image-2025-08-25-at-4-55-07-PM-2.jpg",
    aiHint: "modern house",
    description: "Discover modern living at Navkar Heights, a ready-to-move residential project in Palghar. Offering thoughtfully designed 2 & 3 BHK apartments, it combines comfort with the convenience of being located near the railway station, making your daily commute effortless.",
    gallery: [
      { src: "https://i.postimg.cc/bNYhN3FY/Whats-App-Image-2025-08-25-at-4-55-07-PM-2.jpg", alt: "Exterior view of Navkar Heights", aiHint: "modern building exterior" },
      { src: "https://i.postimg.cc/8z8mm0QN/Whats-App-Image-2025-08-25-at-4-55-07-PM-1.jpg", alt: "Navkar Heights building front view", aiHint: "modern building" },
      { src: "https://i.postimg.cc/28yph3dn/PHOTO-2025-08-14-18-52-36.jpg", alt: "Side view of Navkar Heights", aiHint: "building side view" },
      { src: "https://i.postimg.cc/YS1TMFkB/PHOTO-2025-08-14-18-52-37.jpg", alt: "Interior of a modern apartment", aiHint: "modern apartment interior" },
      { src: "https://i.postimg.cc/MHq8BD6D/Whats-App-Image-2025-08-25-at-4-55-07-PM-5.jpg", alt: "Another view of Navkar Heights", aiHint: "building exterior" },
    ],
    highlights: ["2 & 3 BHK Apartments", "Near Railway Station"],
  },
  {
    id: 2,
    name: "Nova Exotica",
    location: "Palghar, Maharashtra",
    type: "Residential",
    status: "Ongoing",
    image: "https://i.postimg.cc/NjW3Bvgk/bldg-1-20x30.jpg",
    aiHint: "luxury apartment",
    description: "Experience exquisite living at Nova Exotica. A symbol of modern architecture and luxury, offering spacious apartments with world-class amenities for a truly exotic lifestyle.",
    gallery: [
      { src: "https://i.postimg.cc/HnYGR0pG/top-view-30x40.jpg", alt: "Top view of Nova Exotica", aiHint: "building top view" },
      { src: "https://i.postimg.cc/Rh5NmPgD/gate-view-20x30.jpg", alt: "Gate view of Nova Exotica", aiHint: "gate view" },
      { src: "https://i.postimg.cc/xCH16v9y/bldg-5-20x30.jpg", alt: "Building 5 view", aiHint: "building view" },
      { src: "https://i.postimg.cc/C5SSJ9PS/angel-20x30.jpg", alt: "Angel statue at Nova Exotica", aiHint: "statue" },
    ],
    highlights: ["Spacious Apartments", "Modern Architecture", "World-class Amenities", "Prime Location", "Landscaped Gardens"],
  },
  {
    id: 3,
    name: "Shreeram Sampaada",
    location: "Palghar, Maharashtra",
    type: "Residential & Commercial",
    status: "New Launch",
    image: "https://i.postimg.cc/d11VKbR6/shree-Ram-sampada-3-D-Img-page-0001.jpg",
    aiHint: "modern building",
    description: "Presenting Shreeram Sampaada, a perfect blend of residential and commercial spaces. This mixed-use development offers a vibrant lifestyle with everything you need, right at your doorstep.",
    gallery: [
      { src: "https://i.postimg.cc/d11VKbR6/shree-Ram-sampada-3-D-Img-page-0001.jpg", alt: "Shreeram Sampaada 3D view", aiHint: "building 3d model" },
      { src: "https://i.postimg.cc/SQ1Dqc4f/shree-Ram-sampada-3-D-Img-page-0002.jpg", alt: "Shreeram Sampaada 3D Img page 2", aiHint: "building 3d model" },
      { src: "https://i.postimg.cc/Jn45CzdF/shree-Ram-sampada-3-D-Img-page-0003.jpg", alt: "Shreeram Sampaada 3D Img page 3", aiHint: "building 3d model" },
      { src: "https://i.postimg.cc/SRH697N0/shree-Ram-sampada-3-D-Img-page-0004.jpg", alt: "Shreeram Sampaada 3D Img page 4", aiHint: "building 3d model" },
      { src: "https://i.postimg.cc/VkQ9LRVn/shree-Ram-sampada-3-D-Img-page-0005.jpg", alt: "Shreeram Sampaada 3D Img page 5", aiHint: "building 3d model" },
      { src: "https://i.postimg.cc/Z0kNnbV4/shree-Ram-sampada-3-D-Img-page-0006.jpg", alt: "Shreeram Sampaada 3D Img page 6", aiHint: "building 3d model" },
    ],
    highlights: ["Residential & Commercial", "Integrated Lifestyle", "Modern Amenities", "Strategic Location", "Ample Parking"],
  },
  {
    id: 4,
    name: "Shiv Aashish Industrial Estate",
    location: "Palghar, Maharashtra",
    type: "Industrial",
    status: "Ongoing",
    image: "https://i.postimg.cc/C1hpyb0V/Whats-App-Image-2025-08-26-at-5-25-29-PM.jpg",
    aiHint: "industrial estate",
    description: "Shiv Aashish Industrial Estate offers numerous industrial units (galas) under construction. It is an ideal location for businesses looking to expand their operations in a thriving industrial hub.",
    gallery: [
      { src: "https://i.postimg.cc/C1hpyb0V/Whats-App-Image-2025-08-26-at-5-25-29-PM.jpg", alt: "Shiv Aashish Industrial Estate", aiHint: "industrial building" },
      { src: "https://i.postimg.cc/633bLcwT/Whats-App-Image-2025-08-26-at-5-25-30-PM.jpg", alt: "Shiv Aashish Industrial Estate", aiHint: "industrial building" },
      { src: "https://i.postimg.cc/9Xq56X50/Whats-App-Image-2025-08-26-at-5-25-31-PM.jpg", alt: "Shiv Aashish Industrial Estate", aiHint: "industrial building" },
      { src: "https://i.postimg.cc/xjPyTMS4/Whats-App-Image-2025-08-26-at-5-25-32-PM.jpg", alt: "Shiv Aashish Industrial Estate", aiHint: "industrial building" },
      { src: "https://i.postimg.cc/ZRwRXT1V/Whats-App-Image-2025-08-26-at-5-25-33-PM.jpg", alt: "Shiv Aashish Industrial Estate", aiHint: "industrial building" },
      { src: "https://i.postimg.cc/jjrrXGk2/Whats-App-Image-2025-08-26-at-5-25-34-PM.jpg", alt: "Shiv Aashish Industrial Estate", aiHint: "industrial building" },
    ],
    highlights: ["Multiple Industrial Galas", "Strategic Location"],
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
    rating: 5,
  },
  {
    quote: "Navkar Group delivered on their promise of a premium living experience. The amenities are fantastic, and the location is perfect for our family. Highly recommended!",
    author: "Anjali Sharma",
    location: "Resident, Nova Exotica",
    rating: 4,
  },
  {
    quote: "From the initial inquiry to the final handover, the process was seamless. The customer service team is excellent and very responsive. A trustworthy builder.",
    author: "Sandeep Patel",
    location: "Investor",
    rating: 4,
  },
  {
    quote: "We were impressed by the modern design and the thoughtful layout of the apartment. It feels spacious and gets plenty of natural light. A great investment.",
    author: "The D'souza Family",
    location: "Homeowners, Navkar Heights",
    rating: 5,
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
    description: "We are looking for an experienced Senior Civil Engineer to join our team. The ideal candidate will have a strong background in residential and commercial projects, with a proven track record of managing projects from conception to completion.",
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
