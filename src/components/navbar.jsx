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
                        <li className="menu-list-items">Home</li>
                        <li className="menu-list-items">About</li>
                        <li className="menu-list-items">Project</li>
                        <li className="menu-list-items">Skills</li>
                        <li className="menu-list-items">Contact</li>
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