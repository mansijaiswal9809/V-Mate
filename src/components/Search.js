// import { useEffect } from "react";
import axios from "axios";
const options = {
  params: { maxResults: 50 },
  headers: {
    "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
const Search = async (searchText) => {
  const res = await axios.get(
    `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${searchText}`,
    options
  );
  const data =await res.data.items;
 return data
};

export default Search;
