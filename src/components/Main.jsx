import Banner from "./Banner.jsx";
import Listato from "./products/Listato.jsx";

export default function Main() {
    return (
        <main>
            <div className="teen-titans"></div>
            <div className="array-container">
                <div className="container">
                    <Listato />
                </div>
                <div className="mini-container">
                    <button className="loading">LOAD MORE</button>
                </div>
            </div>

            <Banner />
        </main>
    );
}