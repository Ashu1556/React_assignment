import "./App.css";
import Fotter from "./Component/Fotter";
import Fottersection from "./Component/Fottersection";
import Header from "./Component/Header";
import Header1 from "./Component/Header1";
import Middlecomponent from "./Component/Middlecomponent";

function App() {
  return (
    <div className="App">
      <Header />
      <Header1 />
      <Middlecomponent />

      <Fotter />
      <Fottersection />
    </div>
  );
}

export default App;
