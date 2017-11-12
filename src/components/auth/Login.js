import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from 'material-ui/styles';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import { CircularProgress } from 'material-ui/Progress';
import green from 'material-ui/colors/green';

import FIELDS from './formFields';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formControl: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  formContainer: {
    minHeight: '100vh',
    paddingTop: '10rem'
  },
  formStyle: {
    width: '380px',
    margin: '4em auto',
    padding: '3em 2em 2em 2em',
    background: '#fff',
    border: '1px solid #ebebeb',
    boxShadow:
      'rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px'
  },
  wrapper: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 4,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  button: {
    width: '100%'
  }
});

class Login extends Component {
  state = {
    loading: false,
    success: false
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true
            });
          }, 2000);
        }
      );
    }
  };

  timer = undefined;
  renderFormFiels() {
    const { classes, theme } = this.props;
    return FIELDS.map(({ type, name, label }, index) => {
      return (
        <FormControl key={index} fullWidth className={classes.formControl}>
          <InputLabel htmlFor={name}>{name}</InputLabel>
          <Input name={name} id={name} type={type} />
        </FormControl>
      );
    });
  }
  render() {
    const { classes, theme } = this.props;
    const { loading, success } = this.state;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success
    });
    return (
      <div className={classes.formContainer}>
        <Typography type="display2" style={{ textAlign: 'center' }}>
          Login
        </Typography>
        <form className={classes.formStyle}>
          {this.renderFormFiels()}

          <div className={classes.wrapper}>
            <Button
              raised
              color="primary"
              className={buttonClassname}
              disabled={loading}
              onClick={this.handleButtonClick}
            >
              Login
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'loginForm'
})(withStyles(styles)(Login));
