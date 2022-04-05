import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

// import App from "./App.vue";



const store = new Vuex.Store({

                            state: {
                                  isLoading : false,
                                  isAuthenticated : false,
                                  token : ""
                            },



                            mutations: {
                                        initializeStore(state){
                                                    if (localStorage.getItem('token')) {
                                                      state.token = localStorage.getItem('token')
                                                      state.isAuthenticated = true
                                                    } else {
                                                      state.token = ''
                                                      state.isAuthenticated = false
                                                    }           
                                        },
                                    
                                        setIsLoading(state,status){
                                                      state.isLoading = status
                                        },
                                    
                                        setToken(state,token){
                                                      state.token = token
                                                      state.isAuthenticated = true
                                        },

                                        removeToken(state){
                                                      state.token = ''
                                                      state.isAuthenticated = false
                                        }
                            },
   


                            actions: {
                              
                            },


                            
                            modules: {
                              
                            },

})

export default store;





// const app = createApp({App})

// // Install the store instance as a plugin
// app.use(store)



// const app = createApp({ /* your root component */ })

// // Install the store instance as a plugin
// app.use(store)