<script lang="ts">
    import "../app.css"
</script>

<slot />

<style lang="postcss">

    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
    
    :global(html) {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    

</style>