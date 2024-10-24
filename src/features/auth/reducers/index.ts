import { combineReducers } from "redux";
import signupSlice from "./signupSlice";
import signinSlice from "./signinSlice";

const authReducer = combineReducers({
    signup: signupSlice,
    signin : signinSlice,
})

export default authReducer;