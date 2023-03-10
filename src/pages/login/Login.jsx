import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import "./login.scss"

const Login = () => {
    const { login } = useContext(AuthContext)

    const handleLogin = () => {
        login()
    }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hi,There</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit pariatur corrupti id obcaecati,
                        consequuntur ipsum at soluta labore praesentium,
                        consectetur necessitatibus omnis sit cumque
                        tempore possimus temporibus unde.
                    </p>
                    <span>Dont you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login