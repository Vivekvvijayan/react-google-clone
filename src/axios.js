import axios from 'axios'


export const instance = axios.create({
    baseURL:'https://www.googleapis.com/customsearch',
    header:{
        "Access-Control-Allow-Origin":"*"
    }

})

export default axios;