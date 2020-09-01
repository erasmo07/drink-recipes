import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

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

export default function RecipeDetail({openDetail, setOpenDetail}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      <Modal
        open={openDetail}
        onClose={e => setOpenDetail(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>Nombre</h2>
          <h3 className="mt-4">Instrucciones</h3>
          <p></p>

          <img className="img-fluid my-4" src="https://cdn.pixabay.com/photo/2016/06/29/17/14/water-1487304_960_720.jpg" />

          <h3>Ingredientes y cantidades</h3>
          <ul>
              <li>X - X</li>
          </ul>
        </div>
      </Modal>
    </div>
  );
}
