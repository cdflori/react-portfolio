import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "80px",
    boxShadow: "none",
    // backgroundColor: "transparent"
  },
}));

const HomeJumbo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4">Hi there, I'm Christina!</Typography>
            <Typography variant="h3">
              I'm a front end devloper and graphic designer.
            </Typography>
            <Button>My Work</Button>
            <Button>Let's Talk</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeJumbo;
