import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Axios from "axios";
import { urls } from "../services/apiUrls";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function RecipeDetail({ openDetail, setOpenDetail, receipeID }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [receipeDetail, setReceipeDetail] = useState({});

  useEffect(() => {
    if (!openDetail) {
      setReceipeDetail({});
      return;
    }

    const searchDetail = async () => {
      const response = await Axios.get(urls.detail(receipeID));
      setReceipeDetail(response.data.drinks[0]);
    };

    searchDetail();
  }, [openDetail]);

  const buildIngredients = () => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (receipeDetail[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {receipeDetail[`strIngredient${i}`]} {' - '} {receipeDetail[`strMeasure${i}`]}
          </li>
        );
      }
    }

    return ingredients;
  };

  return (
    <div>
      <Modal
        open={openDetail}
        onClose={(e) => setOpenDetail(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>{receipeDetail.strDrink}</h2>
          <h3 className="mt-4">Instrucciones</h3>
          <p>{receipeDetail.strInstructions}</p>

          <img
            className="img-fluid my-4"
            src={receipeDetail.strDrinkThumb}
            alt={receipeDetail.strDrink}
          />

          <h3>Ingredientes y cantidades</h3>
          <ul>
            { buildIngredients(receipeDetail) }
          </ul>
        </div>
      </Modal>
    </div>
  );
}
