import React, {PureComponent, Fragment} from 'react';
import Header from '../Components/Header/header.js';
import Footer from '../Components/Footer/footer.js';
import Menu from '../Components/Menu/menu.component.js';
import FacebookLoginButton from '../Components/FacebookLoginButton/FacebookLoginButton.js';

class Home extends PureComponent {

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

        const {username} = this.state;


        return (
            <Fragment>
                <Header applicationName="Co nas łączy?"/>
                <Menu/>

                <div className="App">
                    <header className="App-header">
                        <h3 className="App-title">Yo ! Zaloguj się do aplikacji:</h3>
                    </header>

                    <div className="App-intro">
                        {!username &&
                        <div>

                            <FacebookLoginButton onLogin={this.onFacebookLogin}>
                                <button>Facebook</button>
                            </FacebookLoginButton>
                        </div>
                        }
                        {username &&
                        <p>Welcome back, {username}</p>
                        }
                    </div>
                </div>

                <Footer/>
            </Fragment>
        );
    }
}

export default Home;
