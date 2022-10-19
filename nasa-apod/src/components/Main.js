import '../style.css';

function Main(props) {

    return (
        <main className="imgContainer">
            <div className='imgWrapper'>
                <img src={props.img} />
            </div>
        </main>
    )
}

export default Main;