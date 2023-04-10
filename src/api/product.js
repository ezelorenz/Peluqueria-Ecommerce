import {API_URL} from "../utils/consants";

export async function getProducts(limit = 1000){
    try {
        
        const response = await fetch(`${API_URL}/api/productos?sort=createdAt:desc&pagination[limit]=${limit}&populate=image`);

        // `${API_URL}/api/productos?sort=createdAt:desc&pagination[limit]=${limit}&populate=image,category`
        // `${API_URL}/api/productos?sort=createdAt:desc&pagination[limit]=${limit}`
        // `${API_URL}/api/productos?populate=image&populate=category&sort=createdAt%3Adesc&pagination[limit]=${limit}`

        const result = await response.json();
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getProductsCategory(category) {
  try {
    const response = await fetch(
      `${API_URL}/api/productos?populate=image&fields=name&filters[category][slug][$eq]=${category}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}