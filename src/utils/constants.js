export const APIKEY = process.env.REACT_APP_GIPHY_API_KEY;
export const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=10&rating=PG-13`;
export const SEARCH_URL =  `https://api.giphy.com/v1/gifs/search?api_key=oaRP5mNiwuMia9sf8ZZjmiy9JTHRNDgy&q=sports&limit=25&offset=0&rating=G&lang=en`;