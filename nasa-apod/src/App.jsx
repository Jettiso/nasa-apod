import "./style.css";
import DateComponent from "./components/DateComponent";
import Main from "./components/Main";
import ExpModal from "./components/ExpModal";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState({});

    const dateTime = new Date().toJSON().slice(0, 10);

    const [time, setTime] = useState(dateTime);
    
    useEffect(() => {
        fetch(
            `https://api.nasa.gov/planetary/apod?date=${time}&api_key=GLktdZldrqi7InFzth1TrqUsPxxQwhrBx4K5qA0d`
        )
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [time]);

    const changeHandler = (e) => {
        const value = e.target.value;
        setTime(value)
    }



    const [openModal, setOpenModal] = useState(false)


    console.log(time)
    return (
        <div>
            <div className="siteWrapper">
                <h3>Enter a date between June 16, 1995 and today:</h3>
                <DateComponent value={time} onChangeHandler={changeHandler}  openText={setOpenModal}/>
                <Main img={data.url} title={data.title} date={time} />
                <div className="transparentBg">
                {openModal && <ExpModal explanation={data.explanation} closeModal={setOpenModal}/>}
                </div>
            </div>

            {/* <Explanation explanation={data.explanation} />  */}
        </div>
    );
}

export default App;
