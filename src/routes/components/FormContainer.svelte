<script lang="ts">
	import { get, writable } from "svelte/store";
    import { selectedForm } from "../../stores";

	

    import LoginForm from "./LoginForm.svelte"
    import SignupForm from "./SignupForm.svelte"
    

    let visibleLogin: Boolean = true;
    let visibleSignup: Boolean = false;
    $: {
        selectedForm.subscribe((value) => {
            if (value === 'login') {
                visibleLogin = true;
                visibleSignup = false;
            } else if (value === 'signup') {
                visibleLogin = false;
                visibleSignup = true;
            }
        });
    }
    function onChange(event: { currentTarget: { value: string; }; }){
        selectedForm.set(event.currentTarget.value);
    }

</script>

<main>
    <label>
        <input checked={get(selectedForm) === 'login'} on:change={onChange} type="radio" name="slide" value="login" /> Pieslēgties
    </label>
    <label>
        <input checked={get(selectedForm) === 'signup'} on:change={onChange} type="radio" name="slide" value="signup" /> Reģistrēties
    </label>
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