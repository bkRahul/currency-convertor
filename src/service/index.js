import axios from "axios";
const BASE_URL = "https://api.frankfurter.app/";

export const convertCurrency = async (amount, from, to) => {
  const result = await axios
    .get(`${BASE_URL}latest?amount=${amount}&from=${from}&to=${to}`)
    .then(({ data }) => data)
    .catch((err) => console.log(err));
  return result;
};
