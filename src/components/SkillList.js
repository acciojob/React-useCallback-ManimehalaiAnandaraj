import React from 'react';

const SkillList = React.memo(({ skills, onDelete }) => {
  return (
    <ul>
      {skills.map((skill, idx) => (
        <li
          key={skill}
          id={`skill-number-${idx}`}
          onClick={() => onDelete(skill)}
          style={{ cursor: 'pointer' }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

export default SkillList;
