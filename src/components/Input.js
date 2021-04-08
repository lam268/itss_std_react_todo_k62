import React, { useState } from 'react';

function Input({ onAdd }) {
    const [state, setState] = React.useState({
        value: ''
    })

    function handleChange(event) {
        setState({ value: event.target.value })
    }

    function handleSubmit(event) {
        onAdd(state);
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
