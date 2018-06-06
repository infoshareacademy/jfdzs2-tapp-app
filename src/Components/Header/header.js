import React, {Component} from 'react';

class Header extends Component {

    render(){

        return(
            <div>
                {this.props.applicationName}
            </div>
        );
    }
}

export default Header;
