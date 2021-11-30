import LoginForm from '../../Components/LoginForm'
import { useSelector } from "react-redux";
import { getIsRefreshing } from '../../redux/Users/users-selectors'
const LoginView = () => {
    const isReloading = useSelector(getIsRefreshing)
    console.log(isReloading);
    return (
        !isReloading &&
        <>
            <LoginForm />
        </>
    )
}
export default LoginView