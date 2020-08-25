import React, { connect } from 'react';
import ReactDom from 'react-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment'

import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { handle_t1 } from '../../../actions/yuchen_actions'
import store from '../../../store'

const handleClick = () => {
	// document.getElementById('321').remove()
	store.dispatch({type: 'T1', payload: 't0'})
}

const add_1 = () => {
	store.dispatch({type: 'T1', payload: 't2'})
}

const add_2 = () => {
	store.dispatch({type: 'T1', payload: 't3'})
}

const add = () => {
	// const b = document.createElement(Grid)
	// b.innerHTML = 'Click'
	// document.getElementById('321').appendChild(b)
	store.dispatch({type: 'T1', payload: 't1'})
	

	
	// ReactDom.createPortal(
	// 	<Grid className='add'>
	// 		<Paper style={{ padding: 50 + 'px' }}>
	// 			<div>what i add</div>
	// 		</Paper>
	// 	</Grid>,
	// 	document.getElementById('321')
	// )

	// return (
	// 	<Grid className='add'>
	// 		<Paper style={{padding: 50+'px'}}>
	// 			<div>what i add</div>
	// 		</Paper>
	// 	</Grid>
	// )
}

export const mainListItems = (
	<div>
		<ListItem button onClick={handleClick}>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary="Dashboard" />
		</ListItem>
		<ListItem button onClick={add}>
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary="Region Manager" />
		</ListItem>
		<ListItem button onClick={add_1}>
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary="Account Manager" />
		</ListItem>
		<ListItem button onClick={add_2}>
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText primary="Basic User" />
		</ListItem>
	</div>
)


export const secondaryListItems = (
	<div>
		<ListSubheader inset>let me know what u need</ListSubheader>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Current month" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Last quarter" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Year-end sale" />
		</ListItem>
	</div>
)
