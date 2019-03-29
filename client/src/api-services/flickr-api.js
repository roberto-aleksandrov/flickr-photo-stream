import jQuery from 'jquery';

const flickrApi = config => ({
    exec: ({method, data, url}) => {
        return jQuery.ajax({
            method,
            data: {
                ...data,
                api_key: config.apiKey,
                format: 'json',
            },
            url: `${config.baseUrl}/${url}`,
            dataType: 'jsonp',
            jsonp: 'jsoncallback'
        })
    }
})

export default flickrApi;