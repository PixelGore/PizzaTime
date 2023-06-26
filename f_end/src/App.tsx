import React, { lazy, Suspense } from "react";
import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Header } from "./Components/header/Header";
import { Footer } from "./Components/footer/Footer";
import { Main } from "./Components/main/Main";
import { Menu } from "./Components/menu/Menu";
import store from "./Redux/reduxStore";
import { Checkout } from "./Components/checkout/Checkout";
import { withSuspense } from "./HOC/withSuspense";
import { Auth } from "./Components/auth/Auth";

//React.lazy
const About = lazy(() => import("./Components/about/About"));
const SuspendedAbout = withSuspense(About);
const Contacts = lazy(() => import("./Components/contacts/Contacts"));
const SuspendedContacts = withSuspense(Contacts);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />

        <div className="content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/home" element={<Main />} />
              <Route path="/about" element={<SuspendedAbout />} />
              <Route path="/contacts" element={<SuspendedContacts />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/" element={<Navigate to="/home" />} />
            </Routes>{" "}
          </Suspense>
        </div>

        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
