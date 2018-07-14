import React, { PureComponent, Fragment } from 'react';
import Header from '../Components/Header/header.js';
import Footer from '../Components/Footer/footer.js';
import Menu from '../Components/Menu/menu.component.js';
import Login from '../Routes/Login/login';



class Home extends PureComponent{

    render(){
        return (
            <Fragment>
                <Header applicationName="Co nas łączy?" />
                <Menu />
                <Login />
                <Footer />
            </Fragment>
        );
    }
}

export default Home;
