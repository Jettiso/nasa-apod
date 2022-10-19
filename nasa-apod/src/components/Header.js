
import '../style.css';

function Header(props) {
    return (
        <div className="siteWrapper">
            <header>
                <h2 className="apod">Astronomy Picture of the Day</h2>
                <h1>{props.title}</h1>
            </header>
        </div>
    );
}

export default Header;
