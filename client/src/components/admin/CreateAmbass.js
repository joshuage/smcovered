// @yuchen
// GOAL: create ambass acount in admin dashboard
// page need to be authenticated not for now  do not store token 2


import React, { useState, useEffect } from 'react'
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

//import { login } from '../../actions/auth'       // @yuchen 需要的做redirect
import { register } from '../../actions/auth'

// @yuchen apis
import { createAdminToken } from '../../apis/yuchenAPIs'


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));


const CreateAmbass = ({ register, isAuthenticated, title }) => {

	useEffect (() =>{
		createAdminToken('yuchenge@asu.com', '666', localStorage.token)    // @yuchen我先不注册
	}, [])
	
	// @yuchen 先判断 admin 的 token；1 则update data，2 则redirect到登陆
	// console.log(isAuthenticated)
	// console.log(localStorage.token)

	if (localStorage.token){
		// 去后端判断
		console.log(localStorage.token)

	} else {
		// redirect
	}



	const classes = useStyles();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData;

	const onChange = e => setFormData({
		...formData,
		[e.target.name]: e.target.value
	})

	const onSubmit = e => {
		e.preventDefault();
		const url = 'amUser'
		console.log(formData)   //@ yuchen

		register(email, password, url)
	}

	// console.log(title)

	// Redirect if logged in
	// console.log(isAuthenticated)
	// console.log(title)
	if (isAuthenticated) {
		if (title === 'basic') {
			return <Redirect to='/ambassador' />
		} else if (title === 'admin') {
			return <Redirect to='/admin' />
		}
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Sign Up by Admin
        </Typography>
				<form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								value={email}
								onChange={e => onChange(e)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								minLength='6'
								value={password}
								onChange={e => onChange(e)}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Create Ambass
          </Button>
					{/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="/register" variant="body2">
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid> */}
				</form>
			</div>
		</Container>
	);
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	title: state.auth.title
});

export default connect(mapStateToProps, { register })(CreateAmbass);
