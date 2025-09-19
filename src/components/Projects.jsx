import React from 'react';

const projects = [
  
  {
    title: 'Site pet',
    description: 'Este portfólio, construído com tailwind e CSS para uma apresentação profissional.',
    tech: ['React', 'CSS', 'Tailwind'],
    link: '../Projeto-tailwind/index3.html',
  },
  {
    title: 'Projeto javascript',
    description: ' Projeto em javascript de Tarefa',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '../Projeto-JS-OOP/index1.html',
  },
];

const Projects = () => {
  return (
    <section className="projects text-black  mb-12 max-w-lg mx-auto font-bold text-xl ">
      <h2>Projetos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag"> 
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="project-link font-bold text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
