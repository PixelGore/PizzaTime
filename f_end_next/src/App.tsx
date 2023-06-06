import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./Components/menu/Menu";
import { Checkout } from "./Components/checkout/Checkout";
import { withSuspense } from "./HOC/withSuspense";
import { Auth } from "./Components/auth/Auth";

//React.lazy
const About = lazy(() => import("./Components/about/About"));
const SuspendedAbout = withSuspense(About);
const Contacts = lazy(() => import("@/app/(pages)/contacts/page"));
const SuspendedContacts = withSuspense(Contacts);

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Auth />} />
          </Routes>{" "}
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
