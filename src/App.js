import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStateValue } from "./Stateprovider";

const promise = loadStripe(
  "pk_test_51OPZ4hLLSfWESbGlB7IkQSlhptMNPy8HFtLNTXdMSBdSGY3pTAMKRsKYkvJUeiiPhxAbD42mv2kiJEAHUdkKZgxh00N802o8Jm"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />

          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
