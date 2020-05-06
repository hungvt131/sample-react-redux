import React from 'react';
import { connect } from 'react-redux';
import {increaseCounter} from '../state/actions'

class CounterButton extends React.Component {
    render () {
        const { counter, onBtnClick } = this.props;
        return (
            <div>
                <div>
                    Button component counter: {counter}
                </div>
                <div>
                    <button onClick={onBtnClick}>+</button>
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
      onBtnClick: () => {
        dispatch(increaseCounter())
      }
    }
  }

export default connect(mapStatetoProps, mapDispatchToProps)(CounterButton);