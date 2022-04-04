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
        @submit.prevent = "signupForm" 
        method = "POST"
        class = "form-horizontal" 
        role  = "form" 
        enctype = "multipart/form-data"> 
                        
        
          
                    <div class="form-group" style="padding:14px;">
                        <div>
                            <label>Username</label>
                            <input
                                name="username"
                                v-model="form.username"
                                type="text" 
                                class="form-control" 
                                placeholder="Please enter your username"> 
                        </div>

                        <br>

                        <div>
                            <label>Email</label>
                            <input
                                name="email"
                                v-model="form.email"
                                type="email" 
                                class="form-control" 
                                placeholder="Please enter your email"> 
                        </div>

                        <br>

                        <div>
                            <label>Password</label>
                            <input
                                name="password1"
                                v-model="form.password1" 
                                type="password" 
                                class="form-control" 
                                placeholder="Please enter your password"> 
                        </div>

                        <br>

                        <div>
                            <label>Confirm Password</label>
                            <input
                                name="password2"
                                v-model="form.password2"  
                                type="password" 
                                class="form-control" 
                                placeholder="Please confirm your password"> 
                        </div>

                        <br>

                        <button type="submit" class="btn btn-primary">SignUp</button>
                    </div>

        </form>
    </div>


</div>
</template>



<script>
export default {
            name: "SignupCompo", //name of file you are inside it now
        
            data: function(){
                            return{
                                message :"i am Log in component",    
                                
                                errors : [],

                                form: {
                                        username: '',
                                        email: '',
                                        password1: '',
                                        password2: '',
                                        
                                    }
                            }

                           
            },

            created(){

            },



            methods:{
                signupForm(){
                    this.errors = []
            
                    if ( this.form.username === '' ){
                        this.errors.push('The username is required')
                    }
                    
                    if ( this.form.email === '' ){
                        this.errors.push('The email is required')
                    }
                    
                    if ( this.form.password1 === '' ){
                        this.errors.push('The password is required')
                    }else if(this.password1.length <= 4){
                        this.errors.push('The password is too short')      
                    }

                    if ( this.form.password1 !== this.password2 ){
                        this.errors.push('The passwords are not matching')
                    }
                }
            },


};
</script>