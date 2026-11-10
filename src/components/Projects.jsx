import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "GymTrack",
      description: "A fitness tracking application to monitor your workouts and progress.",
      tags: ["React", "Tailwind"],
      image: "./images/gymtrack.png",
      url: "https://simon-sidiropoulos.github.io/Gym-Tracker/",
    },
    {
      id: 2,
      title: "El Sabor Mexicano",
      description: "A Mexican restaurant website showcasing authentic cuisine and online ordering.",
      tags: ["React", "Tailwind"],
      image: "./images/mexicanstore.png",
      url: "https://simon-sidiropoulos.github.io/mexican-eshop/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => {
            const cardContent = (
              <>
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
              </>
            );

            return project.url ? (
              <a
                key={project.id}
                className="project-card project-card-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cardContent}
              </a>
            ) : (
              <div key={project.id} className="project-card">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
