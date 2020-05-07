import React from 'react';
import { connect } from 'react-redux';
import {loginUser} from '../state/actions'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal : 'Bret'
        }
    }

    inputChange = () => event => this.setState({...this.state, [event.target.name] : event.target.value})

    loginUserClicked = (reduxSagaLogin) => event => reduxSagaLogin(this.state.inputVal);
    
    render () {
        const { reduxSagaLogin, isLoggedIn, isLoading, username } = this.props;

        if(isLoading) {
            return (
                <Loader type="Puff" color="#00BFFF" height={80} width={80} />
            );
        }
        
        return (
            <div>
                {
                    isLoggedIn ? <div> <h3>Logged in with user:</h3> { username } </div> 
                    :
                    <div>
                        <input 
                            name="inputVal" 
                            value={this.state.inputVal}
                            onChange={this.inputChange()}
                            style={{"marginRight" : 20}}
                        />
                        <button onClick={this.loginUserClicked(reduxSagaLogin)}>Log in</button>
                    </div>
                }
                
            </div>
        );
    }

}


const mapStatetoProps = state => {
    return {
        username: state.userReducer.username,
        isLoading: state.userReducer.fetching,
        isLoggedIn: state.userReducer.isLoggedIn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      reduxSagaLogin: (val) => {
        dispatch(loginUser(val))
      }
    }
  }

export default connect(mapStatetoProps, mapDispatchToProps)(User);
