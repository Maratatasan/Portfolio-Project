import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="main-box">
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            size: {
              value: 4,
              random: { enable: true, minimumValue: 1 },
            },
            links: {
              enable: false,
            },
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                color: "#f0f1f5",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
