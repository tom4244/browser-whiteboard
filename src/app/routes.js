import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import styled from 'styled-components';
import Async from 'react-code-splitting';
import WhtBdPage from './components/whtBdPage';

class Routes extends React.Component {
	render() {
		return (
    	<Router>
    			<div>
          	<Route exact path="/" component={WhtBdPage}/>
    			</div>
    	</Router>
    );
	}
}

export default Routes;


