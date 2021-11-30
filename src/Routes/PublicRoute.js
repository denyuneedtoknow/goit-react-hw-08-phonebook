import { Navigate } from "react-router"
import { useSelector } from "react-redux";
import { isAuthorized } from "../redux/Users/users-selectors"


export function PublicRoute({ component: C, }) {
    const isAuth = useSelector(isAuthorized)
    return ((<>

        {isAuth ? <Navigate to="/" /> : <C />}

        {/* <C /> */}
    </>))
}