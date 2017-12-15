export const APIKEY = process.env.REACT_APP_GIPHY_API_KEY;
export const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=10&rating=PG-13`;