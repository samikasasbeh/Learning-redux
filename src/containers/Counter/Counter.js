import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';

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
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult=>(
                        <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}
const mapStateToProps= state => {
    return{
        ctr: state.ctr.counter,
        storedResults:state.res.results
    };
};
const dispatchToProps = dispatch => {
    return{
        onIncremetCounter: ()=> dispatch(actionCreators.increment()),
        onDecrementCounter: ()=> dispatch(actionCreators.decrement()),
        onAdd: ()=> dispatch(actionCreators.add(5)),
        onSubstract: ()=> dispatch(actionCreators.subsctract(5)),
        onStoreResult: (result)=> dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id)=> dispatch(actionCreators.deleteResult(id))
    }
};
export default connect(mapStateToProps, dispatchToProps)(Counter);