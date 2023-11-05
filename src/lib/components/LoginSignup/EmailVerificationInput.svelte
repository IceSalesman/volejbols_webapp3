<script lang="ts">
	import { enhance } from "$app/forms";
	import { otpSent } from "../../../stores";

	let inputEmail = 'E-pasta adrese';

</script>

<!-- Nepārmainās logs uz verifikācijas apstiprināšanas logu -->
<form method="post" on:submit|preventDefault use:enhance action="?/sendVerificationCode" class="h-full">
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
