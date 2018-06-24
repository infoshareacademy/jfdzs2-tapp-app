
import React, { PureComponent, Fragment } from 'react';
import Header from '../../Components/Header/header.js';
import Footer from '../../Components/Footer/footer.js';
import Menu from '../../Components/Menu/menu.component.js';

class Login extends PureComponent {

    ComponentDidMount() {

        function statusChangeCallback(response) {
            console.log('statusChangeCallback');
            console.log(response);

            if (response.status === 'connected') {

                testAPI();
            } else {

                document.getElementById('status').innerHTML = 'Please log ' +
                    'into this app.';
            }
        }

        function checkLoginState() {
            FB.getLoginStatus(function (response) {
                statusChangeCallback(response);
            });
        }

        window.fbAsyncInit = function () {
            FB.init({
                appId: '202999163755971np',
                cookie: true,

                xfbml: true,
                version: 'v2.8'
            });


            FB.getLoginStatus(function (response) {
                statusChangeCallback(response);
            });

        };


        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));


        function testAPI() {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function (response) {
                console.log('Successful login for: ' + response.name);
                document.getElementById('status').innerHTML =
                    'Thanks for logging in, ' + response.name + '!';
            });
        }
    }

    render() {
        return (
            <Fragment>
                <Header applicationName="Co nas łączy?"/>
                <Menu />

            <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
            </fb:login-button>

                <Footer />

            </Fragment>
        );
    }
}

export default Login;








