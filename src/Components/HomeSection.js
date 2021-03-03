import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, CardMedia, Typography } from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  container: {
    padding: theme.spacing(8),
  },

  paper1: {
    padding: "10px",
    textAlign: 'left',
    color: theme.palette.text.secondary,
    // background: 'none',
    // boxShadow: 'none',
    fontSize: "40pt",
    fontWeight: "bold",
  },

  paper2: {
    padding: "10px",
    textAlign: 'left',
    color: theme.palette.text.secondary,
    background: 'none',
    boxShadow: 'none',
    fontSize: "22pt",
    fontWeight: "bold",
    maxWidth: "300px"
    // marginBottom: "30px",
  },

  media: {
    height: "400px",
    maxWidth: "400px",
    borderRadius: '20px'

  },

  // mediaCard: {
  //   background: 'none',
  //   height: "500px",
  //   width: "500px",
  //   padding: '20px',
  //   justify: 'flex-center'
  // },
}));

export default function HomeSection() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} sm={12} md={1}/>
        <Grid item xs={12} sm={12} md={4}> 
          {/* <Card className={classes.mediaCard}> */}
            <CardMedia 
            className={classes.media}
            image={process.env.PUBLIC_URL + "assets/CFloresPic.jpg"}
            title="Christina Flores Headshot"
            boxShadow={3}/>
          {/* </Card> */}
        </Grid>
        <Grid item xs={12} sm={12} md={6}> 
          <Typography 
          className={classes.paper1}>
          Hello, I'm Christina!
          </Typography>
          <Typography className={classes.paper2}> I'm a Front End Developer and Graphic Designer!</Typography>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={1}/>  */}
      </Grid>
    </div>
  );
}