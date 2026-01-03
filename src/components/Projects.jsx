import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "GymTrack",
      description: "A fitness tracking application to monitor your workouts and progress.",
      tags: ["React", "JavaScript"],
      image: "/images/gymtrack.png",
    },
    {
      id: 2,
      title: "El Sabor Mexicano",
      description: "A Mexican restaurant website showcasing authentic cuisine and online ordering.",
      tags: ["React", "JavaScript"],
      image: "/images/mexicanstore.png",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
