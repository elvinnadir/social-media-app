import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Your Media</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit pariatur corrupti id obcaecati,
                        consequuntur ipsum at soluta labore praesentium.
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                        <button>login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
