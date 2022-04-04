<template>
<div class="container">

    <h5 class="mt-3 mb-3">{{message}}</h5>
    <div>

        <div v-if ="errors.length" class="alert alert-danger alert-disabled fade show mt-5" role="alert">
                <p v-for="error in errors" v-bind:key="error">
                    <strong>{{error}}</strong> 
                </p>    
        </div>
        


        <form
        v-on:submit.prevent="loginForm"
        method="POST" 
        class="form-horizontal" 
        role="form" 
        enctype="multipart/form-data" >
       
      
        <div class="form-group" style="padding:14px;">
                <div>
                    <label>Username</label>
                    <input
                        name="username"
                        type="text" 
                        v-model="form.username" 
                        class="form-control" 
                        placeholder="Please enter your username"> 
                </div>

                <br>

                <div>
                    <label>Password</label>
                    <input
                        name="password"
                        type="password" 
                        v-model="form.password" 
                        class="form-control" 
                        placeholder="Please enter your password"> 
                </div>

                <br>

                <button type="submit" class="btn btn-primary">Login</button>
            </div>

        </form>
    </div>


</div>
</template>




<script>
export default {
            name: "LoginCompo", //name of file you are inside it now
        
            data: function(){
                            return{
                                message :"i am Log in component",    
                                
                                errors : [],

                                form: {
                                        username: '',
                                        password: '',
                                        
                                    }
                            }

                           
            },

            created(){

            },

            methods:{
                loginForm(){
                    this.errors = []
                
                    if ( this.form.username === '' ){
                        this.errors.push('The username is required')
                    }
                    
                    if ( this.form.password === '' ){
                        this.errors.push('The password is required')
                    }
            
                }
            },


};
</script>