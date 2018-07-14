import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userId: '',
        name: '',
        email: '',
        picture: '',
        movies: [],
        friends: [],
    };
    responseFacebook = response => {
        console.log(response);
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
            movies: response.movies.data,
            friends: response.friends.data,
        });
    }
    componentClicked = () => console.log("clicked");
    render(){
        let fbContent;
        if(this.state.isLoggedIn) {
            fbContent = (
                <div style = {{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h2>Witamy {this.state.name}</h2>
                    Email: {this.state.email}
                    Movies: {this.state.movies.map(movie => movie.name).join(', ')}
                    Friends: {this.state.friends.map(friend => friend.name).join(', ')}
                </div>
            )
        } else {
            fbContent =  (
                <FacebookLogin
                    appId="202999163755971"
                    autoLoad={true}
                    fields="name,email,picture,movies,friends"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            );
        }
        return (
            <div>
                {fbContent}
            </div>
        );
    }
}
export default Facebook;