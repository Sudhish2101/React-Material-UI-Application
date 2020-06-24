import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  cardStyles:{
    boxShadow: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    backgroundColor: '#EFF2F4',
    borderRadius: 20
  },
  cardStyles1:{
    fontSize: "1.4rem",
    paddingLeft: 4,
    fontFamily: "Arial",
    color: '#31456A',
    fontWeight: "bold"
  },
  cardStyles2:{
    fontSize: "1.4rem",
    paddingLeft: 4,
    fontFamily: "Arial",
    color: '#31456A',
    fontWeight: "bold",
    paddingBottom: 12
  },
  typoStyles:{
    color: '#08C5A7',
    margin: theme.spacing(0.5),
    fontSize: "1.15rem",
    fontWeight: 500
  },
  carddividerStyle:{
    backgroundColor: '#08C5A7',
    height: 3,
    borderRadius: 3,
    width: 60,
  },
  paddingStyle1:{
    paddingTop: 25,
    paddingBottom: 15,
  },
  paddingStyle3:{
    paddingLeft: 5
  },
  paddingStyle4:{
    paddingLeft: 45
  },
  typoStyle:{
    margin: theme.spacing(0.75),
    color: '#31456A',
    fontWeight: 500
  },
  root: {
    justifyContent: 'center',
    paddingBottom: 20
  },
  cardactionStyles:{
    borderRadius: 15,
    fontSize: "1.1rem",
    fontWeight: 600,
    color: '#FFFFFF',
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 12,
    paddingBottom: 12,
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Cards = () => {
  const classes = useStyles();
    return(
      <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4} justify="center">
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.cardStyles} elevation={10}>
              <CardContent >
                <Typography className={classes.cardStyles1} gutterBottom variant="h5" >
                  Representing Square
                </Typography>
                <Typography className={classes.cardStyles2} gutterBottom variant="h5" align="center" noWrap>
                  Roots Of Decimal Numbers
                </Typography>
                <div className={classes.paddingStyle3}>
                <Divider className={classes.carddividerStyle} variant="fullWidth" />
                
                <div className={classes.paddingStyle1}>
                <Typography color="textSecondary" variant="body2" display="inline">
                  Type:    
                </Typography>
                <Typography className={classes.typoStyles} variant="body1" display="inline">
                  Jee Mains     
                </Typography>
                <Typography className={classes.paddingStyle4} color="textSecondary" variant="body2" display="inline">
                  Paper:
                </Typography>
                <Typography className={classes.typoStyles} variant="body1" display="inline">
                  1
                </Typography>
                </div>
                <div>
                <Typography variant="body2" color="textSecondary" display="inline"> 
                  Available from:
                </Typography>
                <Typography className={classes.typoStyle} variant="body2" color="textSecondary" display="inline"> 
                  01.05.2020 
                </Typography>
                </div>
                <div>
                <Typography variant="body2" color="textSecondary" display="inline">
                  Ends on: 
                </Typography>
                <Typography className={classes.typoStyle} variant="body2" color="textSecondary" display="inline"> 
                  01.11.2020
                </Typography>
                </div>
                </div>
              </CardContent>
              <CardActions className={classes.root}>
                <Button className={classes.cardactionStyles} variant="contained" size="large" color="secondary">
                  Start
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    )
}
export default Cards;