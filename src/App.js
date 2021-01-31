import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Content />
    </Router>
  );
}

export default App;
