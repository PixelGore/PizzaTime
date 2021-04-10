import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./Components/header/Header";
import { Footer } from "./Components/footer/Footer";
import { Main } from "./Components/main/Main";
import { About } from "./Components/about/About";
import { Contacts } from "./Components/contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/home" render={()=> <Main/>} />
        <Route path="/about" render={()=> <About/>} />
        <Route path="/contacts" render={()=> <Contacts/>} />
        <Redirect from="/" to="/home" />
      </Switch>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
