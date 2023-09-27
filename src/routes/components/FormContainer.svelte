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

<div class='formContainer'>
    <div class="slideControls">
        <label class="labelLogin">
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

<style lang="css">

    .formContainer {
        overflow: hidden;
        max-width: 390px;
        background: #ffffff60;
        padding: 30px;
        border-radius: 5px;
        box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
        

    }

    .formContainer .slideControls{
        position: relative;
        display: flex;
        height: 50px;
        width: 100%;
        overflow: hidden;
        margin: 30px 0 10px 0;
        justify-content: space-between;
        border: 1px solid lightgrey;
        border-radius: 5px;
    }

    .formContainer .slideControls .slide{
        height: 100%;
        width: 100%;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        line-height: 48px;
        cursor: pointer;
        z-index: 1;
        transition: all 0.6s ease;
    }

    .slideControls .labelLogin{
         color: #000;
    }
    .slideControls .labelSignup{
        color: #000;
    }

    .slideControls .sliderTab{
        position: absolute;
        height: 100%;
        width: 50%;
        left: 0;
        z-index: 0;
        border-radius: 5px;
        background: black;
        transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
    }

    input[type="radio"]{
        display: none;
    }

    #signup:checked ~ .sliderTab{
        left: 50%;
    }

    #signup:checked ~ .labelSignup{
        color: #fff;
        cursor: default;
        user-select: none;
    }

    #signup:checked ~ .labelLogin{
        color: #000;
    }

    #login:checked ~ .labelSignup{
        color: #000;
    }

    #login:checked ~ .labelLogin{
        cursor: default;
        user-select: none;
    }
    

</style>