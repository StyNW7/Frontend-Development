import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="skill-item">
            <h3 className="text-xl font-semibold">React</h3>
          </div>
          <div className="skill-item">
            <h3 className="text-xl font-semibold">TailwindCSS</h3>
          </div>
          <div className="skill-item">
            <h3 className="text-xl font-semibold">JavaScript</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;