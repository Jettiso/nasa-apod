import '../style.css';

function Main(props) {

    return (
        <main className="imgContainer">
            <div className='imgWrapper'>
                <img src={props.img} alt="nasa"/>
            </div>
            <h1 className='title'>{props.title}</h1>
            <h1 className='date'> Date: {props.date} </h1>
        </main>
    )
}

export default Main;