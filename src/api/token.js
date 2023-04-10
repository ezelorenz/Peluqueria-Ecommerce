import { TOKEN } from "../utils/consants";

export function setTokenApi(token) {
  localStorage.setItem(TOKEN, token);
}

export function getTokenApi() {
  return localStorage.getItem(TOKEN);
}

export function deleteTokenApi() {
  return localStorage.removeItem(TOKEN);
}