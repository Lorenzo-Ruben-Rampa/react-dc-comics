// Header.jsx
export default function Header(props) {

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