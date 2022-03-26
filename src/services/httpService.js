import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2"; //cloud xerver
const api = axios.create({
  // baseURL: "http://localhost:8000/api/v1", //local server
  baseURL: `${baseUrl}`, //cloud xerver
  headers: {
    "Content-type": "application/json",
  },
});

// const baseUrl = "http://localhost:8000/api/v1"; //local server

export { api };
