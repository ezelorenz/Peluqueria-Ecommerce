import {API_URL} from '../utils/consants';

export async function getCategoriesApi(){

    try {
        const response = await fetch(`${API_URL}/api/categories`);
        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

