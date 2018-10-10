import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import './Navbar.css';

const Navbar = () => {

    const styles = {
        button: {
            marginRight: '7px'
        }
    }

    const menuItems = (
        <div style={{ marginLeft: 'auto' }}>
            <Button color='inherit' size='large' style={styles.button} component={NavLink} exact to="/gita/">Home</Button>
            <Button color='inherit' size='large' style={styles.button} component={NavLink} to="/gita/about">About</Button>
            <Button color='inherit' size='large' style={styles.button} component={NavLink} to="/gita/source">Source</Button>
        </div>
    );

    return(
        <header>
            <AppBar
                position='sticky'
                style={{
                    backgroundColor: '#2196f3',
                    marginBottom: '20px'
                }}
                >
                <Toolbar>
                    <Typography component={Link} to='/gita' variant='h6' color='inherit'>
                        Bhagvada Gita App
                    </Typography>
                    {menuItems}
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Navbar;