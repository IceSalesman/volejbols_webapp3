<script lang="ts">
	import { get, writable } from "svelte/store";
    import { selectedForm } from "../../../stores";

    import LoginForm from "$lib/components/LoginSignup/LoginForm.svelte";
    import SignupForm from "$lib/components/LoginSignup/SignupForm.svelte";
    

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

<div class="flex h-screen items-center justify-center">
    <div class="w-auto max-w-390 p-5 bg-white/[.5]  rounded-lg">

        <div class="p-2">
            <label class="">
                <input checked={get(selectedForm) === 'login'} on:change={onChange} id="login" type="radio" class="slide" name="slide" value="login" /> Pieslēgties
            </label>
            <label class="labelSignup">
                <input checked={get(selectedForm) === 'signup'} on:change={onChange} id="signup" type="radio" class="slide" name="slide" value="signup" /> Reģistrēties
            </label>
            
        
        </div>
            
        {#if visibleLogin}
            <div class="">
                <LoginForm></LoginForm>
            </div>
        {/if}
        {#if visibleSignup}
            <div class="">
                <SignupForm></SignupForm>
            </div>
        {/if}
    </div>
    
    
    
</div>

<style lang="postcss">    



</style>