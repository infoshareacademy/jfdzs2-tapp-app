import React, { PureComponent, Fragment } from 'react';
import Header from '../Components/Header/header.js';
import Footer from '../Components/Footer/footer.js';
import Menu from '../Components/navbar/menu.component.js';

class Home extends PureComponent{

    render(){
        return (
            <Fragment>
                <Header applicationName="Co nas łączy?" />
                <Menu />
                <Footer />
            </Fragment>
        );
    }
}

export default Home;
