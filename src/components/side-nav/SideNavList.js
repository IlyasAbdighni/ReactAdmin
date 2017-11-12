import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

const styles = theme => {
  return {
    nested: {
      paddingLeft: theme.spacing.unit * 4
    },
    drawerHeader: {
      ...theme.mixins.toolbar,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    listHeader: {
      margin: 0,
      fontWeight: 'bold'
    }
  };
};

class SideNavList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = { open: false };

  handleClick() {
    this.setState({ open: !this.state.open });
  }
  render() {
    const { classes, theme } = this.props;
    // const renderLink = () => {
    //   return <Link to="/" />;
    // };
    return (
      <div>
        <div className={classes.drawerHeader}>
          <Typography
            className={classes.listHeader}
            type="headline"
            gutterBottom
          >
            Admin
          </Typography>
        </div>
        <Divider />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <Icon>home</Icon>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/charts">
            <ListItemIcon>
              <Icon>insert_chart</Icon>
            </ListItemIcon>
            <ListItemText primary="Charts" />
          </ListItem>

          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <Icon>library_add</Icon>
            </ListItemIcon>
            <ListItemText primary="Third Party Integration" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={this.state.open}
            transitionDuration="auto"
            unmountOnExit
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Icon>satellite</Icon>
              </ListItemIcon>
              <ListItemText inset primary="Google Map" />
            </ListItem>
          </Collapse>
        </List>

        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem button component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </div>
    );
  }
}

SideNavList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideNavList);
