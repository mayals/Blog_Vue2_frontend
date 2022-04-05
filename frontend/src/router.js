// "vue": "^2.6.14",
import Vue from 'vue'

// "vue-router": "^3.5.1"
import VueRouter from 'vue-router'

// import all views from views folder

import HomeView from './views/HomeView.vue'

import LoginCompo from './components/LoginCompo.vue'
import SignupCompo from './components/SignupCompo.vue'

import PostsCompo from './components/PostsCompo.vue'
import PostDetailCompo from './components/PostDetailCompo.vue'
import PostCreateCompo from './components/PostCreateCompo.vue'
import PostUpdateCompo from './components/PostUpdateCompo.vue'



Vue.use(VueRouter)

const routes = [

                  {
                    path: '/login',
                    name: 'LoginCompo',
                    component:LoginCompo
                  },
                  {
                    path: '/signup',
                    name: 'SignupCompo',
                    component: SignupCompo
                  },
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
                    path: '/post-detail/:id',
                    name: 'PostDetailCompo',
                    component: PostDetailCompo,
                    props:true
                  },
                  {
                    path: '/post-update/:id',
                    name: 'PostUpdateCompo',
                    component: PostUpdateCompo,
                    props:true
                  },
                  {
                    path: '/post-create',
                    name: 'PostCreateCompo',
                    component: PostCreateCompo,
                    props:true
                  }
]


// this router will be exported to  main.js file
const router = new VueRouter({
                                mode: 'history',
                                base: process.env.BASE_URL,
                                routes  //   all collections of paths above 
})

// exported to  main.js
export default router


