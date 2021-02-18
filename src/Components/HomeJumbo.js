import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: theme.spacing(18),
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
    marginRight: "20px",
    fontSize: "14pt",
    fontWeight: "bold",

    "&:hover": {
      background: "linear-gradient(15deg, #F3A8B2 0%, #D68A95 90%)",
    },
  },
}));

const HomeJumbo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container direction="column">
        <Grid item xs={12} container>
          <Grid item xs={6} container>
            <Typography className={classes.mainTitle}>
              Hello, I'm Christina!
            </Typography>
            <Typography className={classes.secondaryTitle} gutterBottom>
              I'm a Front End Developer and Graphic Designer!
            </Typography>
            <Grid item xs={12}>
              <Button className={classes.bnt}>
                  My Work
              </Button>
              <Button className={classes.bnt}>Let's Talk</Button>
            </Grid>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={5}>
              <img 
              scr="CFloresPic.jpg"
              alt="Christina Flores Headshot"/>
              

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeJumbo;
