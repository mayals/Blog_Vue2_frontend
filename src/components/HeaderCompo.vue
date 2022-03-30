<template>
    <div>
        <!-- <div class='mylogo'>{{username}}</div> -->
        <!-- <nav>
            <router-link to="/" exact>Home</router-link> |
            <router-link to="/posts">Posts</router-link>  
        </nav> -->
    
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                           <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/" exact>Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/posts">Blog</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About US</a>
                        </li>  
                    </ul>

                    <ul class="navbar-nav ms-auto">
                        <li class="dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Login</a></li>
                                    <li><a class="dropdown-item" href="#">Register</a></li>
                                     <li><a class="dropdown-item" href="#">Profile</a></li>
                                    <li><a class="dropdown-item" href="#">Logout</a></li>
                                </ul>
                        </li>
                    </ul>



                    </div>
                </div>
        </nav>
        

        <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div class="col-md-6 px-0">
            <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
            <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
            <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
            </div>
        </div>

    </div>
  
</template>



<script>
export default { 
            name:'HeaderCompo',                      //name of file you are inside it now 
            data :function(){                       // dynamic data variable that used inside this component you are in now
                            return{
                                    title: "HeaderComponent",
                                    description: "description of HeaderComponent",
                                    // username:"Mayals"
                            }
            },                                             
}
</script>

<style scoped>
.mym{
    margin-right: 0px;
}
</style>


