import "./App.scss";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./Components/header/Header";
import { Footer } from "./Components/footer/Footer";
import { Main } from "./Components/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/home" render={()=> <Main/>} />
        <Redirect from="/" to="/home" />
      </Switch>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
