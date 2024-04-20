import React from 'react';

import { Box, Chip, Typography, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { STATUS, STATUS_COLOR } from '../constants';

const Task = ({ data, onChange, onDelete }) => {
    const { id, status, body } = data;

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <Box sx={{ cursor: 'pointer' }} display="flex" justifyContent="space-between" alignItems="center" p={0.5}>
            <Typography variant="h5">{body}</Typography>
            <Chip label={STATUS[status]} sx={{ background: STATUS_COLOR[status], color: (theme) => theme.palette.getContrastText(STATUS_COLOR[status]) }} />
            <IconButton onClick={handleDelete}>
                <Delete />
            </IconButton>
        </Box>
    )
}

export default Task;