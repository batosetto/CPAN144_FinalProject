import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CairoDetails from "./CairoDetails";
import NewYorkDetails from "./NewYorkDetails";
import ParisDetails from "./ParisDetails";
import SalvadorDetails from "./SalvadorDetails";
import SydneyDetails from "./SydneyDetails";
import TokyoDetails from "./TokyoDetails";

export default function Form() {
  // const [inputs, setInputs] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    const tempErrors = [];
    if (name.trim().length < 1) {
      tempErrors.push("Please enter a valid name");
         e.preventDefault();
    }
    if (email.trim().length < 1) {
      tempErrors.push("Please enter a valid email");
         e.preventDefault();
    }
    if (!selectedCity) {
      tempErrors.push("Please select a city");
         e.preventDefault();
    }
    setErrors(tempErrors);
    e.preventDefault();
    navigate("/cities/" + selectedCity);
    // navigate(`/cities/${selectedCity}`);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/cities/cairo" element={<CairoDetails />} />
        <Route path="/cities/newyork" element={<NewYorkDetails />} />
        <Route path="/cities/paris" element={<ParisDetails />} />
        <Route path="/cities/salvador" element={<SalvadorDetails />} />
        <Route path="/cities/sydney" element={<SydneyDetails />} />
        <Route path="/cities/tokyo" element={<TokyoDetails />} />
      </Routes>
      <h2 style={{ marginTop: "5px" }}>Personal Travel Guide</h2>
      <p style={{ fontStyle: "italic" }}>
        Sign up below to receive a customized travel itinerary!
      </p>
      <form method="POST" onSubmit={submitHandler}>
        <div>
          <label htmlFor="txtName" />
          Name: {""}
          <input
            type="text"
            name="name"
            id="txtName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="txtEmail" />
          Email: {""}
          <input
            type="email"
            name="name"
            id="txtEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <label>
          City: {""}
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Select a city</option>
            <option value="cairo">Cairo</option>
            <option value="newyork">New York</option>
            <option value="paris">Paris</option>
            <option value="salvador">Salvador</option>
            <option value="sydney">Sydney</option>
            <option value="tokyo">Tokyo</option>
          </select>
        </label>
        <br />
        <div style={{ marginTop: "5px" }}>
          {errors.map((x) => (
            <div style={{ color: "red" }}>{x}</div>
          ))}
        </div>
        <button type="submit" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
