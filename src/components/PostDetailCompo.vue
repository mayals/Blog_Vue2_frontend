<template>
<div :class="'container'">


    <div class="card mt-5 mb-5">
      <div class="card-body">
        <h2 class="card-title mb-3">{{ APIData.title }}</h2>
        <h6 class="card-subtitle mb-5 text-muted">{{ APIData.created_at }}</h6>
        <p class="card-text mb-5">{{ APIData.body }}</p>
        
        <div class=''>
        <router-link
            :class = "'btn btn-warning  float-right'"
            :to = "{name:'PostUpdateCompo',
                    params:{
                              id : APIData.id,
                              title : APIData.title,
                              category : APIData.category,
                              author: APIData.author,
                              body : APIData.body,  
                          }}">
            Update
        </router-link>
        
        <button type="button" class="btn btn-danger" data-toggle="modal" @click="delete_post">Delete</button>  
        </div>

      </div>
    </div>

</div>
</template>





<script>
import { getAPI } from "../axios_api.js";
import { toast } from 'bulma-toast'
export default {

  
                            // export this page you are inside to output                                                //name of file you are inside it now
          name: "PostDetailCompo", // name of file you are inside that will export to output
   
    


          data() {
            return {
              APIData:"",
              id: this.$route.params.id,
              name: "PostDetailCompo",
            };
          },




          created() {
                    getAPI
                      .get(`/api_blog/v1/post/${this.id}`) /// from   http://127.0.0.1:8000/post/2
                      .then((response) => {
                                          this.APIData=response.data;
                                          // console.log(this.APIData);
                                          // console.log(response.data);   
                                          })
                      
                      .catch((err) => {
                                      console.log(err);
                                      });                                  
          },





          methods:{
              delete_post(){
                    console.log(this.id)
                    getAPI
                      .delete(`/api_blog/v1/post/${this.id}`) /// from   http://127.0.0.1:8000/post/2
                      .then((res) => {
                          console.log(res.data)
                          this.$router.push('/posts')
                          
                          // https://github.com/rfoel/bulma-toast
                              toast({
                                      message : "Post deleted successfully",
                                      type : "is-success",
                                      dismissible : true ,
                                      pauseOnHover : true ,
                                      duration : 5000 ,
                                      position : 'bottom-right',
                                  })
                      
                      
                      })

                      .catch(error => {
                          error.response.status
                      })
            }
        }
 

};
</script>
