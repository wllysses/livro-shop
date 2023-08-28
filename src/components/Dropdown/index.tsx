import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GrDown } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

export function Dropdown({ name }: { name: string }) {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
        localStorage.removeItem('USER_TOKEN');
        localStorage.removeItem('USER_DATA');
        navigate('/');
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent !important', color: 'var(--dark-color) !important' }}
            >
                {name}
                <GrDown />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Sair</MenuItem>
            </Menu>
        </div>
    );
}
