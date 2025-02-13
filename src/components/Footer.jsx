export default function Footer() {
    return (
        <footer>
            <div className="container">
                <nav className="footer-nav">
                    <div className="footer-col">
                        <div>
                            <h4>DC COMICS</h4>
                            <ul>
                                <li><a href="#">Characters</a></li>
                                <li><a href="#">Comics</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Games</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>SHOP</h4>
                            <ul>
                                <li><a href="#">Shop DC</a></li>
                                <li><a href="#">Shop DC Collectibles</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div>
                            <h4>DC</h4>
                            <ul>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy policy(New)</a></li>
                                <li><a href="#">Ad Choices</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Subscriptions</a></li>
                                <li><a href="#">Talent Workshops</a></li>
                                <li><a href="#">CPSC Certificates</a></li>
                                <li><a href="#">Ratings</a></li>
                                <li><a href="#">Shop Help</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div>
                            <h4>SITES</h4>
                            <ul>
                                <li><a href="#">DC</a></li>
                                <li><a href="#">MAD Magazine</a></li>
                                <li><a href="#">DC Kids</a></li>
                                <li><a href="#">DC Universe</a></li>
                                <li><a href="#">DC Power Visa</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="big-logo-placeholder">
                        <img className="big-logo" src="/img/dc-logo-bg.png" alt="Dc-Logo" />
                    </div>
                </nav>
            </div>
            <div className="social-bar">
                <div className="container sb-container">
                    <button>SIGN UP NOW!</button>
                    <span>
                        <h3 className="follow">FOLLOW US</h3>
                        <img className="social-icon" src="/img/footer-facebook.png" alt="fb-icon"></img>
                        <img className="social-icon" src="/img/footer-twitter.png" alt="twitter-icon"></img>
                        <img className="social-icon" src="/img/footer-youtube.png" alt="yt-icon"></img>
                        <img className="social-icon" src="/img/footer-pinterest.png" alt="pinterest-icon"></img>
                        <img className="social-icon" src="/img/footer-periscope.png" alt="periscope-icon"></img>
                    </span>
                </div>
            </div>
        </footer>
    );
}