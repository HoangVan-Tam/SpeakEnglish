const initialState = {
    openDialogTest: false,
}


const openFormReducers = (state = initialState,action) => {
    switch(action.type) {
        case 'SET-SHOW-FORM-TEST': {
            const newstate = action.payload;
            return {
                ...state,
                openDialogTest: newstate,
            };
        }
        default:
            return state;
    }
}
export default openFormReducers;