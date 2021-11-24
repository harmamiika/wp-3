import './Calendar.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Card from 'react-bootstrap/Card';

const divsToUpdate = document.querySelectorAll('.joulukalenteri-root');
divsToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector('pre').innerHTML);
  console.log(data, 'data');
  ReactDOM.render(<Calendar {...data} />, div);
  div.classList.remove('.joulukalenteri-root');
});

function Calendar(props) {
  console.log(props, 'props');

  const tryone = () => {
    return <div></div>;
  };

  console.log(props, 'props2');

  const renderDayOne = () => {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Päivä {props.day1.day}</Card.Title>
          {props.day1.content}
          <a href={props.day1.href}>
            <button>click me</button>
          </a>
        </Card.Body>
      </Card>
    );
  };

  // change to current year
  // also add timezone
  const renderDayTwo = () => {
    const currentDate = new Date();
    if (currentDate < new Date('2021-11-01') || !props.day2) {
      return <div>day 2</div>;
    }
    return (
      <div>
        {props.day2.content}
        <a href={props.day2.href}>
          <button>click me</button>
        </a>
      </div>
    );
  };

  const renderDayThree = () => {
    const currentDate = new Date();
    if (currentDate < new Date('2021-11-01') || !props.day3) {
      return <div>day 3</div>;
    }
    return (
      <div>
        {props.day2.content}
        <a href={props.day2.href}>
          <button>click me</button>
        </a>
      </div>
    );
  };

  return (
    <div>
      CALENDAR
      {renderDayOne()}
      {renderDayTwo()}
      {renderDayThree()}
    </div>
  );
}

// const root = document.querySelector('.joulukalenteri-root');
// console.log(root, 'root');
// const data = JSON.parse(root.querySelector('pre').innerHTML);

// console.log(data, 'data');
// ReactDOM.render(<Calendar windows={data} />, root);
