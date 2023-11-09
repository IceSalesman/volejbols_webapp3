<script lang="ts">

	let inputOTP = 'Ievadiet verifikācijas kodu';

	const handleSubmit = () => {

    }
	
</script>



<form method="post" on:submit|preventDefault={handleSubmit} class="h-full">
	<div class="h-full flex flex-col justify-evenly items-center">
		<div class="w-4/5 h-full flex flex-col justify-evenly">
			<p class="text-center">
				<strong>Uz tavu e-pastu tika nosūtīts verifikācijas kods!</strong> <br /> <br /> 
				Ievadi to, lai turpinātu reģistrāciju!
			</p>
			<div class="formInputDiv">
				<input
					type="email"
					name="email"
					class="outline-none w-full"
					placeholder={inputOTP}
				/>
			</div>
			<div class="flex flex-col items-center">
				<button
					type="submit"
					class="loginPageSubmitButton"
					>Turpināt
				</button>
			</div>
		</div>
	</div>
</form>
