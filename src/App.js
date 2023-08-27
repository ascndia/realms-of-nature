import { useEffect, useState } from "react";
import AppProvider from "./provider/AppProvider";
import Header from "./component/organism/Header";
import Home from "./component/organism/Home";
import About from "./component/organism/About";


function App() {

  return (
    <AppProvider>
      <Header/>
      <Home />
      <About />
    </AppProvider>
  );
}

export default App;
