import "./style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Explanation from "./components/Explanation";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState([]);

    useEffect(function () {
        fetch(
            `https://api.nasa.gov/planetary/apod?api_key=GLktdZldrqi7InFzth1TrqUsPxxQwhrBx4K5qA0d`
        )
            .then((res) => res.json())
            .then((data) => console.log(data));
    });

    return (
        <div>
            <Header  title={data.title} />
            <Main img={data.url} />
            <Explanation explanation={data.explanation} />
        </div>
    );
}

export default App;
