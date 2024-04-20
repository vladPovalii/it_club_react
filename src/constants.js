import { green, orange, grey } from '@mui/material/colors';

export const STATUS_KEYS = {
    TODO: 'TODO',
    COMPLETE: 'COMPLETE',
    IN_PROGRESS: 'IN_PROGRESS',
}

export const STATUS = {
    [STATUS_KEYS.TODO]: 'Todo',
    [STATUS_KEYS.COMPLETE]: 'Complete',
    [STATUS_KEYS.IN_PROGRESS]: 'In progress',
}

export const STATUS_COLOR = {
    [STATUS_KEYS.TODO]: grey[500],
    [STATUS_KEYS.COMPLETE]: green[500],
    [STATUS_KEYS.IN_PROGRESS]: orange[500],
}