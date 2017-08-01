import React from "react"
import { render } from "react-dom"
import { Router, browserHistory } from 'react-router'
import { Provider } from "react-redux"
import { LocaleProvider } from 'antd'
import { locales } from 'antd/dist/antd-with-locales'
import 'antd/dist/antd.css'
import routes from './routes'

import './index.css';

//import Layout from "./components/Layout"
import store from "./store"

const app = document.getElementById('root');

render(
	<Provider store={store} >
		<LocaleProvider locale={locales.en_US}>
            <Router routes={routes} history={browserHistory}/>
		</LocaleProvider>
	</Provider>,
	app
);
