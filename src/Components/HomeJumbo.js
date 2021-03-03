import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Button, CardMedia, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: theme.spacing(4),
    // textAlign: "center",
    color: "#3A3A3A",
    // margin: "80px 200px 0px 200px",
    boxShadow: "none",
    // backgroundColor: "transparent"
  },
  mainTitle: {
    fontSize: "54pt",
    fontWeight: "bold",
  },

  secondaryTitle: {
    fontSize: "32pt",
    fontWeight: "bold",
    marginBottom: "30px",
  },

  btnGrid: {
    padding: theme.spacing(2),
    justifyContent: "space-between",
  },

  bnt: {
    background: "linear-gradient(15deg, #F8B8BF 0%, #DBA1A7 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(175, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: theme.spacing(2),
    // paddingBottom: '23px',
    marginRight: "20px",
    fontSize: "14pt",
    fontWeight: "bold",

    "&:hover": {
      background: "linear-gradient(15deg, #F3A8B2 0%, #D68A95 90%)",
    },
  },

  media: {
    height: "500px",
    width: "500px"
  },

  mediaCard: {
    background: 'none',
    height: "500px",
    width: "500px",
    justifyContent: 'center'
  },

  mediaGrid: {
    padding: theme.spacing(8),
  }
}));

const HomeJumbo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container direction="column">
        <Grid item xs={12} container className={classes.mediaGrid}>
          <Grid item xs={12} sm={12} md={1} lg={1} />
          <Grid item xs={12} sm={12} md={3} lg={3}>
              <Card className={classes.mediaCard}>
                <CardMedia 
                className={classes.media}
                image={process.env.PUBLIC_URL + "assets/CFloresPic.jpg"}
                title="Christina Flores Headshot"/>
              </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={1} lg={1} />
          <Grid item xs={12} sm={12} md={6} lg={6} className={classes.mediaGrid}>
            <Typography className={classes.mainTitle}>
                Hello, I'm Christina!
            </Typography>
            <Typography className={classes.secondaryTitle} gutterBottom>
              I'm a Front End Developer and Graphic Designer!
            </Typography>
            <Button className={classes.bnt}>My Work</Button>
            <Button className={classes.bnt}>Let's Talk</Button>
          </Grid>
          <Grid item xs={12} sm={12} md={1} lg={1} />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeJumbo;
