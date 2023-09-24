<script>
    import LoginForm from "./LoginForm.svelte"
    import SignupForm from "./SignupForm.svelte"
    import Slide from "./Slide.svelte"
    
</script>

<main>
    
    <Slide></Slide>
    <LoginForm></LoginForm>
    <SignupForm></SignupForm>
    
</main>





<style>

    main {
        overflow: hidden;
        max-width: 390px;
        background: #ffffff60;
        padding: 30px;
        border-radius: 5px;
        box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
        text-align: center;
    }


</style>