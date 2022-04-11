import React from 'react'
import {TextField, Button, Typography, Paper} from '@material-ui/core'
import useStyles from './styles'

export const Form =()=>{
	const [postData, setPostData] = React.useState({
		creator: '', title: '', message: '', tags: '', selectedFile: ''
	})
	const classes = useStyles()
	const handleSubmit =()=>{

	}
	return(
       <Paper className={classes.paper}>
         <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
		   <Typography variant="h6">Creating a Memory</Typograpghy>
		   <TextField 
		      name="creator" 
		      variant="outlined"
		      label="Creator" 
		      fullWidth
              value={postData.creator}
              onChange={}
		      />
		 </form>
	   </Paper>
		)
}