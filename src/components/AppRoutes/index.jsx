import { useAuth } from '../../context/Authentication'
import { useRoutes, Navigate } from 'react-router-dom'
import VideoCall from '../../pages/VideoCall'
import SignIn from '../../pages/SignIn'
import Home from '../../pages/Home'
import Chat from '../../pages/Chat'
import Call from '../../pages/Call'

const AuthenticatedRoutes = () => {

    const { currentUser} = useAuth();

    return useRoutes([
        { path: '/call', element: currentUser ? <Call /> : <Navigate to="/sign-in" /> },
        { path: '/video-call', element: currentUser ? <VideoCall /> : <Navigate to="/sign-in" /> },
        { path: '/sign-in', element: <SignIn /> },
        { path: '/', element: currentUser ? <Home /> : <Navigate to="/sign-in" /> },
        { path: '/chat', element: currentUser ? <Chat /> : <Navigate to="/sign-in" /> },
    ]);
};

const AppRoutes = () => {
    const { loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return <AuthenticatedRoutes />;
};

export default AppRoutes;