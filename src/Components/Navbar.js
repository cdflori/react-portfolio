import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FilterVintageSharpIcon from "@material-ui/icons/FilterVintageSharp";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavButton from './NavButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    }
  },
  headerStyle: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-center",
    paddingLeft: '40px'
  }
  // headerBtn: {
  //   marginRight: '10px'
  // }
}));

const Navbar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  // const handleButtonClick = (pageURL) => {
  //   history.push(pageURL);
  // };

  const menuItems = [
    {
      menuTitle: 'Home',
      pageURL: '/',
    },
    {
      menuTitle: 'About',
      pageURL: '/about',
    },
    {
      menuTitle: 'Work',
      pageURL: '/work',
    },
    {
      menuTitle: 'Contact',
      pageURL: '/contact',
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Floresent Design
          </Typography>
            {mobile ? (
              <>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  onClick={handleMenu}
                  aria-label="menu"
                >
                  <FilterVintageSharpIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuItems.map(menuItem => {
                    const { menuTitle, pageURL } = menuItem;
                    return (
                      <MenuItem onClick={() => handleMenuClick(pageURL)}>
                        {menuTitle}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </>
            ) : (
              <div className={classes.headerStyle}>
                <NavButton/>
              </div>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
