import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import command from '../data/task1';
import command2 from '../data/task2'
import Grid from '@material-ui/core/Grid';

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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




export default function SQL({ task }) {
  const classes = useStyles();
  
  const [sql, setSql] = React.useState('');
  React.useEffect(() => {
  if(task === 1) setSql(command)
  else setSql(command2)
  },[])
  const [log, setLog] = React.useState(true);
  const [select, setSelect] = React.useState('');

  const handleSQL = (e) => {
    setSql(e.target.value);
  }


  
  
     

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Task {task}
        </Typography>
    

        <form className={classes.form} noValidate>
        <Grid container >
        <Grid item xs={12} sm={4}>
        <div>
        <Button
            type="submit"
            halfWidth
            variant="contained"
            color="error"
            style={{marginRight: 40,}}
            className={classes.submit}
            onClick={(e) =>{
                e.preventDefault();
            }}
          >
            Source Name
          </Button><br/>
          
          
          <Button
            type="submit"
            halfWidth
            variant="contained"
            color="error"
            style={{marginRight: 40}}
            className={classes.submit}
            onClick={(e) =>{
                e.preventDefault();
            }}
          >
            Provide SQL
          </Button><br/>
          <FormControlLabel
          control={
            <Checkbox
              checked={log}
              onChange={() => setLog(!log)}
              name="Log"
              color="primary"
            />
          }
          label="Enable Logging"
        />
          
          </div>
        </Grid>
        <Grid sm={8} xs={12}>
          <textarea style={{height: 300, width: "100%"}} value={sql} onChange={handleSQL} ></textarea>
        </Grid>
        </Grid>
        </form>
        <form className={classes.form} noValidate>
        <Button
            type="submit"
            halfWidth
            variant="contained"
            color="error"
            style={{ marginRight: 40}}
            className={classes.submit}
            onClick={(e) =>{
                e.preventDefault();
                // setSql('');
            }}
          >
            Target Result
          </Button>
          <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">SQL</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={select}
          style={{width: 100}}
          onChange={(e) => {
            setSelect(e.target.value);
            setSql(e.target.value);
          }}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="SELECT * FROM TABLE;">SELECT * FROM TABLE;</MenuItem>
          <MenuItem value="INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...);">INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...);
          </MenuItem>
          <MenuItem value="WHERE CustomerName LIKE 'a%';">WHERE query LIKE 'a%';</MenuItem>
          <MenuItem value="WHERE column_name IN (SELECT STATEMENT);">WHERE column_name IN (SELECT STATEMENT);</MenuItem>
          <MenuItem value="DELETE FROM table_name WHERE condition;">DELETE FROM table_name WHERE condition;</MenuItem>
        </Select>
      </FormControl>
          </form>
        <form className={classes.form} noValidate>
        <Button
            type="submit"
            halfWidth
            variant="contained"
            color="error"
            style={{backgroundColor: '#e42121', marginRight: 40}}
            className={classes.submit}
            onClick={(e) =>{
                e.preventDefault();
                setSql('');
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
                console.log(sql);
                alert(sql);
            }}
          >
            Submit
          </Button>
          </form>
      </div>
    </Container>
  );
}