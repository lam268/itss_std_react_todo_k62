function Filter({ value, onChange }) {

  const handleClick = (key, e) => {
    e.preventDefault();
    onChange(key);
  };

  return (
    <div className="panel-tabs">
      <a
        onClick={handleClick.bind(null, 'ALL')}
        className={value === 'ALL' ?  'is-active' : ''}
      >全て</a>
      <a
        onClick={handleClick.bind(null, 'TODO')}
        className={value === 'TODO' ?  'is-active' : ''}
      >未完了</a>
      <a
        onClick={handleClick.bind(null, 'DONE')}
        className={value === 'DONE' ?  'is-active' : ''}
      >完了済み</a>
    </div>
  );
}

export default Filter