import {Link} from "react-router-dom"
import './index.css'
const Header=()=>{
    return(
        <div className="header">
            <img src='/images/logo.png' alt="logo" className="logo-img"/>
            <div className='routes-section'>
                <p className="route"><Link to="/" className="route">Home</Link></p>
                <p className="route"><Link to="/find-doctors" className="route">Find Doctors</Link></p>
                <p className="route"><Link to="/about-us" className="route">About Us</Link></p>
            </div>   
            
            <div className="btn-section">
                <button type="button" className="login-btn">Login</button>
                <button type="button" className="sign-up-btn">Sign-up</button>
            </div>

        </div>

    )
}
export default Header