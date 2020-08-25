// @yuchen
import React, { useEffect } from 'react'
import axios from '../apis/yuchenAxios'
import { connect } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UNKNOW_USER } from '../actions/types'

import Login from './auth/Login'
import Theme from './ui/Theme'
import Alert from './ui/Alert'
import { loadUser } from '../actions/auth'
import setAuthToken from '../utils/setAuthToken'
import AmbassadorQuery from './ambassador/query'
import Admin from './admin/dashbord'
import CreateAmbass from './admin/CreateAmbass'
import SignInSide from './yuchen/login/SignInSide'
import DashBorad from './yuchen/dash/DashBorad'
import DashBorad_a from './yuchen/dash/DashBorad_a'
import DashBorad_b from './yuchen/dash/DashBorad_b'

// Redux
// import { Provider } from 'react-redux';
import store from '../store'

// setAuthToken()
if (!localStorage.token) {
	localStorage.setItem('token', 'unAuthorized')
} else {
	axios.defaults.headers.common['x-auth-token'] = localStorage.token
}

const App = (props) => {                                             //@yuchen 
	useEffect(() => {
		setAuthToken()
		const temp = async () => {
			try {
				// axios.defaults.headers.common['x-auth-token'] = localStorage.token
				// console.log(axios.defaults.headers.common)

				axios.get('/api/auth').then((e) => {
					e.data.msg === 'authenticated' ?
						store.dispatch(loadUser()) :
						store.dispatch({ type: UNKNOW_USER, payload: 'unAuthorized' })
				})
			} catch (error) {
				console.log(error)
			}
		}
		temp()
	}, [props.isAuthenticated])                               // @yuchen 是不是可以在这里加dependency这样来进行渲染

	return (                                                          // @yuchen 我不知道为啥不能用segment
		<div>
			<ThemeProvider theme={Theme}>
				<Router>
					<Alert />
					<Switch>
						<Route exact path='/' component={Login} />  
						<Route exact path='/login' component={Login} />
						<Route exact path='/ambassador' component={AmbassadorQuery} />
						<Route exact path='/admin' component={Admin} />
						<Route exact path='/signup' component={SignInSide}/>               {/* @yuchen use later */}
						<Route exact path='/admin/create' component={CreateAmbass} />  
						<Route exact path='/admin/dash' component={DashBorad} />
						<Route exact path='/am/dash' component={DashBorad_a} />
						<Route exact path='/basic/dash' component={DashBorad_b} />  
					</Switch>
				</Router>
			</ThemeProvider>
		</div>
	);
}

const mapStateToProps = (state) => {
	return ({ isAuthenticated: state.auth.isAuthenticated })         // @yuchen 我没看第一次初始化redux store是什么时候
}

export default connect(mapStateToProps)(App)

