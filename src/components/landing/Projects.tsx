
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { projects, TABS, type Tab } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Info, Download, MapPin, Building, Ruler, ArrowRight, Check } from "lucide-react";
import {
  FaSwimmingPool, 
  FaDumbbell, 
  FaParking, 
  FaShieldAlt,
  FaTree,
  FaChild,
  FaBolt,
  FaTint,
  FaStore,
  FaHospital,
  FaHome,
  FaBasketballBall,
  FaWifi,
  FaCamera
} from 'react-icons/fa';
import { GiElevator } from 'react-icons/gi';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


const amenityIcons: { [key: string]: React.ReactElement } = {
  'Swimming Pool': <FaSwimmingPool />,
  'Gym': <FaDumbbell />,
  'Fitness Center': <FaDumbbell />,
  'Parking': <FaParking />,
  'Security': <FaShieldAlt />,
  '24/7 Security': <FaShieldAlt />,
  'Garden': <FaTree />,
  'Landscape': <FaTree />,
  'Play Area': <FaChild />,
  "Children's Play Area": <FaChild />,
  'Power Backup': <FaBolt />,
  'Water Supply': <FaTint />,
  'Lift': <GiElevator />,
  'Elevator': <GiElevator />,
  'Shopping Complex': <FaStore />,
  'Medical Facilities': <FaHospital />,
  'Club House': <FaHome />,
  'Sports Facilities': <FaBasketballBall />,
  'Green Spaces': <FaTree />,
  'Wi-Fi': <FaWifi />,
  'CCTV': <FaCamera />
};


// Function to determine badge variant based on status
const getBadgeVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case "sold out":
      return "light";
    case "ongoing":
      return "secondary";
    case "new launch":
      return "default";
    default:
      return "outline";
  }
};

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link href={`/projects/${project.id}`} className="block group">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>
             <div className="absolute top-4 right-4">
                <Badge variant={getBadgeVariant(project.status)} className="text-xs font-bold tracking-wider uppercase">
                    {project.status}
                </Badge>
            </div>
             <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
                    {project.name}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-white/90">
                    <MapPin className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">{project.location}</span>
                </p>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow bg-gray-50">
              <div className="flex justify-between items-start flex-wrap gap-y-2">
                <p className="text-sm text-gray-500 font-medium">{project.type}</p>
                {project.reraNo && project.reraNo !== "Not Mentioned" && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-green-100 text-green-800">
                        RERA Verified
                    </span>
                )}
            </div>

            {project.amenities && project.amenities.length > 0 && (
              <div className="flex flex-wrap gap-2 my-4">
                {project.amenities.slice(0, 4).map((amenity, index) => (
                  <span key={index} className="inline-flex items-center gap-1.5 whitespace-nowrap bg-gray-100 px-2.5 py-1 rounded-full">
                    <span className="flex items-center text-sm text-gray-600">
                      {amenityIcons[amenity] || <FaHome />}
                    </span>
                    <span className="text-[11px] font-medium text-gray-600">{amenity}</span>
                  </span>
                ))}
              </div>
            )}

            <div className="mt-auto pt-2 flex justify-end">
              <Button className="bg-primary text-white rounded-full px-6 py-3 font-semibold group-hover:bg-primary/90 transition-colors duration-300 shadow-md">
                Explore Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ProjectListItem({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={itemRef}
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden"
    >
      <div
        className={cn(
          "flex flex-col lg:flex-row items-stretch",
          index % 2 !== 0 && "lg:flex-row-reverse"
        )}
      >
        <div className="w-full lg:w-5/12 relative aspect-[4/3] overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-t-none">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 right-4">
            <Badge variant={getBadgeVariant(project.status)} className="text-xs font-bold tracking-wider uppercase shadow-md">
                {project.status}
            </Badge>
          </div>
          <div className="absolute top-4 left-4 flex flex-col gap-3 project-actions">
            <Link href={`/projects/${project.id}`}>
              <Button size="icon" className="bg-black/50 text-white rounded-full hover:bg-black/80 transition-all">
                  <Info className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-7/12 p-8 lg:p-10 flex flex-col">
          <div className="flex items-start gap-4">
              <span className="text-5xl font-extrabold text-primary/20 leading-none">{(index + 1).toString().padStart(2, "0")}</span>
              <div className="flex-1">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{project.name}</h4>
                 {project.reraNo && project.reraNo !== "Not Mentioned" && (
                    <span className="text-xs font-bold tracking-wider uppercase text-green-700">
                        RERA Verified
                    </span>
                )}
              </div>
          </div>
          
          <div className="mt-6 space-y-4 text-gray-600">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Ruler className="h-5 w-5 text-primary flex-shrink-0" />
              <span>{project.area}</span>
            </div>
            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-primary flex-shrink-0" />
              <span>{project.type}</span>
            </div>
          </div>

          {project.amenities && project.amenities.length > 0 && (
             <div className="mt-6 pt-6 border-t border-gray-200">
                <h5 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-3">Key Amenities</h5>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {project.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-600">
                            {React.cloneElement(amenityIcons[amenity] || <FaHome />, { className: "h-4 w-4 text-green-500 flex-shrink-0" })}
                            <span className="text-sm">{amenity}</span>
                        </div>
                    ))}
                </div>
            </div>
          )}

          <div className="mt-auto pt-8 flex justify-end">
            <Link href={`/projects/${project.id}`} className="group">
                <Button className="bg-primary text-white rounded-full px-6 py-3 font-semibold group-hover:bg-primary/90 transition-colors duration-300 shadow-lg">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Projects() {
  const [filter, setFilter] = useState<Tab>("All");

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    return p.type.includes(filter);
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="featured-projects py-20 bg-gray-50/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-20 gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight text-center">Featured Projects</h2>
          <div className="flex items-center justify-center gap-2 p-1.5 bg-gray-200/60 rounded-full shadow-sm">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                suppressHydrationWarning
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  filter === tab
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-600 hover:bg-white/80"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {filter === "All" ? (
          <motion.div className="space-y-16" variants={containerVariants} initial="initial" animate="animate">
            {filteredProjects.map((p, index) => (
              <ProjectListItem key={p.id} project={p} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
