<template>
<div class="container">
    <h5 class="mt-3 mb-3">{{message}}</h5>
    <div>

        <div v-if ="errors.length" class="alert alert-danger alert-disabled fade show mt-5" role="alert">
                <p v-for="error in errors" v-bind:key="error">
                    <strong>{{error}}</strong> 
                </p>    
        </div>
        
        <div>
            <h3>Data post to the server:</h3>
            <p v-if="success" class="alert alert-success alert-disabled fade show mt-5" role="alert" > {{ success }}</p>
            <pre>{{ response }}</pre>
        </div>

        
        
        <form class="form-horizontal" role="form" enctype="multipart/form-data" method="POST" v-on:submit.prevent="submitForm">
        
          
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
import { toast } from 'bulma-toast'

export default {

    name: 'PostCreateCompo',
    

    data(){
          return{
              message:'i am create post page',
              errors : [],
              response: '',
              success: '',
              id:'',
            
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

           this.errors = []
            
            if ( this.title === '' ){
                this.errors.push('The title is required')
            }
            
            if ( this.category === '' ){
                this.errors.push('The category is required')
            }
            
            if ( this.author === '' ){
                this.errors.push('The author is required')
            }
            if ( this.body === '' ){
                this.errors.push('The body is required')
            }
            
            ////////  if no error found in errors array,start took data and post it to backend by axios  ///////////////
            if (!this.errors.length) { 
                  getAPI
                        .post('/api_blog/v1/posts/', this.form)
                        
                        .then(response => {

                                // https://github.com/rfoel/bulma-toast
                                toast({
                                        message : "Post was created successfully",
                                        type : "is-success",
                                        dismissible : true ,
                                        pauseOnHover : true ,
                                        duration : 5000 ,
                                        position : 'bottom-right',
                                    })


                                  // console.log(response);
                                  this.response = response.data
                                  // this.success = 'Data saved successfully';
                                  // this.response = JSON.stringify(response, null, 2)
                                  
                                  // console.log(this.id)
                                  this.id = response.data.id
                                  this.$router.push(`/post-detail/${this.id}`)

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
    }


}
</script>