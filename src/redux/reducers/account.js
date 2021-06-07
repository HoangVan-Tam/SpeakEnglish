const initialState = {
    acc: {
        address: "",
        birthday: "",
        departmentId: 0,
        email: "",
        firstName: "",
        lastName: "",
        level: 0,
        phoneNumber: "",
        sex: false,
        studentId: "",
        userId: "",
        token: ""
    },
    testID: '',
}


const LoginReducers = (state = initialState,action) => {
    switch(action.type) {
        case 'SET-ACCOUNT': {
            const newstate = action.payload;
            return {
                ...state,
                acc: newstate,
            };
        }
        case 'SET-TESTID': {
            const newstate = action.payload;
            
            return {
                ...state,
               testID: newstate,
            };
        }
        default:
            return state;
    }
}
export default LoginReducers;