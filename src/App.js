import React from "react";
import "./App.css";
import Header from "./components/Header";
import Filters from "./components/Filters";
import RecipeList from "./components/RecipeList";
import FilterProvider from "./context/FilterContext";
import ReceipeProvider from "./context/ReceipeContext";

function App() {
  return (
    <div>
      <FilterProvider>
        <ReceipeProvider>
          <Header />
          <Filters />
          <RecipeList />
        </ReceipeProvider>
      </FilterProvider>
    </div>
  );
}

export default App;
