import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SearchBar from './components/SearchBar';
// import PropertyCard from './components/PropertyCard/PropertyCard';
// import ContactForm from './components/ContactForm';
// import Header from './components/Header';
// import About from './components/About';
// import Crime from './components/Crime';
// import Footer from './components/Footer';
import Home from './pages/Home';
import ContactForm from './components/ContactForm';

function App() {
  // const [propertyData, setPropertyData] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-form" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
