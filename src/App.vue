<template>
  <div id="app">
      <HeaderCompo/>     <!--the component that  imported to used inside this page -->     
      <router-view/>     <!--to told project that we have router_view -->
    
    
  
  
  
  </div>
</template>




<script>
// @ is an alias to /src
import HeaderCompo from '@/components/HeaderCompo.vue'   //import componets to use them in this page 


export default {
                name:'App',                    //name of file you are inside it now 
                components: {
                        HeaderCompo,          //dictionary of names of all components in this page             
                },
};
</script>




<style>
/* #app {
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
} */
</style>
