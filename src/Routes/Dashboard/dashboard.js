import React, { PureComponent, Fragment } from 'react';
import Header from '../../Components/Header/header.js';
import Footer from '../../Components/Footer/footer.js';
import Menu from '../../Components/Menu/menu.component.js';

class Dashboard extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header applicationName="Co nas łączy?"/>
                <Menu />
                <Footer />
            </Fragment>
        );
    }
}

export default Dashboard;
