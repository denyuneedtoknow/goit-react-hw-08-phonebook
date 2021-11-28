import { Navigate } from "react-router"
export function PublicRoute({ component: C, isAuth }) {
    return ((<><h1>Public</h1>

        {isAuth ? <Navigate to="/" /> : <C />}

        {/* <C /> */}
    </>))
}