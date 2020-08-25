// @yuchen
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { mainListItems, secondaryListItems } from './listItems'
// import Chart from './Chart'
// import Deposits from './Deposits'
// import Orders from './Orders'
import { handleAuth } from '../../../actions/yuchen_actions'
import { handleToken } from '../../../apis/yuchenAPIs'
import { Redirect } from 'react-router-dom'
import Yes from './Yes'
import Create from './Create'
import Click from './Click'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        MK & YC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 390,
  },
}))

const DashBorad = ({ username, isAuth, title, handleAuth, T1 }) => {
	// console.log(T1)
	const classes = useStyles()
	const [open, setOpen] = React.useState(true)
	useEffect(() => {
		handleToken()
		handleAuth(localStorage.token)
	}, [T1])

	if (isAuth !== true && title !== 'adminUser') {
		return <Redirect to='/signup' />
	}
  
  const handleDrawerOpen = () => {
    setOpen(true);
  }
  const handleDrawerClose = () => {
    setOpen(false);
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
	
	if (T1 == 't1') {
		return <Click />
	} else if (T1 == 't0'){
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
					<Toolbar className={classes.toolbar}>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
						>
							<MenuIcon />
						</IconButton>
						<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
							{username}
						</Typography>
						<IconButton color="inherit">
							<Badge badgeContent={4} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="permanent"
					classes={{
						paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
					}}
					open={open}
				>
					<div className={classes.toolbarIcon}>
						<IconButton onClick={handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<List>{mainListItems}</List>
					<Divider />
					<List>{secondaryListItems}</List>
				</Drawer>
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Container maxWidth="lg" className={classes.container}>
						<Grid container spacing={3}>
							{/* Chart */}
							<Grid id='321' item xs={12} md={6} lg={6}>
								<Paper className={fixedHeightPaper}>
									<Create title='Create Region Manager' attr='reUser'/>
								</Paper>
							</Grid>
							{T1 === 't1' ? <Yes /> : null}
							{/* Recent Deposits */}
							<Grid item xs={12} md={6} lg={6}>
								<Paper className={fixedHeightPaper}>
									<Create title='Create Account Manager' attr='amUser'/>
								</Paper>
							</Grid>
							{/* Recent Orders */}
							<Grid item xs={12} md={6} lg={6}>
								<Paper className={classes.paper}>
									<Create title='Create Basic User' attr='basicUser' />
								</Paper>
							</Grid>
						</Grid>
						<Box pt={4}>
							<Copyright />
						</Box>
					</Container>
				</main>
			</div>
		)
	} else if (T1 == 't2') {
		return <Click />
	} else if (T1 == 't3') {
		return <Click />
	}

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {username}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid id='321' item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
								<Create title='Create Region Manager' attr='reUser'/>
              </Paper>
            </Grid>
						{T1 === 't1' ? <Yes /> : null}
            {/* Recent Deposits */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
								<div >nooooooo</div>
                <Create title='Create Account Manager' attr='amUser'/>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                <Create title='Create Basic User' attr='basicUser' />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  )
}

const mapStateToProps = state => {
	return {username: state._auth._user, isAuth: state._auth._isAuthenticated, title: state._auth._title, T1: state.handleSelection}
}

export default connect(mapStateToProps, {handleAuth})(DashBorad)