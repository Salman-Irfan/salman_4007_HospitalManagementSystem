import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Doctors from "./pages/Doctors";
import ContactUs from "./pages/ContactUs";
import MakeAnAppointment from "./pages/MakeAnAppointment";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/appointment" element={<MakeAnAppointment/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
