import { useContext } from 'react'
import { AuthContext } from './context/index'
import { BrowserRouter, Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Error from './pages/Error';
import About from './pages/About';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Layout from './layouts/main';

const AppRouter = () => {
    function RequireAuth({ children } : any) {
        const auth = useContext(AuthContext);
        const location = useLocation();
    
        if (!auth.user) {
            return <Navigate to="/login" state={{ from: location }} />;
        }
    
        return children;
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="about" element={
                        <RequireAuth>
                            <About />
                        </RequireAuth>
                    }/>
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
        
    )
}

export default AppRouter;