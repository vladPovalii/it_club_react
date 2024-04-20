import React, { useState, useEffect } from 'react';

import {
   TextField,
   Box,
   Button,
} from '@mui/material';

import Task from './Task';

const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('');

    const commitChanges = (tasks) => {
        setTasks(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    const onInputChange = event => {
        const { target: { value }} = event;

        setNewTask(value)
    }

    const handleAdd = () => {
        const updatedTasks = [...tasks, { body: newTask, isChecked: false }]
        commitChanges(updatedTasks);

        setNewTask('');
    }

    useEffect(() => {
        const lsTasks = localStorage.getItem('tasks');

        if (!lsTasks) return;

        setTasks(JSON.parse(lsTasks))

    }, [])

    const handleChange = (index, task) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = task;

        commitChanges(updatedTasks);
    }

    return (
        <div className="tasks">
            <h2>Task list:</h2>
            <Box display="flex" gap={2}>
                <TextField fullWidth placeholder="Add item..." value={newTask} onChange={onInputChange} />
                <Button variant="outlined" onClick={handleAdd}>Add</Button>
            </Box>
            {tasks.map(({ body, isChecked }, i) => <Task index={i} key={i} body={body} onChange={handleChange} isChecked={isChecked} />)}
        </div>
    )
}

export default Tasks;