import React from "react";
import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div>
        <Header />
        <Filters />
        <RecipeList />
    </div>
  );
}

export default App;
