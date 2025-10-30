import { FaReact, FaFigma, FaPenNib, FaPhotoVideo, FaLaptopCode } from "react-icons/fa";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import Card from "../layout/Card.jsx";

const talent = [
  {
    title: "Graphic Design",
    icon: FaPenNib,
    desc: "Design impactful visuals, posters, and digital assets that align with modern branding and storytelling."
  },
  {
    title: "Visual & Creative Production",
    icon: FaPhotoVideo,
    desc: "Produce engaging content through photography, video editing, and motion graphics for social media and marketing."
  },
  {
    title: "Branding & Identity",
    icon: MdOutlineBrandingWatermark,
    desc: "Develop consistent visual identities, from logo design to brand guidelines that reflect a strong digital presence."
  },
  {
    title: "UI/UX Design",
    icon: FaFigma,
    desc: "Design clean, user-centered interfaces with effective workflows and wireframes using Figma and design principles."
  },
  {
    title: "Front-End Development",
    icon: FaReact,
    desc: "Build responsive and interactive websites using React, Tailwind CSS, and modern development tools."
  },
  {
    title: "Digital Content & Strategy",
    icon: FaLaptopCode,
    desc: "Plan, create, and manage social media content that boosts engagement and brand awareness."
  }
];

const Specialize = () => {
  return (
    <section className="mt-8 px-6 lg:px-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white text-center m-8">
          Specialized In
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {talent.map((item, index) => (
            <div key={index} className="flex flex-col h-full">
              <Card
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialize;
