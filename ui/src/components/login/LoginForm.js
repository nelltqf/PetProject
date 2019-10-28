import React, {Component} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        };

    }

    login = () => {
        console.log("username", this.state.username);
        console.log("password", this.state.password);
    };

    handleChange = fieldName => {
        return event => {
            this.setState({
                [fieldName]: event.target.value
            });
        };
    };

    render() {

        return <div className="root">
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div>
                    <Typography component="h1" variant="h5">
                        Log In
                    </Typography>
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="username"
                            autoFocus
                            value={this.state.username}
                            onChange={this.handleChange("username")}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleChange("password")}

                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.login}
                        >
                            Log in
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    }
}