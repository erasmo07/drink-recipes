import React from "react";
import { FilterContext } from "../context/FilterContext";
import { ReceipeContext } from '../context/ReceipeContext';
import Select from "./Select";

const Filters = () => {
  const { categories, ingredients, types } = React.useContext(FilterContext);
  const { setReceipeFilter } = React.useContext(ReceipeContext);

  const [data, setData] = React.useState({});

  const handleSubmit = e => {
    e.preventDefault();
    setReceipeFilter(data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-4">
          <fieldset className="text-center">
            <legend>Busca bebidas por Categoría o Ingrediente</legend>
          </fieldset>
        </div>
        <div className="col-12 mt-3">
          <form className='row' onSubmit={handleSubmit}>
            <div className="col-3">
                <Select
                  className='form-control'
                  defaultName='-- Select type --'
                  options={types}
                  onChange={e => setData({ ...data, type: e.target.value })}
                />
            </div>
            <div className="col-3">
                <Select
                  className='form-control'
                  defaultName='-- Select ingredients --'
                  options={ingredients}
                  onChange={e => setData({ ...data, ingredient: e.target.value })}
                />
            </div>
            <div className="col-3">
                <Select
                  className='form-control'
                  defaultName='-- Select categories --'
                  options={categories}
                  onChange={e => setData({ ...data, category: e.target.value })}
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
