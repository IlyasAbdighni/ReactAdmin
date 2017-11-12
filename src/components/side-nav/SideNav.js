import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';

import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';

import SideNavList from './SideNavList';

const drawerWidth = 240;

const styles = theme => ({
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%'
    }
  },
  sideNaveContainer: {
    height: '100vh',
    backgroundColor: 'white'
  }
});

class SideNav extends Component {
  state = {
    mobileOpen: this.props.open
  };

  handleDrawerToggle = () => {
    this.props.handleDrawerToggle();
  };

  componentWillReceiveProps(nextProps) {
    this.setState((state, props) => {
      return { mobileOpen: nextProps.open };
    });
  }

  renderDrawer() {
    return <SideNavList drawerHeader={this.props.classes.drawerHeader} />;
  }
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.sideNaveContainer}>
        <Hidden mdUp>
          <Drawer
            type="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            onRequestClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {this.renderDrawer()}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            type="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {this.renderDrawer()}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SideNav);

// export default SideNav;
