import './Calendar.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { CardActions } from '@mui/material';

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
    return { ...props[key] };
  });
  console.log(propsArr, 'arrapr');

  // data moves badly through props - need to make helper array
  const mapHelper = [...Array(24).keys()];
  console.log(mapHelper, 'helper');

  const renderCalendar = () => {
    console.log(props, 'props');
    return mapHelper.map((index) => {
      return (
        <div key={index} className="window">
          {renderDay(index)}
        </div>
      );
    });
  };

  const renderDay = (index) => {
    const currentDate = new Date();
    console.log(propsArr.length, 'length');
    console.log(index + 1, 'index+1');

    // or operator does not work?
    if (propsArr.length < index + 1) {
      return (
        <Card
          sx={{
            minHeight: 300,
            width: 300,
            bgcolor: '#ffbbbb',
          }}
        >
          <CardContent>
            <Typography>{index + 1}</Typography>
          </CardContent>
        </Card>
      );
    }

    if (currentDate < new Date(`2021-11-${index + 1}`)) {
      return (
        <Card
          sx={{
            minHeight: 300,
            width: 300,
            bgcolor: '#ffbbbb',
          }}
        >
          <CardContent>
            <Typography>{index + 1}</Typography>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card
        sx={{
          minHeight: 300,
          width: 300,
          bgcolor: '#ffcccb',
        }}
        className="window-open"
      >
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>
            Päivä {propsArr[index].day}
          </Typography>
          <Typography sx={{ fontSize: 16 }}>
            {propsArr[index].content}
          </Typography>
          <CardActions>
            <a href={propsArr[index].href}>
              <button className="href-button">Lunasta</button>
            </a>
          </CardActions>
        </CardContent>
      </Card>
    );
  };

  return <div className="calendarContainer">{renderCalendar()}</div>;
}

// const root = document.querySelector('.joulukalenteri-root');
// console.log(root, 'root');
// const data = JSON.parse(root.querySelector('pre').innerHTML);

// console.log(data, 'data');
// ReactDOM.render(<Calendar windows={data} />, root);

// {renderDayOne()}
// {renderDayTwo()}
// {renderDayThree()}

// const renderDayOne = () => {
//   return (
//     <Card className="window-open">
//       <Card.Body>
//         <Card.Title>Päivä {props.day1.day}</Card.Title>
//         <Card.Text>{props.day1.content}</Card.Text>
//         <div className="window-button">
//           <a href={props.day1.href}>
//             <button>click me</button>
//           </a>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// // change to current year
// // also add timezone
// const renderDayTwo = () => {
//   const currentDate = new Date();
//   if (currentDate < new Date('2021-11-01') || !props.day2) {
//     return <div>day 2</div>;
//   }
//   return (
//     <div>
//       {props.day2.content}
//       <a href={props.day2.href}>
//         <button>click me</button>
//       </a>
//     </div>
//   );
// };

// const renderDayThree = () => {
//   const currentDate = new Date();
//   if (currentDate < new Date('2021-11-01') || !props.day3) {
//     return <div>day 3</div>;
//   }
//   return (
//     <div>
//       {props.day2.content}
//       <a href={props.day2.href}>
//         <button>click me</button>
//       </a>
//     </div>
//   );
// };
