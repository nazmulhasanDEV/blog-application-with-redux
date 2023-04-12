import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// react-toasify
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Container fluid>
          <App />
        </Container>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
