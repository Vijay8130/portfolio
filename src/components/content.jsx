export default function Content(props) {
    return (
        <div className="main-container">
           <div className="projects">
                    <div className="project-image-container">
                    <img 
                     className="project-img" 
                     src={`images/${props.coverImg}`} // don't use ./ if we are calling images from public directory
                     alt="" 
                    />
                </div>
                <div className="description">
                    <p className="project-description">{props.description}</p>
                    <button className="buttonelement">{props.link}</button>
                    <button className="buttonelement1">View Code</button>
                    
                </div>
            </div>
        </div>

    )
} 