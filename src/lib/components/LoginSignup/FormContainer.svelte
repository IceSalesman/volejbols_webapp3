<script lang="ts">
	import { get, writable } from 'svelte/store';
	import { selectedForm } from '../../../stores';

	import LoginForm from '$lib/components/LoginSignup/LoginForm.svelte';
	import SignupForm from '$lib/components/LoginSignup/SignupForm.svelte';
	

	let visibleLogin: Boolean = true;
	let visibleSignup: Boolean = false;

	let radioLoginLabel = 'Pieslēgties';
	let radioSignupLabel = 'Reģistrēties';

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
	function onChange(event: { currentTarget: { value: string } }) {
		selectedForm.set(event.currentTarget.value);
	}
</script>

<div class="flex h-screen items-center justify-center">
	<div class="w-[350px] h-[450px] bg-white rounded-xl flex flex-col overflow-hidden">
		<div class="grid w-full grid-cols-2 justify-stretch items-center">
			<div class="bg-gray-100">
				<input
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
					class="p-2 cursor-pointer block text-center select-none peer-checked:text-sky-500 peer-checked:font-bold peer-checked:bg-white peer-hover:bg-gray-200"
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
					class="p-2 cursor-pointer block text-center select-none peer-checked:text-sky-500 peer-checked:font-bold peer-checked:bg-white peer-hover:bg-gray-200"
					>{radioSignupLabel}
				</label>
			</div>
		</div>

		{#if visibleLogin}
			<LoginForm />
		{:else if visibleSignup}
			<SignupForm />
		{/if}
	</div>
</div>
