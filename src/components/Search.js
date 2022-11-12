// import { useEffect } from "react";
import axios from "axios";
const options = {
  params: { maxResults: 50 },
  headers: {
    "X-RapidAPI-Key": "6a88e3c44emsh5a3b9ee9179cd02p1f5306jsn5d9d66edfb05",
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
