import axios from 'axios';

const api = config => ({
    exec: ({method, data, url}) => {
        const reqConfig = {
            method,
            url: `${config.baseUrl}/${url}`,
        }

        if(method.toLowerCase() === 'get') {
            reqConfig.params = data;
        } else {
            reqConfig.data = data;
        }

        return axios(reqConfig)
    }
})

export default api;