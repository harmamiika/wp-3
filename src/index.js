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

// function renderDay(dayNumber) {
//   return (
//     <div>
//       <input value={props.attributes} />
//     </div>
//   );
// }

// console.log(props.attributes, 'attrs');

// function renderDays() {} =>

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

  function renderDay4() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day4.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day4.content}
          onChange={(value) => {
            props.setAttributes({
              day4: { ...props.attributes.day4, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day4.href}
            onChange={(value) => {
              props.setAttributes({
                day4: { ...props.attributes.day4, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay5() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day5.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day5.content}
          onChange={(value) => {
            props.setAttributes({
              day5: { ...props.attributes.day5, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day5.href}
            onChange={(value) => {
              props.setAttributes({
                day5: { ...props.attributes.day5, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay6() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day6.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day6.content}
          onChange={(value) => {
            props.setAttributes({
              day6: { ...props.attributes.day6, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day6.href}
            onChange={(value) => {
              props.setAttributes({
                day6: { ...props.attributes.day6, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay7() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day7.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day7.content}
          onChange={(value) => {
            props.setAttributes({
              day7: { ...props.attributes.day7, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day7.href}
            onChange={(value) => {
              props.setAttributes({
                day7: { ...props.attributes.day7, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay8() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day8.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day8.content}
          onChange={(value) => {
            props.setAttributes({
              day8: { ...props.attributes.day8, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day8.href}
            onChange={(value) => {
              props.setAttributes({
                day8: { ...props.attributes.day8, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay9() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day9.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day9.content}
          onChange={(value) => {
            props.setAttributes({
              day9: { ...props.attributes.day9, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day9.href}
            onChange={(value) => {
              props.setAttributes({
                day9: { ...props.attributes.day9, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay10() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day10.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day10.content}
          onChange={(value) => {
            props.setAttributes({
              day10: { ...props.attributes.day10, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day10.href}
            onChange={(value) => {
              props.setAttributes({
                day10: { ...props.attributes.day10, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay11() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day11.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day11.content}
          onChange={(value) => {
            props.setAttributes({
              day11: { ...props.attributes.day11, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day11.href}
            onChange={(value) => {
              props.setAttributes({
                day11: { ...props.attributes.day11, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay12() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day12.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day12.content}
          onChange={(value) => {
            props.setAttributes({
              day12: { ...props.attributes.day12, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day12.href}
            onChange={(value) => {
              props.setAttributes({
                day12: { ...props.attributes.day12, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay13() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day13.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day13.content}
          onChange={(value) => {
            props.setAttributes({
              day13: { ...props.attributes.day13, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day13.href}
            onChange={(value) => {
              props.setAttributes({
                day13: { ...props.attributes.day13, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay14() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day14.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day14.content}
          onChange={(value) => {
            props.setAttributes({
              day14: { ...props.attributes.day14, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day14.href}
            onChange={(value) => {
              props.setAttributes({
                day14: { ...props.attributes.day14, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay15() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day15.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day15.content}
          onChange={(value) => {
            props.setAttributes({
              day15: { ...props.attributes.day15, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day15.href}
            onChange={(value) => {
              props.setAttributes({
                day15: { ...props.attributes.day15, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay16() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day16.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day16.content}
          onChange={(value) => {
            props.setAttributes({
              day16: { ...props.attributes.day16, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day16.href}
            onChange={(value) => {
              props.setAttributes({
                day16: { ...props.attributes.day16, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay17() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day17.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day17.content}
          onChange={(value) => {
            props.setAttributes({
              day17: { ...props.attributes.day17, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day17.href}
            onChange={(value) => {
              props.setAttributes({
                day17: { ...props.attributes.day17, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay18() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day18.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day18.content}
          onChange={(value) => {
            props.setAttributes({
              day18: { ...props.attributes.day18, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day18.href}
            onChange={(value) => {
              props.setAttributes({
                day18: { ...props.attributes.day18, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay19() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day19.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day19.content}
          onChange={(value) => {
            props.setAttributes({
              day19: { ...props.attributes.day19, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day19.href}
            onChange={(value) => {
              props.setAttributes({
                day19: { ...props.attributes.day19, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay20() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day20.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day20.content}
          onChange={(value) => {
            props.setAttributes({
              day20: { ...props.attributes.day20, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day20.href}
            onChange={(value) => {
              props.setAttributes({
                day20: { ...props.attributes.day20, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay21() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day21.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day21.content}
          onChange={(value) => {
            props.setAttributes({
              day21: { ...props.attributes.day21, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day21.href}
            onChange={(value) => {
              props.setAttributes({
                day21: { ...props.attributes.day21, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay22() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day22.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day22.content}
          onChange={(value) => {
            props.setAttributes({
              day22: { ...props.attributes.day22, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day22.href}
            onChange={(value) => {
              props.setAttributes({
                day22: { ...props.attributes.day22, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay23() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day23.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day23.content}
          onChange={(value) => {
            props.setAttributes({
              day23: { ...props.attributes.day23, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day23.href}
            onChange={(value) => {
              props.setAttributes({
                day23: { ...props.attributes.day23, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }
  function renderDay24() {
    return (
      <div>
        <p>{`Päivä ${props.attributes.day24.day}`}</p>
        <TextControl
          label="Sisältö: "
          value={props.attributes.day24.content}
          onChange={(value) => {
            props.setAttributes({
              day24: { ...props.attributes.day24, content: value },
            });
          }}
        ></TextControl>
        <FlexBlock>
          <TextControl
            label="Linkki: "
            value={props.attributes.day24.href}
            onChange={(value) => {
              props.setAttributes({
                day24: { ...props.attributes.day24, href: value },
              });
            }}
          ></TextControl>
        </FlexBlock>
      </div>
    );
  }

  return (
    <div>
      <h3>Joulukalenteri admin</h3>
      {renderDayOne()}
      {renderDayTwo()}
      {renderDayThree()}
      {renderDay4()}
      {renderDay5()}
      {renderDay6()}
      {renderDay7()}
      {renderDay8()}
      {renderDay9()}
      {renderDay10()}
      {renderDay11()}
      {renderDay12()}
      {renderDay13()}
      {renderDay14()}
      {renderDay15()}
      {renderDay16()}
      {renderDay17()}
      {renderDay18()}
      {renderDay19()}
      {renderDay20()}
      {renderDay21()}
      {renderDay22()}
      {renderDay23()}
      {renderDay24()}
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
