<script lang="ts">
	import SubmitBtn from './SubmitBtn.svelte';

	let inputEmail = 'E-pasta adrese';
	let inputPass = 'Parole';
	let repeatInputPass = 'Atkārtot paroli';
</script>

<form method="post" action="" class="flex-col p-1">
	<div class="space-y-1">
		<div class="">
			<input
				type="email"
				name="email"
				class="flex w-full p-1 rounded"
				placeholder={inputEmail}
				required
			/>
		</div>
		<div class="">
			<input
				type="password"
				name="password"
				class="flex w-full p-1 rounded"
				placeholder={inputPass}
				required
			/>
		</div>
		<div class="">
			<input
				type="repeatPassword"
				name="repeatPassword"
				class="flex w-full p-1 rounded"
				placeholder={repeatInputPass}
				required
			/>
		</div>
		<div class="">
			<SubmitBtn />
		</div>
	</div>
</form>
