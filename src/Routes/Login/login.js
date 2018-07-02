import React, { PureComponent, Fragment } from 'react';
import FacebookLoginButton from '../../Components/FacebookButton/FacebookLoginButton';
import Header from '../../Components/Header/header.js';
import Footer from '../../Components/Footer/footer.js';
import Menu from '../../Components/Menu/menu.component.js';
import "./login.css";
import Register from '../../Containers/Register';
import '../../Containers/Register.css';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../../Components/LoaderButton/LoaderButton";

class Login extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    state = {
        username: null
    };

    onFacebookLogin = (loginStatus, resultObject) => {
        if (loginStatus === true) {
            this.setState({
                username: resultObject.user.name
            });
        } else {
            alert('Facebook login error');
        }
    }
    render() {
        const { username } = this.state;
        return (
            <Fragment>
                <Header applicationName="Co nas łączy?"/>
                <Menu/>
                <section>
                    <Register />
                    <div className="Login">
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="email" bsSize="large">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                            </FormGroup>
                            <LoaderButton
                                block
                                bsSize="large"
                                disabled={!this.validateForm()}
                                type="submit"
                                isLoading={this.state.isLoading}
                                text="Login"
                                loadingText="Logging in…"
                            />
                            <Button
                                block
                                bsSize="large"
                            >
                                Register
                            </Button>
                            <FacebookLoginButton onLogin={this.onFacebookLogin}>
                                <Button
                                    block
                                    bsSize="large">
                                    Login with Facebook
                                </Button>
                            </FacebookLoginButton>

                        </form>
                            <div className="App-intro">
                                { !username &&
                                <div>

                                </div>
                                }
                                {username &&
                                <h1>Welcome, {username}</h1>
                                }
                            </div>
                        </div>

                </section>

                <Footer />
            </Fragment>
        );
    }
}

export default Login;