import axios from 'axios';

export const VENDA_API = axios.create({
  // baseURL: 'http://localhost:3335',
  baseURL: 'https://api.venda.com.br',
});
