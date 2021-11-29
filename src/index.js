import './index.scss';

import { TextControl, Flex, FlexBlock } from '@wordpress/components';
//, FlexItem

wp.blocks.registerBlockType('ourplugin/joulukalenteri', {
  title: 'Joulukalenteri',
  icon: 'smiley',
  category: 'common',
  attributes: {
    day1: { type: 'object', default: { day: 1, content: '', href: '' } },
    day2: { type: 'object', default: { day: 2, content: '', href: '' } },
    day3: { type: 'object', default: { day: 3, content: '', href: '' } },
    day4: { type: 'object', default: { day: 4, content: '', href: '' } },
    day5: { type: 'object', default: { day: 5, content: '', href: '' } },
    day6: { type: 'object', default: { day: 6, content: '', href: '' } },
    day7: { type: 'object', default: { day: 7, content: '', href: '' } },
    day8: { type: 'object', default: { day: 8, content: '', href: '' } },
    day9: { type: 'object', default: { day: 9, content: '', href: '' } },
    day10: { type: 'object', default: { day: 10, content: '', href: '' } },
    day11: { type: 'object', default: { day: 11, content: '', href: '' } },
    day12: { type: 'object', default: { day: 12, content: '', href: '' } },
    day13: { type: 'object', default: { day: 13, content: '', href: '' } },
    day14: { type: 'object', default: { day: 14, content: '', href: '' } },
    day15: { type: 'object', default: { day: 15, content: '', href: '' } },
    day16: { type: 'object', default: { day: 16, content: '', href: '' } },
    day17: { type: 'object', default: { day: 17, content: '', href: '' } },
    day18: { type: 'object', default: { day: 18, content: '', href: '' } },
    day19: { type: 'object', default: { day: 19, content: '', href: '' } },
    day20: { type: 'object', default: { day: 20, content: '', href: '' } },
    day21: { type: 'object', default: { day: 21, content: '', href: '' } },
    day22: { type: 'object', default: { day: 22, content: '', href: '' } },
    day23: { type: 'object', default: { day: 23, content: '', href: '' } },
    day24: { type: 'object', default: { day: 24, content: '', href: '' } },
  },
  edit: AdminSide,
  save: function (props) {
    return null;
  },
});

// Having some issues with the wordpress-react-prop system
// as a "quick" fix here is some very ugly duplicate code instead of a loop cause of this

function AdminSide(props) {
  function renderDayOne() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day1.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day1.content}
          onChange={(value) => {
            props.setAttributes({
              day1: { ...props.attributes.day1, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day1.href}
            onChange={(value) => {
              props.setAttributes({
                day1: { ...props.attributes.day1, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }

  function renderDayTwo() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day2.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day2.content}
          onChange={(value) => {
            props.setAttributes({
              day2: { ...props.attributes.day2, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day2.href}
            onChange={(value) => {
              props.setAttributes({
                day2: { ...props.attributes.day2, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }

  function renderDayThree() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day3.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day3.content}
          onChange={(value) => {
            props.setAttributes({
              day3: { ...props.attributes.day3, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day3.href}
            onChange={(value) => {
              props.setAttributes({
                day3: { ...props.attributes.day3, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }

  function renderDay(dayNumber) {
    return (
      <div>
        <input value={props.attributes} />
      </div>
    );
  }

  console.log(props.attributes, 'attrs');

  function renderDays() {}

  return (
    <div>
      <h3>Joulukalenteri admin</h3>
      {renderDayOne()}
      {renderDayTwo()}
      {renderDayThree()}
    </div>
  );
}

// function renderWindows2() {
//   const windows = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     11,
//     12,
//     13,
//     14,
//     15,
//     16,
//     16,
//     17,
//     18,
//     19,
//     20,
//     21,
//     22,
//     23,
//     24,
//   ];

//   return windows.map((window) => {
//     return (
//       <div key={window}>
//         <input
//           value={props.attributes.windows2[window].content || ''}
//           onChange={(e) => {
//             const newWindows = props.attributes.windows2;
//             newWindows[window].content = e.target.value;
//             props.setAttributes({ windows2: newWindows });
//           }}
//         />
//       </div>
//     );
//   });
// }

// { day: 5 },
//         { day: 6 },
//         { day: 7 },
//         { day: 8 },
//         { day: 9 },
//         { day: 10 },
//         { day: 11 },
//         { day: 12 },
//         { day: 13 },
//         { day: 14 },
//         { day: 15 },
//         { day: 16 },
//         { day: 17 },
//         { day: 18 },
//         { day: 19 },
//         { day: 20 },
//         { day: 21 },
//         { day: 22 },
//         { day: 23 },
//         { day: 24 },

// windows: {
//   type: 'array',
//   default: [
//     { day: 1, content: '' },
//     { day: 2, content: '' },
//     { day: 3, content: '' },
//     { day: 4, content: '' },
//   ],
// },

// let defaultWindows = [];
// for (let i = 0; i < 24; i++) {
//   const window = { day: i + 1, header: null, content: null, href: null };
//   defaultWindows = defaultWindows.concat(window);
// }
// const defaultWindows2 = defaultWindows;

// function renderWindows() {
//   return props.attributes.windows.map((window) => {
//     return (
//       <div key={window.day}>
//         <Flex>
//           <p>{`Päivä ${window.day}`}</p>
//           <FlexBlock>
//             <input
//               value={window.content}
//               onChange={(e) => {
//                 const uudetLuukut = props.attributes.windows;
//                 uudetLuukut[window.day - 1].content = e.target.value;
//                 props.setAttributes({ windows: uudetLuukut });
//                 console.log(props.attributes.windows, 'props');
//               }}
//             />

//             <TextControl
//               label="Sisältö: "
//               value={props.attributes.windows[window.day - 1].content}
//               onChange={(newValue) => {
//                 const uudetLuukut = props.attributes.windows;
//                 uudetLuukut[window.day - 1] = {
//                   ...uudetLuukut[window.day - 1],
//                   content: newValue,
//                 };
//                 props.setAttributes({ windows: uudetLuukut });
//                 console.log(props.attributes.windows, 'props');
//               }}
//             ></TextControl>
//           </FlexBlock>
//           <FlexBlock>
//             <TextControl
//               label="Linkki: "
//               value={window.href}
//               onChange={(value) => {
//                 const uudetLuukut = props.attributes.windows;
//                 uudetLuukut[window.day - 1].href = value;
//                 props.setAttributes({ windows: uudetLuukut });
//               }}
//             ></TextControl>
//           </FlexBlock>
//         </Flex>
//       </div>
//     );
//   });
// }
