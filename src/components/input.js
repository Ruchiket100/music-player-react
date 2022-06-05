import React from 'react';

const Input = (props) => {
    let value = '';
    function onChange(e) {
        value = e.target.value;
    }
    return (
        <div>
            <form action="" onSubmit={() => { props.onSubmit(value) }}>
                <input onChange={onChange} type="text" placeholder='eg. code' value={value} />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Input;