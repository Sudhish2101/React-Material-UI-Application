import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  cardStyles:{
    fontFamily: "Roboto",
    paddingBottom: 15,
    backgroundColor: '#e0f7fa',
    borderRadius: 20,
  },
  typoStyles:{
    color: 'green',
    margin: theme.spacing(2)   
  },
  carddividerStyle:{
    backgroundColor: 'green',
    height: 3,
    borderRadius: 3,
    width: 75
  },
  typoStyle:{
    margin: theme.spacing(0.75)
  },
  cardactionStyles:{
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: 20,
    marginRight: 50
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
            <Card className={classes.cardStyles}>
              <CardContent >
                <Typography className={classes.cardStyles} gutterBottom variant="h5" align="center">
                  Representing Square Roots Of Decimal Numbers
                </Typography>
                <Divider className={classes.carddividerStyle} variant="middle" />
                <Typography className={classes.typoStyles} variant="body1">
                  Type: Jee Advance
                </Typography>
                <Typography className={classes.typoStyle} variant="body2"> 
                Available from: 01.05.2020
                </Typography>
                <Typography className={classes.typoStyle} variant="body2">
                  Ends on: 01.11.2020
                </Typography>
              </CardContent>
              <CardActions >
                <Button className={classes.cardactionStyles} variant="contained" size="large" color="secondary" endIcon={<PlayCircleFilledWhiteIcon>Start</PlayCircleFilledWhiteIcon>}>
                  Start
                </Button>
                <IconButton>
                <GetAppIcon color="secondary"/>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    )
}
export default Cards;