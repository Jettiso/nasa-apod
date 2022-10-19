import '../style.css';

function Explanation(props) {

    return(
        <div className="explanation">
                <p>
                    {props.explanation}
                </p>
            </div>
    )
}

export default Explanation