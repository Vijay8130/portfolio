import { Link } from "react-router-dom"


export default function Certification(props) {
    return (
        <>
        {props.certificate &&
        <div className="certificate">
         <Link to={props.certificateurl} target="_blank">
                <img  
                    className="cert-img"
                    src={`/images/${props.photo}`} // don't use ./ if we are calling images from public directory
                    alt="Error in Uploading Image..." />
            </Link>
        </div>
 } </>
    )
}