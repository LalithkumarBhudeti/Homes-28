import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import './App.css';
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
// import value from "./Components/Values/Value";
import Value from "./Components/Values/Value";
import Contact from "./Components/Contact/Contact";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";
// import LoginPage from "./Components/Login/Login";


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />

      {/* <Residencies/>
      <Value />
      <Contact/>
      <GetStarted/> */}

      <section id="residencies">
        <Residencies />
      </section>

      <section id="values">
        <Value />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="get-started">
        <GetStarted />
      </section>

      <Footer />
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
