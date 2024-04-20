import React, {useState} from 'react';
import Task from './Task';

const Tasks = () => {
    const [tasks, setTasks] = useState([{body: 'Learn React', isChecked: false},
        {body: 'Fix CSS!', isChecked: false}])

    const handleChange = (index, task) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = task;

        setTasks(updatedTasks);
    }

    return (
        <div className="tasks">
            <h2>Task list:</h2>
            {tasks.map(({body, isChecked}, i) =>
                <Task index={i} key={i} body={body} onChange={handleChange} isChecked={isChecked}/>)}
        </div>
    )
}

export default Tasks;