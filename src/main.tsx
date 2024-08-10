import { createRoot } from "react-dom/client";

import "./index.css";
import Router from "./route/Router.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <Router />
  </Provider>
  // </StrictMode>
);
