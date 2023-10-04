<script lang="ts">
	import { get, writable } from "svelte/store";
    import { selectedForm } from "../../../stores";

    import LoginForm from "$lib/components/LoginSignup/LoginForm.svelte"
    import SignupForm from "$lib/components/LoginSignup/SignupForm.svelte"
    

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

<div class="">
    <div class="slideControls">
        <label class="">
            <input checked={get(selectedForm) === 'login'} on:change={onChange} id="login" type="radio" class="slide" name="slide" value="login" /> Pieslēgties
        </label>
        <label class="labelSignup">
            <input checked={get(selectedForm) === 'signup'} on:change={onChange} id="signup" type="radio" class="slide" name="slide" value="signup" /> Reģistrēties
        </label>
        <div class="sliderTab"></div>
    
    </div>
    



    
    {#if visibleLogin}
        <div class="loginForm">
            <LoginForm></LoginForm>
        </div>
    {/if}
    {#if visibleSignup}
        <div class="signupForm">
            <SignupForm></SignupForm>
        </div>
    {/if}
    
    
</div>

<style lang="postcss">    



</style>