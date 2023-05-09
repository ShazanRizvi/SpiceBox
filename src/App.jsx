
import "./App.css";
import Appbar from "./components/Appbar/Appbar";
import { Routes, Route } from "react-router-dom";
import RecipeBoard from "./scenes/RecipeBoard/RecipeBoard";
import RecipeDetail from "./scenes/RecipeDetails/RecipeDetail";


function App() {
  return (
    <div className="app">
      <Appbar />
      <main className="content">
        <Routes>
          <Route exact path="/" element={<RecipeBoard />} />
          <Route exact path="/singlerecipe/:id" element={<RecipeDetail/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
