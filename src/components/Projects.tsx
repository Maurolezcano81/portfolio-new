import { projects } from '../data'

const Projects = () => {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-purple'>recent projects</span>
      </h1>

      <div className='flex flex-wrap items-center justify-center p-4 gap-16 my-10'>
        {projects && projects.map((project) => (
          <div
            className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'
            key={project.id}>
            {project.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects