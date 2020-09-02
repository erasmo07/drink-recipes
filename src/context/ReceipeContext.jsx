import React, { useState } from 'react';
import Axios from 'axios';
import { urls } from '../services/apiUrls';

export const ReceipeContext = React.createContext();

const ReceipeProvider = props => {
    const [receipes, setReceipes] = React.useState([]);
    const [receipeFilter, setReceipeFilter] = useState({});

    React.useEffect(() => {
        if (Object.keys(receipeFilter).length === 0) return;

        const searchReceipe = async () => {
            const {category, ingredient, type} = receipeFilter;

            const url = urls.search(ingredient, category, type);
            const response = await Axios.get(url);

            setReceipes(response.data.drinks);
        }

        searchReceipe();

    }, [receipeFilter]);

    return (
        <ReceipeContext.Provider
            value={{ receipes, setReceipeFilter }} 
        >
            {props.children}
        </ReceipeContext.Provider>
    )
}

export default ReceipeProvider

