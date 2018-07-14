import React, { PureComponent, Fragment } from 'react';

import "./login.css";
import '../../Containers/Register.css';

import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log(response);
}

class Login extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            email: "",
            password: "",

        };
    }






    handleSubmit = event => {
        event.preventDefault();
    }

    state = {
        username: null
    };


    render() {
        const { username } = this.state;

        return (
            <Fragment>


                <section>

                    <div className="Login">
                        <form onSubmit={this.handleSubmit}>

                            <FacebookLogin

                                autoLoad={true}
                                fields="name,email,picture"

                                callback={responseFacebook} />




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


            </Fragment>
        );
    }
}

export default Login;