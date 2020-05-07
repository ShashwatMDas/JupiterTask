import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
import NotificationsIcon from '@material-ui/icons/Notifications';
import profileData from '../data/profile.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


function Navbar() {

  const classes = useStyles();
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen1(!open1);
    setOpen2(!open2);
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
    {[['Profile', ['Settings', 'Notification']]].map((text, index) => (
      <List>
          <ListItem button onClick={handleClick1}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={text[0]} />
            {open1   ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <Link style={{ textDecoration: 'none' , color: 'inherit'}} to="/">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={text[1][0]} />
              </ListItem>
            </Link>
            <Link style={{ textDecoration: 'none' , color: 'inherit'}} to="/notifications">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <NotificationsIcon />
                </ListItemIcon>
                <ListItemText primary={text[1][1]} />
              </ListItem>
            </Link>
            </List>
          </Collapse>
          </List>
        ))}
      <Divider />
        {[['My Tasks', ['Task 1', 'Task 2']]].map((text, index) => (
          <List>
          <ListItem button onClick={handleClick2}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={text[0]} />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <Link style={{ textDecoration: 'none' , color: 'inherit'}} to="/task1">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={text[1][0]} />
              </ListItem>
            </Link>
            <Link style={{ textDecoration: 'none' , color: 'inherit'}} to="/task2">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={text[1][1]} />
              </ListItem>
            </Link>
            </List>
          </Collapse>
          </List>
        ))}
    </div>
  );


  return (
      <AppBar position="static">
        <Toolbar>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton onClick={toggleDrawer(anchor, true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
          
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">{profileData.name}</Button>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;
