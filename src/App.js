import React from "react";
import "./App.css";
import Header from "./components/header/header";
import RequestPage from "./components/request-page/RequestPage";
import data from "./data/request.json";

function App() {
  return (
    <div className="App spacing">
      <header>
        <Header />
      </header>
      <section>
        <RequestPage data={data} />
      </section>
    </div>
  );
}

export default App;
