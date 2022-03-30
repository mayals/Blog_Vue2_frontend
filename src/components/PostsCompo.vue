<template>
<div>
 

    <div :class="'container'">

        <div class='mt-3'>
             <router-link  type="button" class="btn btn-success" aria-current="page" :to="{ name:'PostCreateCompo' }">Add Post</router-link>  
        </div>

       
        <div :class="'row g-4 py-5 row-cols-1 row-cols-lg-3'">
            <div v-for="post in APIData" :key="post.id">
                 
                <div :class="'card'"> 
                    <div :class="'card-body'">

                        <h5 :class="'card-title'">
                            <router-link  :to="{name:'PostDetailCompo', params:{ id:post.id }}" :class="'card-link'">
                                {{post.title}}   
                            </router-link>
                        </h5>  

                        <p class="card-text text-truncate">
                            {{post.body}} 
                        </p>
                         <p class="card-text"><small class="text-muted">{{post.updated_at}}</small></p>
                        <router-link  :to="{   name:'PostDetailCompo', params:{ id:post.id,title:post.title, } }" :class="'btn btn-sm btn-primary'" >
                            Go Details
                        </router-link>   
                    </div>     
                </div>
                    
            </div>
        </div>                         
    </div>

</div>
</template>


<script>
import { getAPI } from "../axios_api.js";

export default {                            // export this page you are inside to output                                                //name of file you are inside it now 
                name: "PostsCompo",         // name of file you are inside that will export to output
                                  

                data () {
                        return  {
                             APIData :[],
                            //  body:""
                        }
                },

                // methods:{
                //             myFunction: function () {
                //                 this.body = this.body.slice(1, 5);
                //             }
                //         },


                created(){
                          getAPI.get('/api_blog/v1/posts/',)
                                .then(response => {
                                    this.APIData = response.data
                                    console.log('postAPI has received data') ;
                                    console.log(typeof(this.APIData))             
                                    })
                                .catch(err => {
                                    console.log(err)
                                    })
                                    
                                 
                }
}
</script>

<style scoped>
  .mymargin{
      margin-right: 30px;
  }
</style>