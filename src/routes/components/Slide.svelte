

<script context='module'>
	export let selected = 'login';

    /**
	 * @param {{ currentTarget: { value: string; }; }} event
	 */
    function onChange(event) {
        selected = event.currentTarget.value;
	}

    


</script>

<main>
    

    <label>
        <input checked={selected === 'login'} on:change={onChange} type="radio" name="slide" value="login" /> Pieslēgties
    </label>
    <label>
        <input checked={selected ==='signup'} on:change={onChange} type="radio" name="slide" value="signup" /> Reģistrēties
    </label>
    {selected}
</main>


<style>



</style>