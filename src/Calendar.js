import './Calendar.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Card from 'react-bootstrap/Card';

// Render component to the screen
const divsToUpdate = document.querySelectorAll('.joulukalenteri-root');
divsToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector('pre').innerHTML);
  console.log(data, 'data');
  ReactDOM.render(<Calendar {...data} />, div);
  div.classList.remove('.joulukalenteri-root');
});

function Calendar(props) {
  console.log(props, 'props');

  const propsArr = Object.keys(props).map((key) => {
    new Object(...props[key]);
  });
  console.log(propsArr, 'arrapr');

  // data moves badly through props - need to make helper array
  const mapHelper = [...Array(24).keys()];
  console.log(mapHelper, 'helper');

  const renderCalendar = () => {
    console.log(props, 'props');
    return mapHelper.map((index) => {
      return renderDay(index);
    });
  };

  const renderDay = (index) => {
    const currentDate = new Date();

    if (currentDate < new Date(`2021-12-${index}` || !props[index])) {
      return (
        <Card className="window-closed">
          <Card.Body>
            <Card.Title>Päivä {index + 1}</Card.Title>
          </Card.Body>
        </Card>
      );
    }

    return (
      <Card className="window-open">
        <Card.Body>
          <Card.Title>Päivä {props[index].day}</Card.Title>
          <Card.Text>{props[index].content}</Card.Text>
          <div className="window-button">
            <a href={props[index].href}>
              <button>click me</button>
            </a>
          </div>
        </Card.Body>
      </Card>
    );
  };

  const renderDayOne = () => {
    return (
      <Card className="window-open">
        <Card.Body>
          <Card.Title>Päivä {props.day1.day}</Card.Title>
          <Card.Text>{props.day1.content}</Card.Text>
          <div className="window-button">
            <a href={props.day1.href}>
              <button>click me</button>
            </a>
          </div>
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
    <div className="calendarContainer">
      {renderDayOne()}
      {renderDayTwo()}
      {renderDayThree()}

      {renderCalendar()}
    </div>
  );
}

// const root = document.querySelector('.joulukalenteri-root');
// console.log(root, 'root');
// const data = JSON.parse(root.querySelector('pre').innerHTML);

// console.log(data, 'data');
// ReactDOM.render(<Calendar windows={data} />, root);
