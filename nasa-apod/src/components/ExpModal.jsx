import "../style.css";

function ExpModal(props) {
    return (
        <div className="transparentBg">
        <div className="explanation">
            <p>{props.explanation}</p>
            <button onClick={() => {props.closeModal(false)}}> Close</button>
        </div>
        </div>
    );
}

export default ExpModal;
