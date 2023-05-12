
import "./App.css";
import Appbar from "./components/Appbar/Appbar";
import { Routes, Route } from "react-router-dom";
import RecipeBoard from "./scenes/RecipeBoard/RecipeBoard";
import RecipeDetail from "./scenes/RecipeDetails/RecipeDetail";
import About from "./components/About/About";
import Contact from "./components/Contact Us/Contact";


function App() {
  return (
    <div className="app">
      <Appbar />
      <main className="content">
        <Routes>
          <Route exact path="/" element={<RecipeBoard />} />
          <Route exact path="/singlerecipe/:id" element={<RecipeDetail />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
