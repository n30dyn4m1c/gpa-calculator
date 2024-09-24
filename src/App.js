import React, { useState } from 'react';
import courses from './courses.json';  // Make sure the file path is correct

const GPA_CALCULATOR = () => {
  const [grades, setGrades] = useState({});
  const [gpa, setGpa] = useState(null);

  const gradePoints = {
    HD: 5,
    DI: 4,
    CR: 3,
    PA: 2,
    CP: 1,
    F: 0,
  };

  const handleChange = (courseId, value) => {
    setGrades({
      ...grades,
      [courseId]: value,
    });
  };

  const calculateGpa = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const grade = grades[course.id];
      if (grade) {
        totalPoints += course.credits * gradePoints[grade];
        totalCredits += course.credits;
      }
    });

    const calculatedGpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
    setGpa(calculatedGpa.toFixed(2));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>GPA Calculator</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <label>
            {course.name} Grade:
            <select
              value={grades[course.id] || ''}
              onChange={(e) => handleChange(course.id, e.target.value)}
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
        </div>
      ))}

      <button onClick={calculateGpa}>Calculate GPA</button>

      {gpa !== null && (
        <h2 style={{ marginTop: '20px' }}>Your GPA is: {gpa}</h2>
      )}
    </div>
  );
};

export default GPA_CALCULATOR;
