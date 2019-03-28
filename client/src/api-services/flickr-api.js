import jQuery from 'jquery';

const flickrApi = config => ({
    exec: ({method, data, url}) => {
        return jQuery.ajax({
            method,
            data,
            url: `${config.baseUrl}/${url}`,
            dataType: 'jsonp',
        })
    }
})

export default flickrApi;