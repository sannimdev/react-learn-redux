import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import "./exercise";
import { Provider } from "react-redux";
import { createStore } from "redux";
//index.js로 rootReducer를 내보내주었으므로 index.js를 참조할 것이다.
import rootReducer from "./modules";

const store = createStore(rootReducer);
console.log("리덕스 스토어가 생성됐는지 확인하기", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
