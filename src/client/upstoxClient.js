import axios from "axios";

const upstoxClient = axios.create({
  baseURL: 'https://run.mocky.io/v3'
});

export default upstoxClient;
