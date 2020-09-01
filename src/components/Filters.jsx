import React from "react";
import { CategoryContext } from "../context/FilterContext";
import Select from "./Select";

const Filters = () => {
  const { categories, ingredients, types } = React.useContext(CategoryContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-4">
          <fieldset className="text-center">
            <legend>Busca bebidas por Categoría o Ingrediente</legend>
          </fieldset>
        </div>
        <div className="col-12 mt-3">
          <form className='row'>
            <div className="col-3">
                <Select
                  className='form-control'
                  defaultName='-- Select type --'
                  options={types}
                />
            </div>
            <div className="col-3">
                <Select
                  className='form-control'
                  defaultName='-- Select ingredients --'
                  options={ingredients}
                />
            </div>
            <div className="col-3">
                <Select
                  className='form-control'
                  defaultName='-- Select categories --'
                  options={categories}
                />
            </div>
            <div className="col-3">
                <button className='btn btn-block btn-primary'>Buscar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filters;
