import React, {useState} from "react";
import RecipeDetail from "./RecipeDetail";

const Recipe = ({receipe}) => {

  const [openDetail, setOpenDetail] = useState(false);

  return (
    <div className='col-3 mb-3'>
      <div className="card">
        <img className="card-img-top" src={receipe.strDrinkThumb} alt={receipe.strDrink} />
        <div className="card-body">
          <h5 className="card-title">{receipe.strDrink}</h5>
        </div>
        <div className="card-body">
            <button
              className='btn btn-block btn-info'
              onClick={e => setOpenDetail(true)}
            >Ver detalle</button>
        </div>
      </div>
      <RecipeDetail
        openDetail={openDetail}
        setOpenDetail={setOpenDetail}
        receipeID={receipe.idDrink}
      />
    </div>
  );
};

export default Recipe;
