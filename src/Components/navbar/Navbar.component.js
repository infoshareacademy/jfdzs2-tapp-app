import React, {PureComponent} from 'react';
import Menu from "./menu.component";

class Navbar extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
    }

    handleOnClick = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    };

    render() {
        return (
            <div>
                <Menu
                    taggleMenu={this.handleOnClick}
                    display={this.state.showMenu}
                />
            </div>
        );
    }
}

export default Navbar;