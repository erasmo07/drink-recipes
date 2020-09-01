import React from "react";
import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import RecipeList from "./components/RecipeList";
import FilterProvider from "./context/FilterContext";

function App() {
  return (
    <div>
      <FilterProvider>
        <Header />
        <Filters />
        <RecipeList />
      </FilterProvider>
    </div>
  );
}

export default App;
