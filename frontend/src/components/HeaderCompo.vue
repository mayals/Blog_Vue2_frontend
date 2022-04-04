<template>
    <div>
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


