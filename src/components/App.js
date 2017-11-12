import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { blue } from 'material-ui/colors';
import Button from 'material-ui/Button';

import SideNav from './side-nav/SideNav';
import ContentRoutes from '../routes/contentRoutes';
import Login from './auth/Login';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    zIndex: 1,
    overflow: 'hidden',
    minHeight: '100vh'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
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
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      marginTop: 64
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  loginContainer: {
    width: '100%'
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }
  state = {
    mobileOpen: false
  };

  handleDrawerToggle() {
    this.setState((prevState, props) => {
      return { mobileOpen: !prevState.mobileOpen };
    });
  }

  renderContent() {
    const auth = true;
    const { classes, theme } = this.props;
    if (auth) {
      return (
        <div className={classes.appFrame}>
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
              <Button color="contrast">Login</Button>
              <Link to="/login">
                <Button color="contrast">Login</Button>
              </Link>
            </Toolbar>
          </AppBar>
          <SideNav
            handleDrawerToggle={this.handleDrawerToggle}
            open={this.state.mobileOpen}
          />
          <main className={classes.content}>
            <ContentRoutes />
          </main>
        </div>
      );
    }
    return (
      <div className={classes.loginContainer}>
        <Login />
      </div>
    );
  }

  render() {
    const { classes, theme } = this.props;

    // return <div className={classes.root}>{this.renderContent()}</div>;
    return (
      <BrowserRouter>
        <div>{this.renderContent()}</div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);
