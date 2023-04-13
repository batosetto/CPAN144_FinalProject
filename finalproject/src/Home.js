import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LinkContainer } from "react-router-bootstrap";
import { Route, Routes } from "react-router-dom";
import Form from "./Form";
import CurrencyConverter from "./CurrencyConverter";
import DisplayCity from "./DisplayCity.js";
import Weather from "./WeatherAPI";
import "./Styles.scss";
import CairoDetails from "./CairoDetails";
import NewYorkDetails from "./NewYorkDetails";
import ParisDetails from "./ParisDetails";
import SalvadorDetails from "./SalvadorDetails";
import SydneyDetails from "./SydneyDetails";
import TokyoDetails from "./TokyoDetails";
import farol from "./pictures/farolbarra.jpeg"
import liberty from "./pictures/liberty.png"
import eiffel from "./pictures/eiffel.jpeg"
import asakusa from "./pictures/asakusa.jpeg"
import pyramid from "./pictures/pyramid.jpeg"
import weather from "./pictures/weather.png"
import currencypic from "./pictures/currencypicture.png";



export default function App() {
    return (
        <div>
            <Navigation />          
        </div>
    )

}

function Navigation() {
    return (
        <div >
            <Navbar className="nav">
                <Container >
                    <Nav >
                        <LinkContainer to="/" className="link" >
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/displayCity" className="link">
                            <Nav.Link>Cities</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/form" className="link">
                            <Nav.Link>Form</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/weather" className="link">
                            <Nav.Link>Weather</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/currencyConverter" className="link">
                            <Nav.Link>Currency</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Content />} /> 
                <Route path="/displayCity" element={<DisplayCity />}/>
                <Route path="/form" element={<Form />}/>
                <Route path="/weather" element={<Weather />}/>
                <Route path="/currencyConverter" element={<CurrencyConverter />}/>
                <Route path="/cities/cairo" element={<CairoDetails />} />
                <Route path="/cities/newyork" element={<NewYorkDetails />} />
                <Route path="/cities/paris" element={<ParisDetails />} />
                <Route path="/cities/salvador" element={<SalvadorDetails />} />
                <Route path="/cities/sydney" element={<SydneyDetails />} />
                <Route path="/cities/tokyo" element={<TokyoDetails />} />
                
            </Routes>
        </div>
    )
}

function Content(){
    return(
        <div style={{color: "white"}} >
            <Container fluid>
                <Row>
                    <Col className="container">
                        <ul>
                            <h3>Cities Offered:</h3>
                            <li>
                                <span>Salvador</span>
                                <img className="myImageStyle" src={farol} />
                            </li>
                            <li>
                                <span>New York</span>
                                <img className="myImageStyle" src={liberty} />
                            </li>
                            <li>
                                <span>Cairo</span>
                                <img className="myImageStyle" src={pyramid} />
                            </li>
                            <li>
                                <span>Paris</span>
                                <img className="myImageStyle" src={eiffel} />
                            </li>
                            <li>
                                <span>Tokyo</span>
                                <img className="myImageStyle" src={asakusa} />
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <Row className="container">
                            Here you can find info about the weather
                            <img className="myImageStyle" src={weather}/>
                        </Row>
                        <Row className="container">
                            here you can find currencyblabla 
                            <img className="myImageStyle" src={currencypic}/>
                        </Row>
                    </Col>
                    
                </Row>
            </Container> 
        </div>
    )
}

function Footer(){
    return(
        <div>

        </div>
    )
}

