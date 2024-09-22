import React, { useState } from 'react';

const GPA_CALCULATOR = () => {
  const [grades, setGrades] = useState({
    course1: '',
    course2: '',
    course3: '',
    course4: '',
  });

  const [gpa, setGpa] = useState(null);

  const gradePoints = {
    HD: 5,
    DI: 4,
    CR: 3,
    PA: 2,
    CP: 1,
    F: 0,
  };

  // Assuming all courses have the same credit of 3
  const courseCredits = {
    course1: 3,
    course2: 3,
    course3: 3,
    course4: 3,
  };

  const handleChange = (course, value) => {
    setGrades({
      ...grades,
      [course]: value,
    });
  };

  // Updated GPA formula: GPA = Sum(Credit * GradePoint) / Sum(Credits)
  const calculateGpa = () => {
    const totalPoints =
      (courseCredits.course1 * gradePoints[grades.course1] || 0) +
      (courseCredits.course2 * gradePoints[grades.course2] || 0) +
      (courseCredits.course3 * gradePoints[grades.course3] || 0) +
      (courseCredits.course4 * gradePoints[grades.course4] || 0);

    const totalCredits =
      courseCredits.course1 +
      courseCredits.course2 +
      courseCredits.course3 +
      courseCredits.course4;

    const calculatedGpa = totalPoints / totalCredits;
    setGpa(calculatedGpa.toFixed(2));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>GPA Calculator</h1>

      {/* Course 1 */}
      <label>
        Course 1 Grade:
        <select
          value={grades.course1}
          onChange={(e) => handleChange('course1', e.target.value)}
        >
          <option value="">Select Grade</option>
          <option value="HD">HD</option>
          <option value="DI">DI</option>
          <option value="CR">CR</option>
          <option value="PA">PA</option>
          <option value="CP">CP</option>
          <option value="F">F</option>
        </select>
      </label>

      <br />

      {/* Course 2 */}
      <label>
        Course 2 Grade:
        <select
          value={grades.course2}
          onChange={(e) => handleChange('course2', e.target.value)}
        >
          <option value="">Select Grade</option>
          <option value="HD">HD</option>
          <option value="DI">DI</option>
          <option value="CR">CR</option>
          <option value="PA">PA</option>
          <option value="CP">CP</option>
          <option value="F">F</option>
        </select>
      </label>

      <br />

      {/* Course 3 */}
      <label>
        Course 3 Grade:
        <select
          value={grades.course3}
          onChange={(e) => handleChange('course3', e.target.value)}
        >
          <option value="">Select Grade</option>
          <option value="HD">HD</option>
          <option value="DI">DI</option>
          <option value="CR">CR</option>
          <option value="PA">PA</option>
          <option value="CP">CP</option>
          <option value="F">F</option>
        </select>
      </label>

      <br />

      {/* Course 4 */}
      <label>
        Course 4 Grade:
        <select
          value={grades.course4}
          onChange={(e) => handleChange('course4', e.target.value)}
        >
          <option value="">Select Grade</option>
          <option value="HD">HD</option>
          <option value="DI">DI</option>
          <option value="CR">CR</option>
          <option value="PA">PA</option>
          <option value="CP">CP</option>
          <option value="F">F</option>
        </select>
      </label>

      <br />

      <button onClick={calculateGpa}>Calculate GPA</button>

      {gpa !== null && (
        <h2 style={{ marginTop: '20px' }}>Your GPA is: {gpa}</h2>
      )}
    </div>
  );
};

export default GPA_CALCULATOR;
