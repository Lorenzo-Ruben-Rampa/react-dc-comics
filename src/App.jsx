import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import './App.css'

function App() {
  const dataSlogan = "Verità, giustizia e un domani migliore.";
  return (
    <>
      <Header slogan={dataSlogan} />
      <Main />
      <Footer />
    </>
  )
}

export default App



