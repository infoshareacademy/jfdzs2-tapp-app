import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import image from '../../images/logo.png';
import styles from "../../Styles";

class Menu extends PureComponent {
    render() {
        return (

            <div>
                <AppBar
                    title={<img src={image} className="App-logo" alt="logo" style={styles.logo}/>}
                    onLeftIconButtonClick={this.props.taggleMenu}
                    style={styles.appBar}>
                </AppBar>
                <Drawer
                    open={this.props.display}
                    onRequestChange={this.props.taggleMenu}
                    docked={false}
                    width={200}
                    style={styles.sideBar}>
                    <MenuItem><Link to="/" style={styles.sideBarItem}>Home</Link></MenuItem>
                    <MenuItem><Link to="/contact" style={styles.sideBarItem}>Kontakty</Link></MenuItem>
                    <Divider />
                    <MenuItem><Link to="/dashboard" style={styles.sideBarItem}>Dashboard</Link></MenuItem>
                    <MenuItem><Link to="/favorites" style={styles.sideBarItem}>Ulubieni</Link></MenuItem>
                    <MenuItem><Link to="/match" style={styles.sideBarItem}>Dopasowani</Link></MenuItem>
                    <MenuItem><Link to="/settings" style={styles.sideBarItem}>Ustawienia</Link></MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Menu;