// Creo un nuovo array di link
// const dcComics = [
//   {
//     id: 1,
//     title: "Batman: Year One",
//     writer: "Frank Miller",
//     artist: "David Mazzucchelli",
//     year: 1987,
//     description: "La storia definitiva delle origini di Batman, che esplora il suo primo anno come vigilante a Gotham City.",
//     tags: ["Batman", "Origini", "Classico", "Graphic Novel"]
//   },
//   {
//     id: 2,
//     title: "Superman: Red Son",
//     writer: "Mark Millar",
//     artist: "Dave Johnson",
//     year: 2003,
//     description: "Un'iconica storia alternativa in cui Superman atterra in Unione Sovietica invece che in Kansas.",
//     tags: ["Superman", "Elseworlds", "Storia alternativa"]
//   },
//   {
//     id: 3,
//     title: "Watchmen",
//     writer: "Alan Moore",
//     artist: "Dave Gibbons",
//     year: 1986,
//     description: "Un capolavoro del fumetto che ridefinisce il concetto di supereroe in un mondo realistico e politico.",
//     tags: ["Supereroi", "Classico", "Politico", "Graphic Novel"]
//   },
//   {
//     id: 4,
//     title: "The Killing Joke",
//     writer: "Alan Moore",
//     artist: "Brian Bolland",
//     year: 1988,
//     description: "Una delle storie più famose di Batman e Joker, che esplora la follia e il rapporto tra i due personaggi.",
//     tags: ["Batman", "Joker", "Graphic Novel", "Psicologico"]
//   },
//   {
//     id: 5,
//     title: "Flashpoint",
//     writer: "Geoff Johns",
//     artist: "Andy Kubert",
//     year: 2011,
//     description: "Barry Allen viaggia nel tempo e altera la realtà, dando vita a una versione alternativa dell'universo DC.",
//     tags: ["Flash", "Viaggi nel tempo", "Universo alternativo"]
//   },
//   {
//     id: 6,
//     title: "Crisis on Infinite Earths",
//     writer: "Marv Wolfman",
//     artist: "George Pérez",
//     year: 1985,
//     description: "Una saga epica che ha riscritto l'intero universo DC, eliminando i mondi paralleli e ridefinendo i personaggi.",
//     tags: ["Multiverso", "Evento DC", "Classico"]
//   },
//   {
//     id: 7,
//     title: "Green Lantern: Rebirth",
//     writer: "Geoff Johns",
//     artist: "Ethan Van Sciver",
//     year: 2004,
//     description: "Il ritorno di Hal Jordan nei panni di Lanterna Verde dopo anni di assenza, con una nuova mitologia per i Guardiani dell'Universo.",
//     tags: ["Green Lantern", "Rinascita", "Mitologia DC"]
//   },
//   {
//     id: 8,
//     title: "Wonder Woman: The Hiketeia",
//     writer: "Greg Rucka",
//     artist: "J.G. Jones",
//     year: 2002,
//     description: "Una storia intensa in cui Wonder Woman deve proteggere una giovane donna, mettendola in conflitto con Batman.",
//     tags: ["Wonder Woman", "Batman", "Mitologia", "Drammatico"]
//   }
// ];

// Header.jsx
export default function Header(props) {
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
                        <li><a href="#">CHARACTERS</a></li>
                        <li><a href="#" className="active">COMICS</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">GAMES</a></li>
                        <li><a href="#">COLLECTIBLES</a></li>
                        <li><a href="#">VIDEOS</a></li>
                        <li><a href="#">FANS</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">SHOP</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

{/* <div>
        {dcComics.map((comic) => (
          <div key={comic.id}>
            <h2>{comic.title}</h2>
            <p>{comic.description}</p> />
          </div>
        ))}
      </div> */}