import React from 'react';

function Table(props) {
  const tableRows = props.data.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.student}</td>
        <td>{item.course}</td>
        <td>{item.grade}</td>
      </tr>
    );
  })
  return (
    <table className="table">
      <thead className="thead-inverse">
        <tr>
          <td>Name</td>
          <td>Course</td>
          <td>Grade</td>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

export default Table;