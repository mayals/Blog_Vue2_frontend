// "vue": "^2.6.14",
import Vue from "vue";

import App from "./App.vue";

// import the final router that collected from all paths in file router.js
import router from "./router";

// import getAPI that established inside   axios_api.js 
import { getAPI } from "./axios_api";


import store from "./store";







// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import axios from 'axios'


//  "bootstrap": "^5.1.3",
//  https://getbootstrap.com/docs/5.0/getting-started/webpack/#importing-compiled-css
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



Vue.config.productionTip = false;






// new Vue({
//         router,       //  router that collected inside   router.js   from all paths 
                
//         getAPI,       //  getAPI that established inside   axios_api.js 
                
//         store,       //  store that established inside  store.js 
        

//         render: (h) => h(App)

//         }).$mount("#app");




new Vue({
        router,
        store,
        getAPI,
        render: (h) => h(App)
      }).$mount("#app");