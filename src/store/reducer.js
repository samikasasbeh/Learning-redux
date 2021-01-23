
const initialState = {
    counter:0
};

const reducer =(state = initialState, action) =>{
    switch (action.type) {
        case 'Increment':
            return{
                counter: state.counter + 1
            }
        case 'Decrement':
            return{
                counter: state.counter - 1
            } 
        case 'Add':
            return{
                counter: state.counter + action.value
            }
        case 'Subtract':
            return{
                counter: state.counter - action.value
            }
    }
    
    return state;

}

export default reducer;