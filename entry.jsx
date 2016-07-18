import React from 'react';
import ReactDoom from 'react-dom';
import App from './app.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();


ReactDoom.render(<App/>, document.getElementById('render-target'));