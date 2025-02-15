import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
// import './App.css'

function App() {
  const dataSlogan = "Verità, giustizia e un domani migliore.";

  const links = [
    { name: "CHARACTERS", url: "#", id: 1 },
    { name: "COMICS", url: "#", id: 2 },
    { name: "MOVIES", url: "#", id: 3 },
    { name: "TV", url: "#", id: 4 },
    { name: "GAMES", url: "#", id: 5 },
    { name: "COLLECTIBLES", url: "#", id: 6 },
    { name: "VIDEOS", url: "#", id: 7 },
    { name: "FANS", url: "#", id: 8 },
    { name: "NEWS", url: "#", id: 9 },
    { name: "SHOP", url: "#", id: 10 }
  ];

  return (
    <>
      <Header slogan={dataSlogan} linksProp={links} />
      <Main />
      <Footer linksProp={links} />
    </>
  )
}

export default App



