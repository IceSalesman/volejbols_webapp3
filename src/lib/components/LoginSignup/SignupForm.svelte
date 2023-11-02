<script lang="ts">
	let inputEmail = 'E-pasta adrese';

</script>

<form method="post" action="/?sendEmail" class="h-full">
	<div class="h-full flex flex-col justify-evenly items-center">
		<div class="w-4/5 h-full flex flex-col justify-evenly">
			<p class="text-center">
				<strong>Sveiks volejbola entuziast!</strong> <br /> 
				Ievadi savu e-pastu, lai uzsāktu reģistrāciju!
			</p>
			<div class="formInputDiv">
				<input
					type="text"
					name="email"
					class="outline-none w-full"
					placeholder={inputEmail}
				/>
			</div>
			<div class="flex flex-col items-center">
				<button
					type="submit"
					class="p-1 px-4 items-center cursor-pointer bg-gray-100 rounded text-lg font-bold text-sky-500 hover:bg-gray-200"
					>Reģistrēties
				</button>
			</div>
		</div>
	</div>
</form>
