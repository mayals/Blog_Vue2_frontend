<template>
  <div class="posts">
    <HeaderCompo/>
    <h1>{{description}}</h1>
                                      <!-- use the component that imported inside template of page you are inside it now-->
  </div>
</template>


<script>
// @ is an alias to /src                                    
import HeaderCompo from "@/components/HeaderCompo.vue";            // import component that you will use them inside this page
 
export default {                            // export this page you are inside to output                                                //name of file you are inside it now 
                name: "HomeView",          // name of file you are inside that will export to output
                components: { 
                                          // dictionary of all components that have been used inside this page
                            HeaderCompo,
                        
                            },  
                data:function(){
                    return  {
                            description:'This is an HomeView page' ,}
                    }       
                };
</script>





