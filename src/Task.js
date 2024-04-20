import React from 'react';

import { Checkbox, Box, Typography } from '@mui/material';

const Task = ({ index, body, isChecked, onChange }) => {
    const toggleCheck = () => {
        onChange(index, { body, isChecked: !isChecked })
    }

    return (
        <Box sx={{ cursor: 'pointer' }} display="flex" alignItems="center" p={0.5} onClick={toggleCheck}>
            <Checkbox readOnly checked={isChecked}/>
            <Typography variant="h5">{body}</Typography>
        </Box>
    )
}

export default Task;