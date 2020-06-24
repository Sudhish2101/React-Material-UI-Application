import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonStyles:{
    borderRadius: 12,
    borderWidth: "1.5px",
    color: '#08C5A7',
    fontFamily: "sans-serif",
    fontSize: "1rem",
    fontWeight: 550,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  }
});

const Buttons = () => {
  const classes = useStyles();
    return(
      <div>
      <Grid container spacing={4} justify="center">
        <Grid item>
          <Button  className={classes.buttonStyles} size="large" variant="outlined" color="secondary">
            JEE ADVANCE
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.buttonStyles} size="large" variant="outlined" color="secondary">
            JEE MAINS
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