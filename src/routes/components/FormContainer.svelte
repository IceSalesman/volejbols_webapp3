<script lang="ts">
	import { afterUpdate, beforeUpdate, tick } from 'svelte';

    import LoginForm from "./LoginForm.svelte"
    import SignupForm from "./SignupForm.svelte"
    import Slide from "./Slide.svelte"
    import { selected } from "./Slide.svelte"

    
    let visibleLogin: Boolean = true;
    let visibleSignup: Boolean = false;
    $: {
        console.log(selected)
        if (selected === 'login') {
            visibleSignup = false;
            visibleLogin = true;
        } else if (selected === 'signup') {
            visibleLogin = false;
            visibleSignup = true;
        }
    }

</script>

<main>
    <Slide></Slide>
    {#if visibleLogin}
        <LoginForm></LoginForm>
    {/if}
    {#if visibleSignup}
        <SignupForm></SignupForm>
    {/if}
    
    
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