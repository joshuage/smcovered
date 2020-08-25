import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp'
import { createAm } from '../../../apis/yuchenAPIs'
import Pop from './Pop'
import store from '../../../store'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Create = ({title, attr, pop}) => {
	const classes = useStyles()
	
	const [a, b] = useState({
		email: '',
		password: '',
	})
	
	useEffect((attr) => {
		if (attr == 'basicUser') {
			b({...a, college: 'default'})
		}
		setTimeout(() => {
			store.dispatch({type: 'POP', payload: 'fade'})
		}, 1000)
	}, [pop])

	const { email, password } = a

	const onChange = (e) => {
		console.log(e.target.value)
		b({
		...a,
		[e.target.name]: e.target.value
	})}

	const onsub = (e) => {
		e.preventDefault()
		createAm(email, password)
			.then((e) => {
				store.dispatch({type: 'POP', payload: e})
			})
	}

	const popornot = () => {              // @yuchen 等着解决下
		if (pop == 'done') {
			return <Pop />
		} else {
			return <div />
		}
	}

	const Y = popornot()

  return (
    <Container component="main" maxWidth="xs">
			{popornot()}
			<div>yes</div>
      <CssBaseline />
      <div className={classes.paper}>
        <AddCircleSharpIcon />
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <form className={classes.form} noValidate onSubmit={onsub}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
						autoFocus
						onChange={onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  )
}

const mapStateToProps = state => {
	return {pop: state.pop}
}

export default connect(mapStateToProps)(Create)