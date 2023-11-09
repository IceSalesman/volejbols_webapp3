<script lang="ts">
	import { get } from 'svelte/store';
	import { otpSent, selectedForm } from '../../../stores';

	import LoginForm from '$lib/components/LoginSignup/LoginForm.svelte';
	import EmailVerificationInput from '$lib/components/LoginSignup/EmailVerificationInput.svelte';
	import OTPpasswordInput from './OTPpasswordInput.svelte';

	let radioLoginLabel = 'Pieslēgties';
	let radioSignupLabel = 'Reģistrēties';

	function onChange(event: { currentTarget: { value: string } }) {
		selectedForm.set(event.currentTarget.value);
	}
</script>

<div class="flex h-screen items-center justify-center">
	<div class="w-[350px] h-[450px] bg-white rounded-xl flex flex-col overflow-hidden">
		<div class="grid w-full grid-cols-2 justify-stretch items-center">
			<div class="bg-gray-100">
				<input
					disabled={$otpSent}
					type="radio"
					id="loginRadio"
					class="hidden peer"
					value="login"
					name="option"
					checked={get(selectedForm) === 'login'}
					on:change={onChange}
				/>
				<label
					for="loginRadio"
					class={`${$otpSent? "loginDisabled" : "loginSignupSelectionRadio"}`}
					>{radioLoginLabel}
				</label>
			</div>
			<div class="bg-gray-100">
				<input
					type="radio"
					id="signupRadio"
					class="hidden peer"
					value="signup"
					name="option"
					checked={get(selectedForm) === 'signup'}
					on:change={onChange}
				/>
				<label
					for="signupRadio"
					class={`${$otpSent? "signupAfterOTPsent" : "loginSignupSelectionRadio"}`}
					>{radioSignupLabel}
				</label>
			</div>
		</div>

		{#if $selectedForm === "login"}
			<LoginForm />
		{:else if $selectedForm === "signup"}
			{#if !$otpSent}
				<EmailVerificationInput />
			{:else if $otpSent}
				<OTPpasswordInput />
			{/if}
		{/if}
	</div>
</div>
