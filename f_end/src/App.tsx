import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./Components/header/Header";
import { Footer } from "./Components/footer/Footer";
import { Main } from "./Components/main/Main";
import { About } from "./Components/about/About";
import { Contacts } from "./Components/contacts/Contacts";
import { Menu } from "./Components/menu/Menu";
import { Provider } from "react-redux";
import store from "./Redux/reduxStore";
import { Checkout } from "./Components/cart/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/home" render={() => <Main />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/contacts" render={() => <Contacts />} />
          <Route path="/menu" render={() => <Menu />} />
          <Route path="/checkout" render={() => <Checkout />} />
          <Redirect from="/" to="/home" />
        </Switch>

        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
