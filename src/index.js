import React from 'react';
import ReactDOM from 'react-dom';

const erick = {
  name: 'Erick',
  luckyNumber: luckyNumber(),
}

ReactDOM.render(
  <Greeting user={erick} />,
  document.getElementById('root')
);

function luckyNumber() {
  return (Math.random() * (1000 - 1 + 1) | 0) + 1;
}

function Greeting(props) {
  return (
    <div className="container">
      <h1>Welcome {props.user.name}</h1>
      <h2 className="text-muted">Your lucky number is: {props.user.luckyNumber}</h2>
    </div>
  );
}

