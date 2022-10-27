import "../style.css";

function DateComponent(props) {

    return (
    <main className="dateBox">
        
        <input type="date" onChange={props.onChangeHandler} />
        <button type="button" onClick={() => {props.openText(true)}}>Show info</button>
    </main> 
    )
}

export default DateComponent;
