import React from 'react';
import Table from './table';

const students = [
  {
    student: 'Erick',
    course: 'C++',
    grade: 100,
  },
  {
    student: 'Skywalker',
    course: 'The Force',
    grade: 100,
  },
  {
    student: 'Kobe',
    course: 'Basketball',
    grade: 100,
  },
];

function App() {
  return (
    <div className="container">
      <h1>Student Grade Table</h1>
      <Table data={students}/>
    </div>
  );
}

export default App;
