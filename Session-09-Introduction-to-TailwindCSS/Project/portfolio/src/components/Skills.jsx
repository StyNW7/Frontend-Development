import React from 'react';
import SkillItem from './SkillItem';

const Skills = () => {

  return (

    <section id="skills" className="bg-white py-16 px-8">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-gray-800">Skills</h2>

        <div className="grid grid-cols-2 gap-8 mt-8 sm:grid-cols-3 lg:grid-cols-4">

          <SkillItem skillName="React"/>
          <SkillItem skillName="HTML"/>
          <SkillItem skillName="CSS"/>
          <SkillItem skillName="JavaScript"/>

        </div>

        <div className="grid grid-cols-2 gap-8 mt-8 sm:grid-cols-3 lg:grid-cols-4">

          <SkillItem skillName="C++"/>
          <SkillItem skillName="C"/>
          <SkillItem skillName="Python"/>
          <SkillItem skillName="Java"/>

        </div>

      </div>

    </section>

  );
}

export default Skills;