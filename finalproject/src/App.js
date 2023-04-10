import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CurrencyConverter from "./CurrencyConverter";
import Form from "./Form.js";
import DisplayCity from "./DisplayCity.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";
import Weather from "./WeatherAPI";

export default function App() {
  return (
    <div className="App">
      <h1>Trip Planner</h1>
      <CurrencyConverter />
      <br />
      <DisplayCity />
      <br />
      <Form />
      <br />
      <Weather />
    </div>
  );
}
