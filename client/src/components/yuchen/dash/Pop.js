import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
		},
		
	},
	o: {
		zIndex: 999,
	},
}));

export default function Pop() {
  const classes = useStyles()

  return (
    <div className={classes.o}>
      {/* <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert> */}
      <Alert severity="success">Successfully create an Account Manager!</Alert>
    </div>
  )
}