import { useState } from 'react';
import { ProjectCard } from './ui/ProjectCard';
import { Carousel } from './ui/Carousel';
import { useTranslation } from 'react-i18next';

type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  carouselSlides: { src: string, title: string }[];
  link: string;
};

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const { t } = useTranslation('projects');

  const openModal = (project: Project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  const projects = [
    {
      id: 1,
      title: t('hrm_title'),
      des: t('hrm_description'),
      img: "/hrm1.png",
      iconLists: ["/re.svg", "/css.svg", "/node.svg", "/express.svg", "/sql.svg"],
      carouselSlides: [
        { title: "", src: '/hrm1.png' },
        { title: "", src: '/hrm2.png' },
        { title: "", src: '/hrm3.png' },
        { title: "", src: '/hrm4.png' },
        { title: "", src: '/hrm5.png' },
      ],
      link: "https://github.com/maurolezcano81/sgrh",
    },
    {
      id: 2,
      title: t('capy_title'),
      des: t('capy_description'),
      img: "/cn2.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/primereact.svg", "/form.svg", "/zustand.svg"],
      carouselSlides: [
        { title: "", src: '/cap1.png' },
        { title: "", src: '/cap2.png' },
        { title: "", src: '/cap3.png' },
        { title: "", src: '/cap4.png' },
      ],
      link: "https://github.com/Maurolezcano81/s21-ft-01-webapp",
    },
    {
      id: 3,
      title: t('pro_title'),
      des: t('pro_description'),
      img: "/pro1.png",
      iconLists: ["/re.svg", "/tail.svg", "/form.svg", "/zustand.svg"],
      carouselSlides: [
        { title: "", src: '/pc1.png' },
        { title: "", src: '/pc2.png' },
        { title: "", src: '/pc3.png' },
        { title: "", src: '/pc4.png' },
        { title: "", src: '/pc5.png' },
      ],
      link: "https://github.com/Maurolezcano81/c23-54-webapp",
    },
    {
      id: 4,
      title: t('mm_title'),
      des: t('mm_description'),
      img: "/mm0.png",
      iconLists: ["/re.svg", "android.svg", "/tail.svg", "/form.svg", "/zustand.svg", "mdt.svg"],
      carouselSlides: [
        { title: "", src: '/mm1.jpg' },
        { title: "", src: '/mm2.jpg' },
        { title: "", src: '/mm3.jpg' },
        { title: "", src: '/mm4.jpg' },
        { title: "", src: '/mm5.jpg' },
        { title: "", src: '/mm6.jpg' },
        { title: "", src: '/mm7.jpg' },
        { title: "", src: '/mm8.jpg' },
        { title: "", src: '/mm9.jpg' },
        { title: "", src: '/mm10.jpg' },
      ],
      link: "https://github.com/Maurolezcano81/Divs-Scripts-Project-1",
    },
    {
      id: 5,
      title: t('op_title'),
      des: t('op_description'),
      img: "/op0.png",
      iconLists: ["/re.svg", "/tail.svg"],
      carouselSlides: [
        { title: "", src: '/op1.png' },
        { title: "", src: '/op2.png' },
        { title: "", src: '/op3.png' },
        { title: "", src: '/op4.png' },
      ],
      link: "https://github.com/Maurolezcano81/Divs-Scripts-Project-1",
    }


  ];



  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
        {t('title')} <span className='text-purple'>{t('2ndPartTitle')}</span>
      </h1>

      <div className='flex flex-wrap items-center justify-center p-4 gap-x-10 gap-y-10 my-10'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => openModal(project)} />
        ))}
      </div>

      {isModalOpen && currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="p-8 rounded-lg w-[80%] md:w-[60%]">
            <button onClick={closeModal} className="absolute top-4 right-4 text-xl text-gray-700">X</button>
            {
              currentProject && (
                <Carousel slides={currentProject.carouselSlides} />
              )
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
