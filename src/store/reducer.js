
const initialState = {
    counter:0
};

const reducer =(state = initialState, action) =>{
    if(action.type === 'Increment'){
        return{
            counter: state.counter + 1
        }
    }
    if(action.type === 'Decrement'){
        return{
            counter: state.counter - 1
        }
    }
    if(action.type === 'Add'){
        return{
            counter: state.counter + action.value
        }
    }
    if(action.type === 'Subtract'){
        return{
            counter:state.counter - action.value
        }
    }
    
    return state;

}

export default reducer;