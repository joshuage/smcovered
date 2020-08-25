import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title'
import { getData } from '../../../apis/yuchenAPIs'
import store from '../../../store'

// Generate Order Data
function createData(id, date, name, shipTo, belongs) {
  return { id, date, name, shipTo, belongs };
}



const getData_manager = () => {

}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));



const Orders = ({data}) => {
	const classes = useStyles();
	var c = '0'
	const rows = [
		createData(0, '18 Aug, 2020', 'test@asu.edu', 'Tempe, AZ', 'yuchen ge'),
		createData(1, '16 Aug, 2020', 'Paul McCartney', 'Tempe, AZ', 'yuchen ge'),
	]

	const [a, b] = useState('0')
	//var results = []

	// const op = async () => {
	// 	results = await getData('title')
	// 	// console.log(results)
	// 	store.dispatch({type: 'data', payload: results})
	// 	b('1')
		
	// }
	// op()

	useEffect(()=>{
		const op = async () => {
			const results = await getData('title')
			// console.log(results)
			store.dispatch({type: 'data', payload: results})
			b('1')
			
		}
		op()
	},[a])
	

	


	// console.log(typeof results)
	// console.log(results)


  return (
    <React.Fragment>
      <Title>Accounts</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Region</TableCell>
            <TableCell>Belongs To</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.belongs}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more data
        </Link>
      </div>
    </React.Fragment>
  );
}

const mapStateToprops = state => {
	return {data: state.data}
}

export default connect(mapStateToprops)(Orders)