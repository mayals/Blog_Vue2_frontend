// "vue": "^2.6.14",
import Vue from 'vue';

import App from './App.vue';

// the final router that collected from all paths in file router.js
import router from './router.js';


//  "bootstrap": "^5.1.3",
//  https://getbootstrap.com/docs/5.0/getting-started/webpack/#importing-compiled-css
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



Vue.config.productionTip = false;


new Vue({
        router,       //  router that collected inside router.js from all paths 
        render: (h) => h(App),
        }).$mount("#app");



