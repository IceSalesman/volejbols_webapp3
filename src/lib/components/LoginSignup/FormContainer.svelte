<script lang="ts">
	import { get, writable } from "svelte/store";
    import { selectedForm } from "../../../stores";

    import LoginForm from "$lib/components/LoginSignup/LoginForm.svelte";
    import SignupForm from "$lib/components/LoginSignup/SignupForm.svelte";
    

    let visibleLogin: Boolean = true;
    let visibleSignup: Boolean = false;

    let radioLoginLabel = 'Pieslēgties'
    let radioSignupLabel = 'Reģistrēties'
    
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

        <div class="">
            <div class="grid w-full grid-cols-2 gap-2 rounded-xl bg-gray-200 p-1">
                <div>
                    <input checked={get(selectedForm) === 'login'} on:change={onChange} type="radio" name="option" id="loginRadio" value="login" class="peer hidden"  />
                    <label for="loginRadio" class="block cursor-pointer select-none rounded-lg p-1 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">{radioLoginLabel}</label>
                </div>
        
                <div>
                    <input checked={get(selectedForm) === 'signup'} on:change={onChange} type="radio" name="option" id="signupRadio" value="signup" class="peer hidden" />
                    <label for="signupRadio" class="block cursor-pointer select-none rounded-lg p-1 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">{radioSignupLabel}</label>
                </div>
            </div>
        
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