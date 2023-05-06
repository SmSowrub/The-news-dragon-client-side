import React from 'react';
import NavigateBer from '../../Page/Shared/Navigateber/Navigateber';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigateBer></NavigateBer>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;