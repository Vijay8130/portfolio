import { Link } from "react-router-dom"

export default function About() {
    return (
      
    <div className="about">
      <div className="about-content">
      <h1 className="about-name">HEY, MY NAME IS VIJAY VERMA</h1>
      <p className="about-paragraph"> I am a passionate frontend developer based in Agra, India.<br />My specialities are React JS and Tailwind CSS, and I love building apps that are delightful to use. </p>
       <Link to="/projects">
        <button className="about-btn">SEE MY PROJECT</button>
       </Link>
    </div>
    </div>

    
    )
}