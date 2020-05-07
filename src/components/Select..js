import React from 'react';
import { connect } from 'react-redux';
import {addCounter} from '../state/actions'

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0
        }
    }

    onChangeInput = () => (event) => {
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
                    AddInput component counter: {counter}
                </div>
                <div>
                    <input 
                        value={this.state.inputValue}
                        onChange={this.onChangeInput()}
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

export default connect(mapStatetoProps, mapDispatchToProps)(Select);