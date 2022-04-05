<template>
  <div id="app">
      <NavbarCompo/>     <!--the component that  imported to used inside this page -->     
      <router-view/>     <!--to told project that we have router_view -->
  </div>
</template>




<script>
// @ is an alias to /src
import NavbarCompo from '@/components/NavbarCompo.vue'   //import componets to use them in this page 
import { getAPI } from "./axios_api";

export default {
                name:'App',                    //name of file you are inside it now 
                components: {
                        NavbarCompo,          //dictionary of names of all components in this page             
                },


                beforeCreate() {
                                    this.$store.commit('initializeStore')
                                    console.log(this.$store.commit('initializeStore'))
                                    
                                    if (this.$store.state.token){
                                                getAPI.defaults.headers.common['Authorization'] = "token" + this.$store.state.token
                                    }else{
                                                getAPI.defaults.headers.common['Authorization'] = ""
                                  }
                }

};
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
