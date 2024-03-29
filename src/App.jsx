import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import PropertyCard from "./components/PropertyCard/PropertyCard";
import ContactForm from "./components/ContactForm";
import Crime from "../src/components/Crime/Crime";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';



function App() {
	return (
	  <BrowserRouter>
		<Routes>
		  <Route path="/" element={<Home />} />
		  <Route path="/contact-us" element={<Contact />} />
		</Routes>
	  </BrowserRouter>
	);
  }
  
  export default App;
