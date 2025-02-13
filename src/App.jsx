const dcComics = [
  {
    id: 1,
    title: "Batman: Year One",
    writer: "Frank Miller",
    artist: "David Mazzucchelli",
    year: 1987,
    description: "La storia definitiva delle origini di Batman, che esplora il suo primo anno come vigilante a Gotham City.",
    cover: "/img/batman-year-one.jpg",
    tags: ["Batman", "Origini", "Classico", "Graphic Novel"]
  },
  {
    id: 2,
    title: "Superman: Red Son",
    writer: "Mark Millar",
    artist: "Dave Johnson",
    year: 2003,
    description: "Un'iconica storia alternativa in cui Superman atterra in Unione Sovietica invece che in Kansas.",
    cover: "/img/superman-red-son.jpg",
    tags: ["Superman", "Elseworlds", "Storia alternativa"]
  },
  {
    id: 3,
    title: "Watchmen",
    writer: "Alan Moore",
    artist: "Dave Gibbons",
    year: 1986,
    description: "Un capolavoro del fumetto che ridefinisce il concetto di supereroe in un mondo realistico e politico.",
    cover: "/img/watchmen.jpg",
    tags: ["Supereroi", "Classico", "Politico", "Graphic Novel"]
  },
  {
    id: 4,
    title: "The Killing Joke",
    writer: "Alan Moore",
    artist: "Brian Bolland",
    year: 1988,
    description: "Una delle storie più famose di Batman e Joker, che esplora la follia e il rapporto tra i due personaggi.",
    cover: "/img/killing-joke.jpg",
    tags: ["Batman", "Joker", "Graphic Novel", "Psicologico"]
  },
  {
    id: 5,
    title: "Flashpoint",
    writer: "Geoff Johns",
    artist: "Andy Kubert",
    year: 2011,
    description: "Barry Allen viaggia nel tempo e altera la realtà, dando vita a una versione alternativa dell'universo DC.",
    cover: "/img/flashpoint.jpg",
    tags: ["Flash", "Viaggi nel tempo", "Universo alternativo"]
  },
  {
    id: 6,
    title: "Crisis on Infinite Earths",
    writer: "Marv Wolfman",
    artist: "George Pérez",
    year: 1985,
    description: "Una saga epica che ha riscritto l'intero universo DC, eliminando i mondi paralleli e ridefinendo i personaggi.",
    cover: "/img/crisis-on-infinite-earths.jpg",
    tags: ["Multiverso", "Evento DC", "Classico"]
  },
  {
    id: 7,
    title: "Green Lantern: Rebirth",
    writer: "Geoff Johns",
    artist: "Ethan Van Sciver",
    year: 2004,
    description: "Il ritorno di Hal Jordan nei panni di Lanterna Verde dopo anni di assenza, con una nuova mitologia per i Guardiani dell'Universo.",
    cover: "/img/green-lantern-rebirth.jpg",
    tags: ["Green Lantern", "Rinascita", "Mitologia DC"]
  },
  {
    id: 8,
    title: "Wonder Woman: The Hiketeia",
    writer: "Greg Rucka",
    artist: "J.G. Jones",
    year: 2002,
    description: "Una storia intensa in cui Wonder Woman deve proteggere una giovane donna, mettendola in conflitto con Batman.",
    cover: "/img/wonder-woman-hiketeia.jpg",
    tags: ["Wonder Woman", "Batman", "Mitologia", "Drammatico"]
  }
];

import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Main />
      {/* <div>
        {dcComics.map((comic) => (
          <div key={comic.id}>
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
            <img src={comic.cover} alt={comic.title} />
          </div>
        ))}
      </div> */}
      <Footer />
    </>
  )
}

export default App



