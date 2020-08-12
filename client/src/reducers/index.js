import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import { catchUserStatus } from './catchUserStatus'
import { amUser } from './amUser'
import { adminUser } from './adminUser'
import { basicUser } from './basicUser'

export default combineReducers({
	alert,
	auth,
	catchUserStatus,
	amUser,
	adminUser,
	basicUser,
});

