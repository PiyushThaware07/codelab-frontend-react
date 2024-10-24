
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout1 from './layouts/Layout1';
import Signup from './features/auth/pages/Signup';
import Signin from './features/auth/pages/Signin';
import ForgetPassword from './features/auth/pages/Forget';
import MockDriveList from './features/mock/pages/MockDriveList';
import MockDriveCategoryList from './features/mock/pages/MockDriveCategoryList';
import MockDriveDetail from './features/mock/pages/MockDriveDetail';
import Layout2 from './layouts/Layout2';
import MockDriveOnlineTestStart from './features/mock/pages/MockDriveOnlineTestStart';
import GoogleAuthCallback from './features/auth/pages/GoogleAuthCallback';
import MockDriveCodingTestStart from './features/mock/pages/MockDriveCodingTestStart';

const RouteConfig = (): any => {
    const isAuthenticated = localStorage.getItem('codelab') ? !!JSON.parse(localStorage.getItem('codelab')!).token : false;
    return (
        <Routes>
            <Route path='' element={<Layout1 />} >

                {/* Mock */}
                <Route path='mock-drive' element={<MockDriveList />} />
                <Route path='mock-drive/category/:categoryName' element={<MockDriveCategoryList />} />
                <Route path='mock-drive/:mockId/details' element={<MockDriveDetail />} />
            </Route>

            <Route path='' element={<Layout2 />}>
                {/* Auth */}
                <Route path='/auth/signup' element={isAuthenticated ? <Navigate to='/' /> : <Signup />} />
                <Route path='/auth/forget-password' element={isAuthenticated ? <Navigate to='/' /> : <ForgetPassword />} />
                <Route path='/auth/signin' element={isAuthenticated ? <Navigate to='/' /> : <Signin />} />
                <Route path='/auth/callback' element={isAuthenticated ? <Navigate to='/' /> : <GoogleAuthCallback />} />

                {/* Mock */}
                <Route path='mock-drive/:mockId/quiz/:quizId/attempt/:attemptNumber/online/start' element={<MockDriveOnlineTestStart />} />
                <Route path='mock-drive/:mockId/coding/start' element={<MockDriveCodingTestStart />} />
            </Route>
        </Routes>
    )
}

export default RouteConfig;