const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/' 

export const urls = {
    categories: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
    ingredient: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
    types: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list',
    search: (ingredient, category, type) => (
        `${baseUrl}filter.php?i=${ingredient}&c=${category}&a=${type}`
    ),
    detail: (id) => (
        `${baseUrl}lookup.php?i=${id}`
    )
};