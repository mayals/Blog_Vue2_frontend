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
        

        

    </div>
  
</template>



<script>
export default { 
            name:'NavbarCompo',                      //name of file you are inside it now 
            data :function(){                       // dynamic data variable that used inside this component you are in now
                            return{
                                    title: "NavbarComponent",
                                    description: "description of NavbarComponent",
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


