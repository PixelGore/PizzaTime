import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./Components/header/Header";
import { Footer } from "./Components/footer/Footer";
import { Main } from "./Components/main/Main";
import { Contacts } from "./Components/contacts/Contacts";
import { Menu } from "./Components/menu/Menu";
import { Provider } from "react-redux";
import store from "./Redux/reduxStore";
import { Checkout } from "./Components/checkout/Checkout";
import { lazy } from "react";
import { withSuspense } from "./HOC/withSuspense";
import { Auth } from "./Components/auth/Auth";

//React.lazy
const About = lazy(() => import('./Components/about/About'));
const SuspendedAbout = withSuspense(About)

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />

        <div className="content">
          <Switch>
            <Route path="/home" render={() => <Main />} />
            <Route path="/about" render={() => <SuspendedAbout />} />
            <Route path="/contacts" render={() => <Contacts />} />
            <Route path="/menu" render={() => <Menu />} />
            <Route path="/checkout" render={() => <Checkout />} />
            <Route path="/login" render={() => <Auth />} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>

        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
