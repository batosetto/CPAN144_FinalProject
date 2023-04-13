import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home"
import Header from "./Header";
import "./Styles.scss";


export default function App() {
  return (
    <div>
        <Header/>
        <Home />
        
    </div>
  );
}
