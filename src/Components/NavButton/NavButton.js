import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { StyleRoot } from "radium";


const NavButton = (props) => {
  const { history } = props;
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "0px 10px 0px",
      display: "block",
      fontSize: "19px",
      outline: "none",
      position: "relative",
      width: 0,
      // transition: "0.3s",
      marginRight: theme.spacing(6),

      "&:hover":{
        borderBottom: "4px solid pink",
        borderRadius: "4px",
        position: "relative",
        width:"75%",
        backgroundColor: "transparent",
        transition: "0.3s",
        
      },

      "&:active": {
        backgroundColor: "transparent"
      }

      // ":hover:before": {
      //   width: "100%",
      //   padding: 0
      // }
    }
  
  }));

  const classes = useStyles();

  const handleButtonClick = (btnURL) => {
    history.push(btnURL);
  };

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
            <Button
              className={classes.root}
              onClick={() => handleButtonClick(btnURL)}
            >
              {btnTitle}
            </Button>
          </StyleRoot>
        );
      })}
    </>
  );
};

export default withRouter(NavButton);
