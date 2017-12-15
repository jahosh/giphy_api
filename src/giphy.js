import axios from 'axios';
import { TRENDING_URL } from './utils/constants';
/**
 * Fetches 10 trending gifs from gip '/trending' endpoint
 * 
 * @fulfill {array} array of objects of 10 trending gifs
 * @reject {apiError} api returned an error, non status of 200
 */
export function returnTrendingGifs() {
  return new Promise((resolve, reject) => {
    axios.get(TRENDING_URL)
      .then(resp => {
        if (resp.status === 200) {
          resolve(resp.data.data);
        } else {
          reject(resp.statusText);
        }
      })
      .catch(e => console.log(e));
  });
}

