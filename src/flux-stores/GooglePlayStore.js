import { EventEmitter } from "events";
import queryString from 'query-string';
import { apiUrl } from '../config';

class GooglePlayStore extends EventEmitter {

    searchResults = [];

    doApplicationSearch = async (term, lang) => {
        const num = 5;
        const query = queryString.stringify({ term, lang, num });
        // https://www.npmjs.com/package/google-play-scraper#search
        const response = await fetch(`${apiUrl}/search?${query}`);
        this.searchResults = await response.json();
        this.emit('change', { type: 'APP_SEARCH_FULFILLED' });
    } 

    fetchTopApps = async () => {
        const num = 100;
        const query = queryString.stringify({ num });
        // https://www.npmjs.com/package/google-play-scraper#search
        const response = await fetch(`${apiUrl}/list?${query}`);
        this.topApps = await response.json();
        this.emit('change', { type: 'FETCH_TOP_APPS_FULFILLED' });
    }
}

export default new GooglePlayStore();
