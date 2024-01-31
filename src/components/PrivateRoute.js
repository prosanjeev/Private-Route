import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {

    const [loggedIn] = useState(false);

    if (loggedIn) {
        return <Outlet />
    } else {
        return <Navigate to={'/login'} />;
    }

}

export default PrivateRoute