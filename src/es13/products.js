// desde aqui se va hacer el llamado a la Api
import fetch from "node-fetch"; // 85.4k (gzipped: 23.5k) // instale node-fetch en ubuntu

const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();

export { products };