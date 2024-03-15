
export default function Certification(props) {
    return (
        <div className="certificate">
            <div className="certificate-img">
                <img  
                    className="cert-png"
                    src={`/images/${props.photo}`} // don't use ./ if we are calling images from public directory
                    alt="Error in Uploading Image..." />
            </div>
        </div>
    )
}