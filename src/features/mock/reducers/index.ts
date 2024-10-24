import { combineReducers } from "redux";
import mockDriveListSlice from "./mockDriveListSlice";
import mockDriveDetailSlice from "./mockDriveDetailSlice";
import mockDriveEnrollmentSlice from "./mockDriveEnrollmentSlice";
import mockDriveEnrollSlice from "./mockDriveEnrollSlice";
import mockDriveOnlineTestStartSlice from "./mockDriveOnlineTestStartSlice";

const mockReducer = combineReducers({
    mockDriveList: mockDriveListSlice,
    mockDriveDetail: mockDriveDetailSlice,
    mockDriveEnrollment: mockDriveEnrollmentSlice,
    mockDriveEnroll: mockDriveEnrollSlice,
    mockDriveStart: mockDriveOnlineTestStartSlice,
})

export default mockReducer;