import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncremetCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstract}  />
            </div>
        );
    }
}
const mapStateToProps= state => {
    return{
        ctr: state.counter
    };
};
const dispatchToProps = dispatch => {
    return{
        onIncremetCounter: ()=> dispatch({type:'Increment'}),
        onDecrementCounter: ()=> dispatch({type:'Decrement'}),
        onAdd: ()=> dispatch({type:'Add', value:5}),
        onSubstract: ()=> dispatch({type:'Subtract',value:5})
    }
};
export default connect(mapStateToProps, dispatchToProps)(Counter);