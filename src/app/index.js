import 'core-js/stable';
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import Routes from './routes';

const render = (Component) => {
  ReactDOM.render( 
   	  <AppContainer> 
   	    <Component />
   	  </AppContainer>,
 	   document.getElementById('routes'),
  );
};

render(Routes);

// For hot module reloading (HMR) during development
if (module.hot) {
	module.hot.accept('./routes', () => { 
		const App = require('./routes').default;
		render(App);
	});
}
