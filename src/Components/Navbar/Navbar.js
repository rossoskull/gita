import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IconButton, AppBar, Toolbar, Typography, Button, Drawer, Divider, List, ListItem, ListItemText } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import './Navbar.css';

class Navbar extends Component {
    
    state = {
        openDrawer: false
    }

    handleDrawerClose = () => {
        this.setState({ openDrawer: false });
    }

    handleDrawerOpen = () => {
        this.setState({ openDrawer: true });
    }
    
    render() {
        const styles = {
            button: {
                marginRight: '7px'
            }
        }

        const menuItems = (
            <div id='menuItems' style={{ marginLeft: 'auto' }}>
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
                        <IconButton id='burger' onClick={this.handleDrawerOpen}>
                            <Menu style={{color: 'white'}} />
                        </IconButton>
                        <Typography id='title-image' component={Link} to='/gita' variant='headline' color='inherit'>
                            <img alt='Bhagavada Gita' src={require('./bg.png')} height='60px'/>
                        </Typography>
                        {menuItems}
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.openDrawer} onClose={this.handleDrawerClose}>
                    <div
                        role="button"
                        onClick={this.handleDrawerClose}
                        onKeyDown={this.handleDrawerClose}                        
                    >
                        <List style={{width: '280px'}}>
                            <ListItem button component={Link} to='/gita/'>
                                <ListItemText primary='Home'/>
                            </ListItem>
                            <Divider />

                            <ListItem button component={Link} to='/gita/about'>
                                <ListItemText primary='About'/>
                            </ListItem>
                            <Divider />

                            <ListItem button component={Link} to='/gita/source'>
                                <ListItemText primary='Source'/>
                            </ListItem>
                            <Divider />
                        </List>                        
                    </div>
                    </Drawer>
            </header>
        );
    }
};

export default Navbar;