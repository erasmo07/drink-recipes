import React, {useState} from "react";
import RecipeDetail from "./RecipeDetail";

const Recipe = () => {

  const [openDetail, setOpenDetail] = useState(false);

  return (
    <div className='col-3 mb-3'>
      <div className="card">
        <img className="card-img-top" src="https://cdn.pixabay.com/photo/2016/06/29/17/14/water-1487304_960_720.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
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
      />
    </div>
  );
};

export default Recipe;
