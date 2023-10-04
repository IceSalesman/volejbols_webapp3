<script lang="ts">
    
    import { Container } from "postcss";
    import FormContainer from "$lib/components/LoginSignup/FormContainer.svelte"
    
    
</script>

<main>
    <body 
        class="w-full h-full"
        style="background-image: image-set('src/static/gatis.png'); background-size: cover">
        
        <div class="flex h-screen items-center justify-center">
            <div class="flex container w-auto max-w-390 p-5 bg-white/[.5] ">
                <FormContainer>
            
                </FormContainer>
            </div>
        </div>
    </body>
</main>


<style lang="postcss">

    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
    main {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;   
    }
    

</style>