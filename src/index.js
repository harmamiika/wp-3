import './index.scss';

wp.blocks.registerBlockType('ourplugin/joulukalenteri', {
  title: 'Joulukalenteri',
  icon: 'smiley',
  category: 'common',
  attributes: {
    luukut: { type: 'array', default: [{}] },
  },
  edit: AdminSide,
  save: (props) => {
    return null;
  },
});

function AdminSide(props) {
  return (
    <div>
      <h1>Lisää dataa joulukalenteriin</h1>
    </div>
  );
}

function renderLuukku(numero) {
  return (
    <div>
      <h3>Luukku nro {numero}</h3>
    </div>
  );
}

// luukku { day: 1-24, header, content, href  }
