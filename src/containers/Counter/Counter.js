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
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult=>(
                        <li key={strResult.id} onClick={this.props.onDeleteResult}>{strResult}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}
const mapStateToProps= state => {
    return{
        ctr: state.counter,
        storedResults:state.results
    };
};
const dispatchToProps = dispatch => {
    return{
        onIncremetCounter: ()=> dispatch({type:'Increment'}),
        onDecrementCounter: ()=> dispatch({type:'Decrement'}),
        onAdd: ()=> dispatch({type:'Add', value:5}),
        onSubstract: ()=> dispatch({type:'Subtract',value:5}),
        onStoreResult: ()=> dispatch({type:'STORE_RESULT'}),
        onDeleteResult: ()=> dispatch({type:'DELETE_RESULT'})
    }
};
export default connect(mapStateToProps, dispatchToProps)(Counter);