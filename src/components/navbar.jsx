import { Link } from "react-router-dom"


export default function Navbar(props) {
    return (
        
           <nav
                       className={props.darkMode ? "light": ""}
                 >
            <div 
            className="navbar"
            >
                <div className="navbar-container">
                    <div className="logo-container">
                        <Link className="logodis" to="/">
                            <img className="profile-img" src="images/pic.jpg" alt="error" />
                            <h1>Vijay Verma</h1>
                        </Link>
                    </div>
                    <div className="menu-contianer">
                       <ul className="menu-list">
                         <Link to="/">
                            <li className="menu-list-items">Home</li>
                        </Link>
                        <Link to="/projects">
                             <li className="menu-list-items">Project</li>
                        </Link>
                        <Link to="/certificate">
                            <li className="menu-list-items">Certification</li>
                        </Link>
                        <Link to="/skills">
                            <li className="menu-list-items">Skills</li>
                        </Link>
                        <Link to="/contact">
                            <li className="menu-list-items">Contact</li>
                        </Link>
                       </ul>
                    </div>
                    <div className="profile-container">
                        <div className="toggle"
                        onClick={props.toggleDarkMode}>
                            <i class="fa-solid fa-moon toggle-icon"></i>
                            <i class="fa-solid fa-sun toggle-icon"></i>
                            <div className="toggle-ball"></div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            </nav>
        
    )
}