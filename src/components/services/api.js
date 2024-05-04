import axios from "axios";
const apiKey = "Py_iDo0pAQqvEYoMBPZrJ7mc9_8W17Y3JqrImjifwlY";
export const getImagesByQuery = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${apiKey}&page=${page}&query=${query}&per_page=20`
  );
  return data;
};