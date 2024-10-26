import { combineReducers } from "redux";
import MockDriveListSlice from "./MockDriveListReducer";
import MockDriveDetailSlice from "./MockDriveDetailReducer";
import MockDriveEnrollmentSlice from './MockDriveEnrollmentReducer';
import MockDriveOnlineTestSlice from "./MockDriveOnlineTestReducer";

const MockReducer = combineReducers({
    mockList: MockDriveListSlice,
    mockDetail: MockDriveDetailSlice,
    mockEnrollment: MockDriveEnrollmentSlice,
    mockOnlineTest: MockDriveOnlineTestSlice,
})

export default MockReducer;