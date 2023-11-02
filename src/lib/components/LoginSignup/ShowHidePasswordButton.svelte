<script lang="ts">
	import HideEye from "../SVGicons/HideEye.svelte";
	import ShowEye from "../SVGicons/ShowEye.svelte";

	export let showPassword = false;   
</script>

<!-- Es hz kā pareizi ievadīt svg failu, img neštirī -->
<button id="eye" on:click|preventDefault={() => (showPassword = !showPassword)}>
	{#if showPassword}
		<ShowEye />
	{:else}
		<HideEye />
	{/if}
</button>
