import React from 'react'
import { AppBar, Badge, Toolbar, Typography } from '@mui/material'
import { ShoppingBag, Hiking, AutoStories } from '@mui/icons-material';

const Header = ({ shopClick, countBadge }) => {
    return (
        <AppBar position='static' >
            <Toolbar>
                <Typography variant="h4" sx={{ flexGrow: 1 }}>Shop</Typography>
                <Badge badgeContent={countBadge} color="secondary">
                    <AutoStories onClick={shopClick} />
                </Badge>

            </Toolbar>
        </AppBar>
    )
}

export default Header