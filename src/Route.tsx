import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Layout1 from './layouts/Layout1';
import Signup from './features/auth/pages/Signup';
import Signin from './features/auth/pages/Signin';
import ForgetPassword from './features/auth/pages/Forget';
import GoogleAuthCallback from './features/auth/pages/GoogleAuthCallback';
import MockDriveList from './features/mock/pages/MockDriveList';
import MockDriveCateoryList from './features/mock/pages/MockDriveCategoryList';
import MockDriveDetail from './features/mock/pages/MockDriveDetail';
import MockDriveOnlineTest from './features/mock/pages/MockDriveOnlineTest';
import MockDriveCodingTest from './features/mock/pages/MockDriveCodingTest';




const RouteConfig = (): any => {
    const isAuthenticated = localStorage.getItem('codelab') ? !!JSON.parse(localStorage.getItem('codelab')!).token : false;

    return (
        <Routes>
            <Route path='' element={<Layout1 />}>
                {/* MOCK */}
                <Route path='/mock-drive' element={<Outlet />}>
                    <Route index element={<MockDriveList />} />
                    <Route path='category/:categoryName/list' element={<MockDriveCateoryList />} />
                    <Route path=':mockId/detail' element={<MockDriveDetail />} />
                    <Route path=':mockId/online/:quizId/attempt/:attemptNumber/start' element={<MockDriveOnlineTest />} />
                    <Route path=':mockId/coding/:codeId/attempt/:attemptNumber/start' element={<MockDriveCodingTest />} />
                </Route>
            </Route>

            {/* Auth */}
            <Route path='/auth/signup' element={isAuthenticated ? <Navigate to='/' /> : <Signup />} />
            <Route path='/auth/forget-password' element={isAuthenticated ? <Navigate to='/' /> : <ForgetPassword />} />
            <Route path='/auth/signin' element={isAuthenticated ? <Navigate to='/' /> : <Signin />} />
            <Route path='/auth/callback' element={isAuthenticated ? <Navigate to='/' /> : <GoogleAuthCallback />} />
        </Routes >
    );
};

export default RouteConfig;
