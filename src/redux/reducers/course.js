const initialState = {
    course: []
}


const CourseReducers = (state = initialState,action) => {
    switch(action.type) {
        case 'SET-COURSE': {
            const newstate = action.payload;
            return {
                ...state,
                course: newstate,
            };
        }
        default:
            return state;
    }
}
export default CourseReducers;