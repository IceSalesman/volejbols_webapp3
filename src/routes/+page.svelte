<script lang="ts">
    
    import FormContainer from "./components/FormContainer.svelte"
    
</script>


<main>
    <body>
        <FormContainer>
        
        </FormContainer>
    </body>
</main>



<style lang="css">

    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
    main {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body{
        display: grid;
        height: 100%;
        width: 100%;
        place-items: center;
        background-image: image-set("./components/pictures/gatis.png");
        background-size: cover;
    }
</style>