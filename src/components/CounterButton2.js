import React from 'react';
import { connect } from 'react-redux';
import {increaseCounter} from '../state/actions'


function CounterButton2 (props) {
    const { counter, increaseCounter } = props;
    console.log(props);
    
    return (
        <div>
            <div>
                Button component counter 2: {counter}
            </div>
            <div>
                <button onClick={increaseCounter}>+</button>
            </div>
        </div>
    );
}

const mapStatetoProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        increaseCounter: () => dispatch(increaseCounter())
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(CounterButton2);