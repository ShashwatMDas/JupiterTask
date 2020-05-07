import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormHelperText from '@material-ui/core/FormHelperText';
import profileData from '../data/profile.js';


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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




export default function Profile() {
  const classes = useStyles();
  const [profile, setProfile] = React.useState(profileData)

  const validation = (x) => {
    if(x.length > 30) return true;
  }

  const handleName = (e) => {
    setProfile({
        ...profile,
        "name": e.target.value
    })
  }
  const handleDate = (e) => {
    setProfile({
        ...profile,
        "dob": e.target.value
    })
  }
  const handleProf = (e) => {
    setProfile({
        ...profile,
        "profession": e.target.value
    })
  }
  const handleDesgn = (e) => {
    setProfile({
        ...profile,
        "desgn": e.target.value
    })
  }

  const abc = {
      "name": '',
      "dob": '',
      "profession": '',
      "desgn": ''
  };

  
  
  
     

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Profile Info
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            error={profile.name.length > 30 ? true : false}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={profile.name}
            onChange={handleName}
            autoComplete="name"
            autoFocus
          />
          <FormHelperText id="component-error-text" style={{color: '#a02a2a', letterSpacing: 1.5}}>{profile.name.length > 30 ? "Must be less than 30 characters": ""}</FormHelperText>
          <TextField
                id="date"
                label="Birthday"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="date"
                value={profile.dob}
                onChange={handleDate}
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <TextField
                variant="outlined"
                margin="normal"
                error={profile.profession.length > 30 ? true : false}
                required
                fullWidth
                id="profession"
                label="Profession"
                name="Profession"
                value={profile.profession}
                onChange={handleProf}
                autoComplete="name"
                autoFocus
            />
            <FormHelperText id="component-error-text" style={{color: '#a02a2a', letterSpacing: 1.5}}>{profile.profession.length > 30 ? "Must be less than 30 characters": ""}</FormHelperText>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                error={profile.desgn.length > 30 ? true : false}
                id="desgn"
                label="Designation"
                name="Designation"
                value={profile.desgn}
                onChange={handleDesgn}
                autoComplete="name"
                autoFocus
            />
            <FormHelperText id="component-error-text" style={{color: '#a02a2a', letterSpacing: 1.5}}>{profile.desgn.length > 30 ? "Must be less than 30 characters": ""}</FormHelperText>
            <Button
            type="submit"
            halfWidth
            variant="contained"
            color="error"
            style={{backgroundColor: '#e42121', marginRight: 40}}
            className={classes.submit}
            onClick={(e) =>{
                e.preventDefault();
                setProfile({...profile, ...abc});
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
                console.log(profile);
                alert("Submitted");
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}