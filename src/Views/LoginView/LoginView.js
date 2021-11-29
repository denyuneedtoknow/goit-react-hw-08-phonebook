import LoginForm from '../../Components/LoginForm'
import { getUserName, isAuthorized } from '../../redux/Users/users-selectors'
const LoginView = () => {
    return (
        <><h1>Please Log In</h1>
            <LoginForm />
        </>
    )
}
export default LoginView