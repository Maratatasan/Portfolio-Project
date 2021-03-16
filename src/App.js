import "./App.css";
import Project from "./Project";
//two dotts go one folder back :)
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div>I am from project</div>
      <Project />
      <Project />
    </div>
  );
}

export default App;
