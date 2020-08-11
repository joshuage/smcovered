import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './login/Login'
import HomePage from './HomePage'

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Route path='/' exact component={HomePage} />
				<Route path='/login/yuchen' exact component={Login} />
			</BrowserRouter>
		</div>
	)
}

export default App
