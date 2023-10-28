import { LOGO_URL } from "../utils/constants";

//Header
const Header = () =>{
    return (
        <div className="header">
            <div className="main-container header-area">
                <div className="logo-container">
                    <img src={ LOGO_URL } alt="img-logos" width={100} className="logo"/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;