// Header.jsx
export default function Header(props) {

    // Creo un nuovo array di link
    // const links = [
    //     { name: "CHARACTERS", url: "#" },
    //     { name: "COMICS", url: "#", active: true },
    //     { name: "MOVIES", url: "#" },
    //     { name: "TV", url: "#" },
    //     { name: "GAMES", url: "#" },
    //     { name: "COLLECTIBLES", url: "#" },
    //     { name: "VIDEOS", url: "#" },
    //     { name: "FANS", url: "#" },
    //     { name: "NEWS", url: "#" },
    //     { name: "SHOP", url: "#" }
    // ];

    const links = props.linksProp

    return (
        <header>
            <div className="container hd-container">
                <figure>
                    <img src="/img/dc-logo.png" alt="Logo" />
                </figure>
                <div className="motto">
                    <h4>{props.slogan}</h4>
                </div>
                <nav>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} className={link.active ? "active" : ""}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}