import './Calendar.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector('.joulukalenteri-root');
console.log(root, 'root');
const data = JSON.parse(root.querySelector('pre').innerHTML);

console.log(data, 'data');
ReactDOM.render(<Calendar windows={data} />, root);

function Calendar(props) {
  console.log(props, 'asddaaddasd');
  return <div>CALENDAR</div>;
}
