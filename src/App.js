import React from "react";

import { Provider } from "react-redux";

import { store } from "./store";

import Posts from "./components/Posts";
import Form from "./components/Form";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
