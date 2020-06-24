import React  from 'react'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles'
import NavBar from './components/NavBar'
import Buttons from './components/Buttons'
import Cards from './components/Cards'

const useStyles = makeStyles((theme) => ({
  paperStyle:{
    backgroundColor: '#ECF0F3'
  },
  bodydividerStyle:{
    backgroundColor: 'gray',
    height: 2,
    margin: theme.spacing(6)
  },
  colorStyle:{
    backgroundColor: '#ECF0F3',
  }
}));

export default function App() {
  const classes = useStyles();
    return (
      <Paper className={classes.paperStyle}>
       <div>
         <NavBar/>
         < Buttons/>
         <Divider className={classes.bodydividerStyle} variant="middle" />
         <Cards/>
       </div>
      </Paper>
    )
}