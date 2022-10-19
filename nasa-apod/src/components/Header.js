

function Header() {
    return (
        <div className="siteWrapper">
            <header>
                <h2 className="apod">Astronomy Picture of the Day</h2>
                <h1>A Galaxy Beyond Stars, Gas Dust</h1>
                <h3>2022 October 19</h3>
            </header>
            <main className="imgContainer">
                <img src="./img/testimg.jpg" />
            </main>
            <div className="explanation">
                <p>
                    "Do we dare believe our eyes? When we look at images of
                    space, we often wonder whether they are \"real\", and just
                    as often the best answer varies. In this case, the scene
                    appears much as our eyes would see it, because it was
                    obtained using RGB (Red, Green, Blue) filters like the cone
                    cells in our eyes, except collecting light for 19 hours, not
                    a fraction of a second. The featured image was captured over
                    six nights, using a 24-inch diameter telescope in the Sierra
                    Nevada Mountains, in California, USA. The bright spiral
                    galaxy at the center (NGC 7497) looks like it is being
                    grasped by an eerie tendril of a space ghost, and therein
                    lies the trick. The galaxy is actually 59 million light
                    years away, while the nebulosity is MBM 54, less than one
                    thousand light years away, making it one of the nearest cool
                    clouds of gas and dust -- galactic cirrus -- within our own
                    Milky Way Galaxy. Both are in the constellation of Pegasus,
                    which can be seen high overhead from northern latitudes in
                    the autumn."
                </p>
            </div>
        </div>
    );
}

export default Header;
