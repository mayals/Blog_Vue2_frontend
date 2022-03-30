// "vue": "^2.6.14",
import Vue from 'vue'

// "vue-router": "^3.5.1"
import VueRouter from 'vue-router'

// import all views from views folder
import HomeView from './views/HomeView.vue'
import PostsCompo from './components/PostsCompo.vue'
import PostDetailCompo from './components/PostDetailCompo.vue'
import PostCreateCompo from './components/PostCreateCompo.vue'

Vue.use(VueRouter)

const routes = [
                  {
                    path: '/',
                    name: 'HomeView',
                    component:HomeView
                  },
                  {
                    path: '/posts',
                    name: 'PostsCompo',
                    component: PostsCompo
                  },
                  {
                    path: '/posts/:id',
                    name: 'PostDetailCompo',
                    component: PostDetailCompo,
                    props:true
                  },
                  {
                    path: '/postcreate',
                    name: 'PostCreateCompo',
                    component: PostCreateCompo,
                    props:true
                  }
]


// this router will be exported to  main.js file
const router = new VueRouter({
                                mode: 'history',
                                base: process.env.BASE_URL,
                                routes  //  name of all collections of paths above 
})

// exported to  main.js
export default router


