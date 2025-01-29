import React from 'react';

const Projects = () => {

  return (

    <section id="projects" className="bg-gray-100 py-16 px-8">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-gray-800">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

          <div className="project-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="mt-4">Description of project 1...</p>
          </div>

          <div className="project-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="mt-4">Description of project 2...</p>
          </div>

          <div className="project-item bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="mt-4">Description of project 3...</p>
          </div>
          
        </div>

      </div>

    </section>

  );
}

export default Projects;