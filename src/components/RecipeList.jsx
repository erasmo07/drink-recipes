import React from 'react'
import Recipe from './Recipe'

const RecipeList = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        </div>
    )
}

export default RecipeList
