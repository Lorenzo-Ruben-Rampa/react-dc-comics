import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import './App.css'

function App() {
  const dataSlogan = "Verità, giustizia e un domani migliore.";

  const links = [
    { name: "CHARACTERS", url: "#" },
    { name: "COMICS", url: "#", active: true },
    { name: "MOVIES", url: "#" },
    { name: "TV", url: "#" },
    { name: "GAMES", url: "#" },
    { name: "COLLECTIBLES", url: "#" },
    { name: "VIDEOS", url: "#" },
    { name: "FANS", url: "#" },
    { name: "NEWS", url: "#" },
    { name: "SHOP", url: "#" }
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



