import React from 'react';

const Task = ({index, body, isChecked, onChange}) => {
    const toggleCheck = () => {
        onChange(index, {body, isChecked: !isChecked})
    }

    return (<div className="task" onClick={toggleCheck}>
        <input type="checkbox" checked={isChecked}/>
        <h3>{body}</h3>
    </div>)
}

export default Task;