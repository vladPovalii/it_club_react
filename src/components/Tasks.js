import { v4 as guid } from 'uuid';

import React, { useState, useEffect } from 'react';

import {
   TextField,
   Box,
   Button,
} from '@mui/material';

import { STATUS_KEYS } from "../constants";
import Task from './Task';

const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('');

    const commitChanges = (tasks) => {
        console.log(tasks)
        setTasks(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    const onInputChange = event => {
        const { target: { value }} = event;

        setNewTask(value)
    }

    const handleAdd = () => {
        const updatedTasks = [...tasks, { body: newTask, status: STATUS_KEYS.TODO, id: guid() }]
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

    const handleDelete = (idToRemove) => {
        const filteredTasks = tasks.filter(({ id }) => id !== idToRemove )
        commitChanges(filteredTasks);
    }

    return (
        <div className="tasks">
            <h2>Task list:</h2>
            <Box display="flex" gap={2}>
                <TextField fullWidth placeholder="Add item..." value={newTask} onChange={onInputChange} />
                <Button variant="outlined" onClick={handleAdd}>Add</Button>
            </Box>
            {tasks.map((data) => <Task data={data} key={data.id} onChange={handleChange} onDelete={handleDelete} />)}
        </div>
    )
}

export default Tasks;