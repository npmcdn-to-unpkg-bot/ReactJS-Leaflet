import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Layout from './Layout';
import LeafletMap from './LeafletMap';
//import Loading from './Loading';


const muiTheme = getMuiTheme({
  appBar: {
    height: 50
  }
});

class App extends React.Component {
	
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Layout />
					<LeafletMap />
				</div>
			</MuiThemeProvider>  
		);
	}

}
export default App;





