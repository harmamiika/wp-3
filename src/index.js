import './index.scss';

import { TextControl, Flex, FlexBlock, FlexItem } from '@wordpress/components';

let defaultWindows = [];
for (let i = 0; i < 24; i++) {
  const window = { day: i + 1, header: null, content: null, href: null };
  defaultWindows = defaultWindows.concat(window);
}

wp.blocks.registerBlockType('ourplugin/joulukalenteri', {
  title: 'Joulukalenteri',
  icon: 'smiley',
  category: 'common',
  attributes: {
    windows: { type: 'array', default: defaultWindows },
  },
  edit: AdminSide,
  save: function (props) {
    return null;
  },
});

console.log(defaultWindows, 'defaultwindows');

function AdminSide(props) {
  function renderWindows() {
    return props.attributes.windows.map((window) => {
      return (
        <div>
          <Flex>
            <p>{`Päivä ${window.day}`}</p>
            <FlexBlock>
              <TextControl
                label="Sisältö: "
                value={window.content}
                onChange={(value) => {
                  const uudetLuukut = props.attributes.windows;
                  uudetLuukut[window.day - 1].content = value;
                  props.setAttributes({ windows: uudetLuukut });
                  console.log(props.attributes.windows, 'props');
                }}
              ></TextControl>
            </FlexBlock>
            <FlexBlock>
              <TextControl
                label="Linkki: "
                value={window.href}
                onChange={(value) => {
                  const uudetLuukut = props.attributes.windows;
                  uudetLuukut[window.day - 1].href = value;
                  props.setAttributes({ windows: uudetLuukut });
                }}
              ></TextControl>
            </FlexBlock>
          </Flex>
        </div>
      );
    });
  }

  return (
    <div>
      <h3>Joulukalenteri admin</h3>
      {renderWindows()}
    </div>
  );
}
