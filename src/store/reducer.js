
const initialState = {
    counter:0,
    results: []
};

const reducer =(state = initialState, action) =>{
    switch (action.type) {
        case 'Increment':
            return{
                ...state,
                counter: state.counter + 1
            }
        case 'Decrement':
            return{
                ...state,
                counter: state.counter - 1
            } 
        case 'Add':
            return{
                ...state,
                counter: state.counter + action.value
            }
        case 'Subtract':
            return{
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return{
                ...state,
                results:state.results.concat({id: new Date() ,value: state.counter})
            }   
        case 'DELETE_RESULT':
            const updatedArray = state.results.filter(result=> result.id !== action.resultElID);
            return{
                ...state,
                results:updatedArray
            }    
    }
    
    return state;

}

export default reducer;