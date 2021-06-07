import openFormReducers from "./openForm";
import LoginReducers from "./account";
import CourseReducers from "./course";
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    openForm: openFormReducers,
    Login: LoginReducers,
    Course: CourseReducers
});
export default rootReducer;