import { combineReducers } from "redux";
import MockDriveListSlice from "./MockDriveListReducer";
import MockDriveDetailSlice from "./MockDriveDetailReducer";
import MockDriveEnrollmentSlice from './MockDriveEnrollmentReducer';
import MockDriveOnlineTestSlice from "./MockDriveOnlineTestReducer";
import MockDriveOnlineTestProgressSlice from "./MockDriveOnlineTestProgressReducer";

const MockReducer = combineReducers({
    mockList: MockDriveListSlice,
    mockDetail: MockDriveDetailSlice,
    mockEnrollment: MockDriveEnrollmentSlice,
    mockOnlineTest: MockDriveOnlineTestSlice,
    mockSaveProgress: MockDriveOnlineTestProgressSlice
})

export default MockReducer;