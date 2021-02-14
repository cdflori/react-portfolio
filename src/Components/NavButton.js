import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navBtn: {
    marginRight: theme.spacing(2),
  },
}));


const NavButton = (props) => {
const { history } = props;  
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
      {btnItems.map(btnItem => {
          const { btnTitle, btnURL } = btnItem;
          return (
              <Button
              className={classes.navBtn}
              onClick={() => handleButtonClick(btnURL)}>
                  {btnTitle}
              </Button>
          );
      })}
  </>
  );
};

export default NavButton;
