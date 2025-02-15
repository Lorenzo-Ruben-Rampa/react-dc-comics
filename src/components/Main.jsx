import Banner from "./Banner.jsx";
import Listato from "./products/Listato.jsx";

export default function Main() {
    return (
        <main>
            <div class="teen-titans"></div>
            <div class="array-container">
                <div className="container">
                    <Listato />
                    <button class="loading">LOAD MORE</button>
                </div>
            </div>
            <Banner />
        </main>
    );
}