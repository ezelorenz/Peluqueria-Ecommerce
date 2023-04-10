import {API_URL} from '../utils/consants';

export async function createOrderApi(data) {
    const dataSend = { data }
    try {
      const url = `${API_URL}/api/orders`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSend),
      };
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  export async function getOrders(idUser) {
    try {
      const response = await fetch(
        `${API_URL}/api/orders?_where[user]=${idUser}&_sort=createdAt:desc`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }