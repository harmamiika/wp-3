const Window = ({ index }) => {
  const currentDate = new Date();

  return <div></div>;
};

//   const renderDayOne = () => {
//     return (
//       <Card className="window-open">
//         <Card.Body>
//           <Card.Title>Päivä {props.day1.day}</Card.Title>
//           <Card.Text>{props.day1.content}</Card.Text>
//           <div className="window-button">
//             <a href={props.day1.href}>
//               <button>click me</button>
//             </a>
//           </div>
//         </Card.Body>
//       </Card>
//     );
//   };

//   // change to current year
//   // also add timezone
//   const renderDayTwo = () => {
//     const currentDate = new Date();
//     if (currentDate < new Date('2021-11-01') || !props.day2) {
//       return <div>day 2</div>;
//     }
//     return (
//       <div>
//         {props.day2.content}
//         <a href={props.day2.href}>
//           <button>click me</button>
//         </a>
//       </div>
//     );
//   };
