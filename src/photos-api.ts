import axios from "axios";
import { PhotoData } from "./types";




export async function fetchPhotosByInput (inputSearch: string, page: number):Promise<PhotoData>{
   const ACCESS_KEY = 'Lo9uorFXpgT_Y7XkOmyvCmdEbDFs7mI4M-i24Hz4fks';
  const url:string = `https://api.unsplash.com/search/photos?query=${inputSearch}&client_id=${ACCESS_KEY}`;
  const response = await axios.get<PhotoData>(url, {
    params: {
      per_page: 15,
      page: page
    },
  });
  const photos:PhotoData = response.data;
  return photos;
}