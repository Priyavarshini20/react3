import instance from './instance';

const jobServices = {
    getRecipes: async () => {
        return await instance.get('/Recipes');
    }
}

export default recipesServices;