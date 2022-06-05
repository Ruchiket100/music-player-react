import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <button>Check</button>
            <button>Remove</button>
        </div>
    )
}

export default Todo;