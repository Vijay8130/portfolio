import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="logo-container">
                        <h1>Vijay logo</h1>
                    </div>
                    <div className="menu-contianer">
                       <ul className="menu-list">
                         <Link to="/">
                            <li className="menu-list-items">Home</li>
                        </Link>
                        <Link to="/about">
                            <li className="menu-list-items">About</li>
                        </Link>
                        <Link to="/projects">
                             <li className="menu-list-items">Project</li>
                        </Link>
                        <Link to="/cert">
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
                        <div className="toggle">
                            <i class="fa-solid fa-moon toggle-icon"></i>
                            <i class="fa-solid fa-sun toggle-icon"></i>
                            <div className="toggle-ball"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}