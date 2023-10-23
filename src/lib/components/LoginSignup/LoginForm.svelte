<script lang="ts">
	import HideEye from "../SVGicons/HideEye.svelte";
	import ShowEye from "../SVGicons/ShowEye.svelte";


	let inputEmail = 'E-pasta adrese';
	let inputPass = 'Parole';

	let show = false;
</script>

<form method="post" action="" class="h-full">
	<div class="h-full flex flex-col justify-evenly items-center">
		<div class="border p-1 rounded ">
			<input
				type="email"
				name="email"
				placeholder={inputEmail}
				required
			/>
		</div>
		<div class="flex border p-1 rounded">
			<input
				type={show ? 'text' : 'password'}
				name="password"
				placeholder={inputPass}
				required
			/>
			<!-- Es hz kā pareizi ievadīt svg failu, img neštirī -->
			<button id="eye" on:click|preventDefault={() => show = !show}>
				{#if show}
					
					<ShowEye />
				{:else}
					<HideEye />
				{/if}
		</div>
		<div>
			<a
				class="flex no-underline hover:underline text-[#4137ab] justify-center items-center p-1"
				href="https://www.nva.gov.lv/lv/bezdarbnieka-statusa-iegusana">Aizmirsi paroli?</a
			>
		</div>
		<div class="flex flex-col items-center">
			<button
				type="submit"
				class="p-1 px-4 items-center cursor-pointer bg-gray-100 rounded text-lg font-bold text-sky-500 hover:bg-gray-200"
				>Pieslēgties</button
			>
		</div>
	</div>
</form>
