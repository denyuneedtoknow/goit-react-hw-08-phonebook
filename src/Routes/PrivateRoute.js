import { Navigate } from "react-router";

export function PrivateRoute({ component: C, isAuth }) {
    return (<><h1>Private</h1>

        {isAuth ? <C /> : <Navigate to="/login" />}

        {/* <C /> */}
    </>)
}