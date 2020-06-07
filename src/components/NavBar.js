import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import BookIcon from '@material-ui/icons/Book'
import { IconButton } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    navbarStyle:{
      fontStyle: 'oblique',
      fontFamily: "Roboto"
    },
    titleStyle:{
      fontStyle: 'oblique',
      fontFamily: "Roboto",
      paddingTop: 20
    },
    icon: {
      marginRight: theme.spacing(0)
    },
    subtitleStyle:{
      fontFamily: "Roboto",
      paddingBottom: 20
    }
}));    

const NavBar = () => {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="static">
            <Toolbar>
                <Typography className={classes.navbarStyle} align="center" variant="h4" color="inherit">
                React & Material-UI Application
                </Typography>
            </Toolbar>
        </AppBar>
        <Typography className={classes.titleStyle} variant="h3" align="center" color="secondary" gutterBottom>
              What do you want to learn today?
              <IconButton>
              <BookIcon className={classes.icon} fontSize="inherit"/>
              </IconButton>
        </Typography>
        <Typography className={classes.subtitleStyle} variant="h5" align="center" color="textSecondary" gutterBottom>
              Select course type to continue
        </Typography>
        </div>
    )
}
export default NavBar;