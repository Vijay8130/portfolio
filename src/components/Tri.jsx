export default function Tri(props) {
    return (
        <div>
            {props.photo &&
            <div>
                <img 
                className="tri"
                src={`images/${props.photo}`}
                alt="error" />
            </div>
}
        </div>
    )}
