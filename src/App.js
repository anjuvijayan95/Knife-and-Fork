// import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ViewRestaurant from "./components/ViewRestaurant";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/view-restaurant/:id' element={<ViewRestaurant/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
