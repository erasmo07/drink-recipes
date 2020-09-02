import React from 'react';
import Recipe from './Recipe';
import { ReceipeContext } from '../context/ReceipeContext';

const RecipeList = () => {

    const { receipes } = React.useContext(ReceipeContext);

    return (
        <div className="container mt-3">
            <div className="row">
                {receipes.map(receipe => (
                    <Recipe key={receipe.idDrink} receipe={receipe} />
                ))}
            </div>
        </div>
    )
}

export default RecipeList
