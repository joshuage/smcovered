import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import { catchUserStatus } from './catchUserStatus'
import { amUser } from './amUser'
import { adminUser } from './adminUser'
import { basicUser } from './basicUser'
import { _auth } from './_auth'
import { handleSelection, handlePop, data } from './handleSelection'

export default combineReducers({
	alert,
	auth,
	catchUserStatus,
	amUser,
	adminUser,
	basicUser,
	_auth,
	handleSelection,
	pop: handlePop,
	data,
});