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
                > 
                <br>

                <input 
                v-model="form.category" 
                type="text" 
                class="form-control" 
                > 
                <br>

              <input  
                v-model="form.author"
                type="text"  
                class="form-control" 
                >
                <br>


                <textarea  
                v-model="form.body"
                rows="8"  
                class="form-control" 
                >
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
              title : this.$route.params.title ,
              category: '',
            
              form: {
                  title : this.$route.params.title ,
                  category : this.$route.params.category,
                  author : this.$route.params.author,
                  body : this.$route.params.body,
              }
          }
    },


    methods:{
        submitForm(){
        console.log(this.$route.params.title)
            getAPI
                 .put(`/api_blog/v1/post/${this.id}`, this.form) /// from   http://127.0.0.1:8000/post/2
                 .then((res) => {
                    console.log(res.data)
                    this.$router.push(`/post-detail/${this.id}`)


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

