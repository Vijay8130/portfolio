import { Link } from "react-router-dom"


export default function Project(props) {
    return (
<div>
{props.description &&
        <div className="main-container">
           <div className="projects">
                    <div className="project-image-container">
                    <Link to={props.projecturl} target="_blank">
                    <img 
                     className="project-img" 
                     src={`images/${props.coverImg}`} // don't use "./" if we are calling images from public directory
                     alt="" 
                    />
                    </Link>
                </div>
                <div className="description">
                        <h1 className="project-heading">{props.projectname}</h1>

                    <p className="project-description">{props.description}</p>
                    <div className="project-btn">

                <Link to={props.projecturl} target="_blank">
                    <button className="buttonelement">{props.link}</button>
                </Link>
                       
                        <Link to={props.githuburl} target="_blank">
                    <button className="buttonelement1">{props.codelink}</button>
                        </Link>
                    </div>
                </div>
                    
            </div>
        </div>
}
 </div>
    )
} 