<script lang="ts">
	import ShowHidePasswordButton from "./ShowHidePasswordButton.svelte";

	let inputEmail = 'E-pasta adrese';
	let inputPass = 'Parole';
	let showPassword: boolean

</script>

<form method="post" action="/CheckIn" class="h-full">
	<div class="w-full h-full flex justify-center">
		<div class="w-4/5 h-full flex flex-col justify-evenly">
			<div class="formInputDiv">
				<input
					type="email"
					name="email"
					class = "outline-none w-full"
					placeholder={inputEmail}
					required
				/>
			</div>
			<div class="formInputDiv flex flex-row">
				<input
					type={showPassword ? 'text' : 'password'}
					name="password"
					placeholder={inputPass}
					class="outline-none w-11/12"
					required
				/>
				<ShowHidePasswordButton bind:showPassword/>
			</div>
			<div>
				<a
					class="flex no-underline hover:underline text-[#4137ab] justify-center items-center p-1"
					href="https://www.nva.gov.lv/lv/bezdarbnieka-statusa-iegusana">Aizmirsi paroli?</a
				>
			</div>
			<div class="flex flex-col items-center bg-arts">
				<button
					type="submit"
					class="loginPageSubmitButton"
					>Pieslēgties</button
				>
			</div>
		</div>
	</div>
</form>
