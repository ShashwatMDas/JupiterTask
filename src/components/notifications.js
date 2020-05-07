import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import notif from '../data/notif'
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    padding: 80
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(8),
    marginBottom: 50

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




export default function Notif() {
  const classes = useStyles();

  const [state, setState] = React.useState(notif);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const abc = {
    all: true,
    suc: true,
    fail: true,
    none: true,
  };

     

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <NotificationsIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Settings
        </Typography>
        <form className={classes.form} noValidate>
            <center>
            <FormGroup>
            <FormControlLabel
                control={<Switch checked={state.all} onChange={handleChange} name="all" />}
                label="Send all types of alerts"
            />
            <FormControlLabel
                control={<Switch checked={state.suc} onChange={handleChange} name="suc" />}
                label="Alerts on task success"
            />
            <FormControlLabel
                control={<Switch checked={state.fail} onChange={handleChange} name="fail" />}
                label="Alerts only on task fail"
            />
            <FormControlLabel
                control={<Switch checked={state.none} onChange={handleChange} name="none" />}
                label="I don't want any alerts"
            />
            </FormGroup>
            </center>
            <Button 
            type="submit"
            halfWidth
            variant="contained"
            color="error"
            style={{backgroundColor: '#e42121', marginRight: 40}}
            className={classes.submit}
            onClick={(e) => {
                e.preventDefault();
                setState({
                    ...state,
                    ...abc
                })
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            halfWidth
            variant="contained"
            color="primary"
            style={{backgroundColor: 'green'}}
            className={classes.submit}
            onClick={(e) =>{
                e.preventDefault();
                console.log(state);
                alert("Notification Updated")
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}