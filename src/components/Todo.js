import React from 'react';

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';


/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import { getKey } from "../lib/util";

function Todo() {
    const [items, putItems] = useStorage();

    const [filter, setFilter] = React.useState('ALL');

    const displayItems = items.filter(item => {
        if (filter === 'ALL') return true;
        if (filter === 'TODO') return !item.done;
        if (filter === 'DONE') return item.done;
    });

    function handleSubmit(text) {
        putItems(items.concat({key: getKey(), text, done: false}));
    };

    function handleClick(checked) {
        const newItems = items.map(item => {
            if (item.key === checked.key) {
                item.done = !item.done;
            }
            return item;
        });
        putItems(newItems);
    };

    function handleFilterChange(value) {
        setFilter(value);
    }

    return (
        <div className="panel">
            <div className="panel-heading">
                ITSS ToDoアプリ
      </div>
            <Input onAdd={handleSubmit} />
            <Filter
                onChange={handleFilterChange}
                value={filter}
            />
            {displayItems.map(item => (
                <TodoItem
                    key={item.key}
                    item={item}
                    onCheck={handleClick}
                />
            ))}
            <div className="panel-block">
                {displayItems.length} items
      </div>
        </div>
    );
}

export default Todo;