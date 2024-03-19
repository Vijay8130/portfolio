import { Link } from "react-router-dom"

export default function Footer() {
    return (
        
        <div className="footer">
            <div className="footer-contact">
               <Link to="/contact">
                <button className="contact-btn"> Contact me</button>
               </Link>
            
                
            </div>
            <div className="footer-icons">
                <a href="https://github.com/Vijay8130" target="_blank">
                    <i class="fa-brands fa-github fa-2xl icons"></i>
                </a>
                <a href="mailto:vjverma67@protonmail.com" target="_blank">
                    <i class="fa-solid fa-envelope fa-2xl icons"></i>
                 </a>
                 <a href="https://www.linkedin.com/in/vijay-verma-84a84562/" target="_blank">
                    <i class="fa-brands fa-linkedin fa-2xl icons"></i>
                 </a>
                <a href="https://twitter.com/Vijay81307" target="_blank">
                    <i class="fa-brands fa-square-x-twitter fa-2xl icons"></i>
                </a>
                <a href="https://www.instagram.com/vijay67chaudhary/" target="_blank">
                    <i class="fa-brands fa-instagram fa-2xl icons"></i>
                </a>
            </div>

        </div>
        

    
    )
}