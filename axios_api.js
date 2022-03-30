// "vue-axios": "^3.4.1",
//https://www.npmjs.com/package/vue-axios

import axios from "axios";

const getAPI = axios.create({
                            baseURL: "http://127.0.0.1:8000/",
                            timeout: 1000,
});



export { getAPI };
