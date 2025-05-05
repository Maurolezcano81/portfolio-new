import { useState } from 'react';
import { ProjectCard } from './ui/ProjectCard';
import { Carousel } from './ui/Carousel';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const { t } = useTranslation('projects');

  const openModal = (project: any) => {
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
        { src: '/hrm1.png' },
        { src: '/hrm2.png' },
        { src: '/hrm3.png' },
        { src: '/hrm4.png' },
        { src: '/hrm5.png' },
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
        { src: '/cap1.png' },
        { src: '/cap2.png' },
        { src: '/cap3.png' },
        { src: '/cap4.png' },
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
        { src: '/pc1.png' },
        { src: '/pc2.png' },
        { src: '/pc3.png' },
        { src: '/pc4.png' },
        { src: '/pc5.png' },
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
        { src: '/mm1.jpg' },
        { src: '/mm2.jpg' },
        { src: '/mm3.jpg' },
        { src: '/mm4.jpg' },
        { src: '/mm5.jpg' },
        { src: '/mm6.jpg' },
        { src: '/mm7.jpg' },
        { src: '/mm8.jpg' },
        { src: '/mm9.jpg' },
        { src: '/mm10.jpg' },
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
        { src: '/op1.png' },
        { src: '/op2.png' },
        { src: '/op3.png' },
        { src: '/op4.png' },
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
            <Carousel slides={currentProject.carouselSlides} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
