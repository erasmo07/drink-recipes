import React from "react";
const Filters = () => {

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
                <select className='form-control' name="category">
                    <option value="">-- Select type --</option>
                </select>
            </div>
            <div className="col-3">
                <select className='form-control' name="category">
                    <option value="">-- Select ingredients --</option>
                </select>
            </div>
            <div className="col-3">
                <select className='form-control' name="category">
                    <option value="">-- Select categories --</option>
                </select>
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
