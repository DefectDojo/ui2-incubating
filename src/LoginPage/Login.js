<<<<<<< HEAD
import { Button } from '@material-ui/core';
import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import{ Component } from 'react';
import { authenticate, isLoggedIn } from '../services/auth';
import { useHistory } from 'react-router-dom';

class PasswordShowHide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: '',
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
    this.props.setPassword(this.state.password)
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  render() {
    return (
      <div>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={this.state.hidden ? 'password' : 'text'}
          value={this.state.password}
          onChange={this.handlePasswordChange}
            id="password"
            autoComplete="current-password"
          ></TextField>
          <FormControlLabel
            control={<Checkbox onClick={this.toggleShow} value="show" color="primary" />}
            label="Show Password"
          />
      </div>
    );
    
  }
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    large: {
      width: theme.spacing(100),
      height: theme.spacing(100),
    }
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignIn() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory()

  const handleSubmit = (evt) => {
    evt.preventDefault();
    authenticate(name, password)
    if(isLoggedIn){
      history.push("/")
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}  src={require("../images/defect.png")} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            value={name}
            onChange={e => setName(e.target.value)}
            autoFocus
          />
          <PasswordShowHide password={password} setPassword={setPassword}/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
=======
import React from 'react';

function Login() {
    return (
        <div>
      <h1>Login Page</h1>
      </div>
    );
  }

export default Login
>>>>>>> main
