import React from 'react';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Node.js', level: 75 },
  { name: 'SQL', level: 0 },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
