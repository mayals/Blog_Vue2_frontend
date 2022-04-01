<template>
<div :class="'container'">

    <!--   post detail    -->
    <div class="card mt-5 mb-5">
      <div class="card-body">
        <h2 class="card-title mb-3">{{ APIData.title }}</h2>
        <p class="card-subtitle mb-5 text-muted"><small>{{ APIData.created_at }}</small></p>
        <p class="card-text mb-3">{{ APIData.body }}</p>
   
        
        <!--    buttons   -->
        <div>
              <!--    post update button    -->
              <router-link
                  :class = "'btn btn-warning'"
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
              

              <!--   post delete button   -->
              <button 
                  type="button" 
                  class="btn btn-danger mr-5 ml-5" 
                  data-toggle="modal" 
                  @click="delete_post">
                  Delete
              </button>  
        </div>
      </div>  
    </div>  
  
    
        

        <!--   comments    -->
        <div class="card mb-3">
          
          <div class="card-header text-center">
                  Comments
          </div>
          <div  class="card-body p-3">

              <div v-for="comm in all_comments" :key="comm.id">
                <div v-if="(comm.post === APIData.title)" >
                    <div class="card  mb-3">  
                      <div class="card-body p-3">
                        <p class="card-text">{{comm.text}}</p>
                        <p class="card-subtitle text-muted"><small>{{ comm.created_at }}</small></p>
                        <p class="card-subtitle text-muted"><small>{{ comm.comment_by }}</small></p>
                      </div>
                    </div> 
                  </div>     
              </div>

              <div v-if="(APIData.comments == 0 )" class="text-center text-danger  p-3">
                  No comment yet!
              </div>

          </div>
        </div>

        
        <!--   add comment form    -->
        <div>
        <form class="form-horizontal" role="form" enctype="multipart/form-data" method="POST" v-on:submit.prevent="addcomment_form">
 
            <div class="form-group" style="padding:14px;">
                
                <input 
                v-model="form.post" 
                type="text" 
                class="form-control" 
                placeholder="Please enter your post title"> 
                <br>

                <textarea  
                v-model="form.text"
                rows="8"  
                class="form-control" 
                placeholder="Please enter your comment text">
                </textarea>
                <br>

                <input 
                v-model="form.comment_by" 
                type="text" 
                class="form-control" 
                placeholder="Please enter comment by"> 
                <br>


                <button type="submit" class="btn btn-primary">Add Comment</button>
            </div>

        </form>
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
              all_comments:"",
              id: this.$route.params.id,
              name: "PostDetailCompo",

              form: {
                  post: '',
                  text: '',
                  comment_by: '',
              }


            };
          },


          created() {
              this.get_post()
              this.get_comments()   
          },





          methods:{
                  get_post(){
                        getAPI
                          .get(`/api_blog/v1/post/${this.id}`) /// from   http://127.0.0.1:8000/post/2
                          .then((response) => {
                                              this.APIData = response.data;
                                              // console.log(this.APIData);
                                              // console.log(response.data);  
                                              console.log(this.APIData) // not give me comment.properity
                                              })
                          
                          .catch((err) => {
                                          console.log(err);
                                          });
                  },



                  delete_post(){
                        console.log(this.id)
                        getAPI
                          .delete(`/api_blog/v1/post/${this.id}`)    // from   http://127.0.0.1:8000/post/2
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
                  },



                  get_comments(){
                        getAPI
                          .get('/api_blog/v1/comments/') /// from   http://127.0.0.1:8000/api_blog/v1/comments/
                          .then((response) => {
                                              this.all_comments = response.data;
                                              // console.log(this.APIData);
                                              // console.log(response.data);  
                                              console.log(this.all_comments)
                                              })
                          
                          .catch((err) => {
                                          console.log(err);
                                          });
                  },



                  addcomment_form(){

                    getAPI
                        .post('/api_blog/v1/comments/', this.form)
                        
                        .then(response => {

                                // https://github.com/rfoel/bulma-toast
                                toast({
                                        message : "Comment was created successfully",
                                        type : "is-success",
                                        dismissible : true ,
                                        pauseOnHover : true ,
                                        duration : 5000 ,
                                        position : 'bottom-right',
                                    })

                                  console.log(response);
                                  this.response = response.data
                                  // this.success = 'Data saved successfully';
                                  // this.response = JSON.stringify(response, null, 2)
                        })
                      
                        .catch( error => {
                                console.log( error)
                                                    if (error.response) {
                                                        for (const property in error.response.data ) {
                                                            this.errors.push(`${property}: ${error.response.data[property]}`)
                                                        }

                                                    }else if (error.message) {
                                                        this.errors.push('Something went wrong. Please try again')

                                                    }
                        })
            







                  }

          }
};
</script>
