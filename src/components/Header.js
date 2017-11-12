import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { blue } from 'material-ui/colors';
import Button from 'material-ui/Button';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    backgroundColor: blue[500],
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

class Header extends Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="contrast"
            aria-label="open drawer"
            onClick={this.handleDrawerToggle}
            className={classes.navIconHide}
          >
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" noWrap>
            Blog
          </Typography>

          <Button color="contrast">ok</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles()(Header);
