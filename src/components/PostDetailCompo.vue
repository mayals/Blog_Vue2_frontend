<template>
  <div>
    <h1>{{ name }}</h1>
    <div :class="'container'">


      {{ APIData.id }}<br />
      {{ APIData.title }}<br />
      {{ APIData.body }}<br />
    </div>
    
    <router-link
              :class = "'btn btn-info'"
              :to = "{   name:'PostUpdateCompo', params:{
                                                            id : APIData.id,
                                                         title : APIData.title,
                                                         category : APIData.category,
                                                         author: APIData.author,
                                                          body : APIData.body,  
                                                         }}">
              Update
    </router-link>

<button type="button" class="btn btn-danger pull-right" data-toggle="modal" @click="delete_post">Delete</button>

    <!-- <router-link
              :class = "'btn btn-danger'"
              :to = "{   name:'PostDeleteCompo', params:{
                                                            id : APIData.id,
                                                         title : APIData.title,
                                                         category : APIData.category,
                                                         author: APIData.author,
                                                          body : APIData.body,  
                                                         }}">
              
    </router-link> -->
  

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
