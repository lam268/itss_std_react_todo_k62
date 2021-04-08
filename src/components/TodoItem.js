/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import { useState } from 'react';

function TodoItem({item}) {
  const [state, setState] = useState({
    isChecked: false
  })
  
  function toggleCheck() {
    setState({isChecked: !state.isChecked});
  }
  
  return (
    <label className="panel-block">
      <input 
        type="checkbox" 
        onClick = {toggleCheck}  
      />
      <div className={state.isChecked ? "has-text-grey-light" : ""}>{item.text}</div>
    </label>
  );
}

export default TodoItem;