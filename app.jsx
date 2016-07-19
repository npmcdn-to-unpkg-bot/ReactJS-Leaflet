import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//import Saludo from './Saludo.jsx';


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
	}

	handleTouchMap = () => this.setState({open: !this.state.open});

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
				<div>
					<AppBar
						title="Test Bar"
						onLeftIconButtonTouchTap={this.handleTouchMap}
					/>
					<Drawer open={this.state.open}>
						<AppBar title="Test Bar" 
							onLeftIconButtonTouchTap={this.handleTouchMap}
						/>
						<MenuItem>Menu Item 1</MenuItem>
						<MenuItem>Menu Item 2</MenuItem>
					</Drawer>
				</div>
			</MuiThemeProvider>  
		);
	}

	/*
	render() {
		return (
			<Saludo nombre="Javier"></Saludo>
		);
	}*/
	
}

export default App;