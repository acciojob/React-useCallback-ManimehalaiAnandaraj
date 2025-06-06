import React, { useState, useCallback } from 'react';
import SkillList from './SkillList';

const initialSkills = ['HTML', 'CSS', 'JavaScript', 'React'];

const UseCallbackComp = () => {
  const [skills, setSkills] = useState(initialSkills);
  const [input, setInput] = useState('');

  const addSkill = useCallback(() => {
    const trimmed = input.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills(prev => [...prev, trimmed]);
    }
    setInput('');
  }, [input, skills]);

  const deleteSkill = useCallback((skillToDelete) => {
    setSkills(prev => prev.filter(skill => skill !== skillToDelete));
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addSkill();
  };

  return (
    <div>
      <h1 id="heading">Skill Manager</h1>
      <input
        id="skill-input"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a skill"
      />
      <button id="skill-add-btn" onClick={addSkill}>Add Skill</button>
      <SkillList skills={skills} onDelete={deleteSkill} />
    </div>
  );
};

export default UseCallbackComp;
