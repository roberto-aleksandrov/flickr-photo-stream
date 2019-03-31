import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';

const flickrApi = config => ({
    exec: ({data, url}) => {
        const queryString = qs.stringify({
            ...data,
            api_key: config.apiKey,
            format: 'json',
        });

        const options = { jsonpCallbackFunction: 'jsonFlickrApi' };

        return fetchJsonp(`${config.baseUrl}/${url}?${queryString}`, options)
            .then(response => response.json())
            .then(response => response.stat === 'ok' 
                    ? Promise.resolve(response)
                    : Promise.reject(response))
    }
})

export default flickrApi;