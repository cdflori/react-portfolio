import React from "react";
// import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { StyleRoot } from "radium";
// import { Typography } from '@material-ui/core';

const NavButton = () => {
  // const { history } = props;
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: "0px 20px 0px",
      fontSize: "22px",
      // fontWeight: "bold",
      position: "relative",
      justifyContent: "flex start",
      width: 0,
      marginRight: theme.spacing(10),
      padding: "5px",
    },

    linkBase: {
      // padding: "1.5em .75em",
      display: "block",
      position: "relative",
    },

    link: {
      backgroundColor: "transparent",
      boxSizing: "border-box",
      cursor: "pointer",
      textDecoration: "none",
      color: "#3A3A3A",
      width: 0,

      "&:hover": {
            zIndex: "5",
            content: "",
            width: "100%",
            padding: "8px",
            position: "relative",
            borderBottom: "4px solid #C68D90",
            // height: "3px",
            // left: 0,
            // display: "block",
            // background: "#ffc4ff",
            transform: "translate3d(0px,60px,0px)",
            transition: "all .2s cubic-bezier(.175,.885,.32,1.275)",
        //     opacity: 0,
      },
    },
  }));

  const classes = useStyles();

  // const handleButtonClick = (btnURL) => {
  //   history.push(btnURL);
  // };

  const btnItems = [
    {
      btnTitle: "ABOUT",
      btnURL: "/about",
    },
    {
      btnTitle: "WORK",
      btnURL: "/work",
    },
    {
      btnTitle: "CONTACT",
      btnURL: "/contact",
    },
  ];

  return (
    <>
      {btnItems.map((btnItem) => {
        const { btnTitle, btnURL } = btnItem;
        return (
          <StyleRoot>
            <ul className={classes.root}>
              <li className={classes.linkBase}>
                <a href={btnURL} className={classes.link}>
                  {btnTitle}
                </a>
              </li>
            </ul>
          </StyleRoot>
        );
      })}
    </>
  );
};

export default withRouter(NavButton);
