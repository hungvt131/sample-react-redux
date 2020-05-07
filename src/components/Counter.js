import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render () {
        const { counterB } = this.props;
        
        return (
            <div>Current counter: { counterB } </div>
        );
    }   
}

const mapStatetoProps = state => {
    return {
        counterB: state.counterReducer.counter
    }
}

export default connect(mapStatetoProps, null)(Counter);