import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import Amplify from "aws-amplify"

import App from './App';
import config from "./config"
import registerServiceWorker from './registerServiceWorker';

import store from './store'

import 'bootstrap/dist/css/bootstrap.css';

import './index.css'

Amplify.configure({
	Auth: {
	  	mandatorySignIn: false,
	  	region: config.cognito.REGION,
	  	userPoolId: config.cognito.USER_POOL_ID,
	//   identityPoolId: config.cognito.IDENTITY_POOL_ID,
	  	userPoolWebClientId: config.cognito.APP_CLIENT_ID
	},
	// Storage: {
	//   region: config.s3.REGION,
	//   bucket: config.s3.BUCKET,
	//   identityPoolId: config.cognito.IDENTITY_POOL_ID
	// },
	API: {
	  	endpoints: [
			{
				name: "tournament",
				endpoint: config.apiGateway.URL,
				region: config.apiGateway.REGION
			},
	  	]
	}
})

ReactDOM.render(
	<Provider {...store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
