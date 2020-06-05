import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonStyles:{
    borderRadius: 10,
    color: 'blue',
    fontFamily: "sans-serif",
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
});

const Buttons = () => {
  const classes = useStyles();
    return(
      <div>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Button  className={classes.buttonStyles} size="large" variant="outlined" color="secondary">
            Jee Advance
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyles} size="large" variant="outlined" color="secondary">
            Jee Mains
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyles} size="large" variant="outlined" color="secondary">
            AIPMT
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyles} size="large" variant="outlined" color="secondary">
            NEET
          </Button>
        </Grid>
      </Grid>
    </div>
    )
}
export default Buttons;