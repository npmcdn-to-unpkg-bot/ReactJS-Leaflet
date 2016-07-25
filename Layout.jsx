import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <AppBar 
                    title="Scals"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    iconElementRight={
                        <IconMenu
                            iconButtonElement={
                                <IconButton><MoreVertIcon /></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        >
                            <MenuItem primaryText="Ayuda" />
                            <MenuItem primaryText="Cerrar Sesión" />
                        </IconMenu>
                    }
                />
                <Drawer docked={false} open={this.state.open} width={200}>
                    <AppBar 
                        title="Scals"
                        iconElementLeft={
                            <IconButton 
                                onTouchTap={this.handleToggle}><NavigationClose/>
                            </IconButton>
                        }
                    />
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}
export default Layout;