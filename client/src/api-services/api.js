import axios from "axios";

const api = config => ({
    exec: ({method, data, url}) => {
        return axios({
            method,
            data,
            url: `${config.baseUrl}/${url}`,
        })
    }
})

export default api;