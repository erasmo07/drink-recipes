import React from 'react';
import Axios from 'axios';
import {urls} from '../services/apiUrls';

const FilterContext = React.createContext();

const FilterProvider = props => {
    const [categories, setCategories] = React.useState([]);
    const [ingredients, setIngredients] = React.useState([]);
    const [types, setTypes] = React.useState([]);

    React.useEffect(() => {
        const loadFilter = async (url, state, key, setter) => {
            const response = await Axios.get(url);
            const values = response.data.drinks.map(item => ({
                value: item[key], label: item[key]
            }));
            setter(values);
        }

        loadFilter(urls.categories, 'categories', 'strCategory', setCategories);
        loadFilter(urls.ingredient, 'ingredients', 'strIngredient1', setIngredients);
        loadFilter(urls.types, 'types', 'strAlcoholic', setTypes);
    }, []);

    return (
        <FilterContext.Provider
            value={{ categories, ingredients, types }} 
        >
            {props.children}
        </FilterContext.Provider>
    )
}


export default FilterProvider;

export { FilterContext as CategoryContext }