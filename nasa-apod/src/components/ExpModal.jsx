import "../style.css";

function ExpModal(props) {
    return (
        <div className="explanation">
            <p>{props.explanation}</p>
            <button onClick={() => {props.closeModal(false)}}> Close</button>
        </div>
    );
}

export default ExpModal;
