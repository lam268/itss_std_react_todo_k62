import React from 'react';

function Input({ onAdd }) {
    const [state, setState] = React.useState({})

    function handleChange(event) {
        setState( event.target.value )
    }

    function handleSubmit(event) {
        onAdd(state);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="panel-block">
                <input
                    className="input"
                    type="text"
                    placeholder="Todoを入力してください"
                    onChange={handleChange}
                />
            </div>
        </form>

    );
}

export default Input;
