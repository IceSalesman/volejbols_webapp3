<script lang="ts">
	import { otpSent } from '../../../stores';

	let inputEmail = 'E-pasta adrese';

	function submitForm(event: Event) {
		event.preventDefault(); // Prevent the default form submission

		// Get the form data
		const formData = new FormData(event.target as HTMLFormElement);

		// Perform the first action: send verification code
		fetch((event.target as HTMLFormElement).action, {
			method: 'POST',
			body: formData
		})
			.then((response) => response.json())
			.then((data) => {
				// Handle the response if needed
				console.log('Verification code sent:', data);
				otpSent.set(true);
				// Update the store or component state to indicate that the OTP has been sent

			})
			.catch((error) => {
				console.error('Error sending verification code:', error);
				// Handle errors if needed
			});
	}
</script>

<form method="post" on:submit={submitForm} action="?/sendVerificationCode" class="h-full">
	<div class="h-full flex flex-col justify-evenly items-center">
		<div class="w-4/5 h-full flex flex-col justify-evenly">
			<p class="text-center">
				<strong>Sveiks volejbola entuziast!</strong> <br />
				Ievadi savu e-pastu, lai uzsāktu reģistrāciju!
			</p>
			<div class="formInputDiv">
				<input type="email" name="email" class="outline-none w-full" placeholder={inputEmail} />
			</div>
			<div class="flex flex-col items-center">
				<button type="submit" class="loginPageSubmitButton">Reģistrēties </button>
			</div>
		</div>
	</div>
</form>
