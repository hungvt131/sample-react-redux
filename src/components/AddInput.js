import React from 'react';
import { connect } from 'react-redux';
import {addCounter} from '../state/actions'

class AddInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0
        }
    }

    onChangeInput (event){
        console.log('heree');
        
        this.setState({
            ...this.state,
            inputValue: event.target.value
        })
    }

    submit(onBtnClick) {
        onBtnClick(this.state.inputValue);
    }

    render () {
        const { counter, onBtnClick } = this.props;
        return (
            <div>
                <div>
                    Button component counter: {counter}
                </div>
                <div>
                    <input 
                        value={this.state.inputValue}
                        onChange={(e) => this.onChangeInput(e)}
                    ></input>
                    <button onClick={() => this.submit(onBtnClick)}>Submit</button>
                </div>
            </div>
        );
    }   
}

const mapStatetoProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onBtnClick: (val) => {
        dispatch(addCounter(val))
      }
    }
  }

export default connect(mapStatetoProps, mapDispatchToProps)(AddInput);