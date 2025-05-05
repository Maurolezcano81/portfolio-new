import { motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { FaExternalLinkAlt } from "react-icons/fa";

export function ProjectCard({ project, onClick }: { project: any, onClick: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group/card max-w-xs w-full cursor-pointer"
    >
      <div
        className={cn(
          "relative min-h-96 max-h-[600px] rounded-md shadow-xl max-w-sm mx-auto overflow-hidden transition-transform duration-300"
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.img})` }}
        />

        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
          <div className="z-10 relative">
            <a href={project.link} target="_BLANK" className="flex underline gap-2 items-center">
              {project.title}
              <FaExternalLinkAlt />
            </a>
            <p className="font-normal text-sm text-gray-50 my-4">
              {project.des}
            </p>
          </div>

          <div className="flex items-center justify-between z-10 relative">
            <div className="flex items-center space-x-2">
              {project.iconLists.map((icon: string, i: number) => (
                <div
                  key={i}
                  className="border rounded-full border-white/[0.2] bg-black w-8 h-8 flex justify-center items-center"
                >
                  <img src={icon} alt="tech" className="p-1 w-full h-full" />
                </div>
              ))}
            </div>

            <button onClick={onClick} className="text-purple-600 flex items-center">
              Ver
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
