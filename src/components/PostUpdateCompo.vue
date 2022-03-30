<template>
<div class="container">
    <h5 class="mt-3 mb-3">{{message}}</h5>
    <div>
        <div v-if="error" class="alert alert-warning alert-disabled fade show mt-5" role="alert">
            <strong>{{ error }}</strong>   
        </div>
        

        <form
        method="POST" 
        v-on:submit.prevent="submitForm"
        class="form-horizontal" 
        role="form" enctype="multipart/form-data"> 
        
        
          
            <div class="form-group" style="padding:14px;">
                
                <input 
                v-model="form.title" 
                type="text" 
                class="form-control" 
                placeholder="Please enter your post title"> 
                <br>

                <input 
                v-model="form.category" 
                type="text" 
                class="form-control" 
                placeholder="Please enter your post category"> 
                <br>

              <input  
                v-model="form.author"
                type="text"  
                class="form-control" 
                placeholder="Please enter the author">
                <br>


                <textarea  
                v-model="form.body"
                rows="8"  
                class="form-control" 
                placeholder="Please enter your post body">
                </textarea>
                <br>

                <button type="submit" class="btn btn-primary">Create post</button>
            </div>

        </form>

    </div>
</div>
</template>



<script>
//https://5balloons.info/post-form-data-to-api-using-axios-in-vuejs/


import { getAPI } from "../axios_api.js";

export default {

    name: 'PostUpdateCompo',
   
    data(){
          return{
              message:'i am update post page',
              error:"",
              id: this.$route.params.id,
            
              form: {
                  title: '',
                  category: '',
                  author: '',
                  body: '',
              }
          }
    },


    methods:{
        submitForm(){
            getAPI
                 .put(`/api_blog/v1/post/${this.id}`, this.form) /// from   http://127.0.0.1:8000/post/2
                 .then((res) => {
                    console.log(res.data)
                 })
                 .catch(error => {
                    error.response.status
                })
                //  .finally(() => {
                //      //Perform action in always
                //      console.log("i am finished")
                //  });
        }
    }
}
</script>

