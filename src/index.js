import './index.scss';

import { TextControl, Flex, FlexBlock, FlexItem } from '@wordpress/components';

let luukut = [];
for (let i = 0; i < 24; i++) {
  const luukku = { day: i + 1, header: null, content: null, href: null };
  luukut.push(luukku);
}

wp.blocks.registerBlockType('ourplugin/joulukalenteri', {
  title: 'Joulukalenteri',
  icon: 'smiley',
  category: 'common',
  attributes: {
    luukut: { type: 'array', default: luukut },
  },
  edit: AdminSide,
  save: (props) => {
    return null;
  },
});

console.log(luukut, 'asddasdsaa');

function AdminSide(props) {
  function renderLuukut() {
    return props.attributes.luukut.map((luukku) => {
      return (
        <div>
          <Flex>
            <FlexBlock>
              {luukku.day}
              <TextControl
                value={luukku.content}
                onChange={(value) => {
                  const uudetLuukut = props.attributes.luukut;
                  uudetLuukut[luukku.day - 1].content = value;
                  props.setAttributes({ luukut: uudetLuukut });
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
      <h3>Lisää dataa joulukalenteriin</h3>
      {renderLuukut()}
    </div>
  );
}
