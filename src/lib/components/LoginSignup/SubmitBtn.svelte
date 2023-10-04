<script lang="ts">
    import {selectedForm} from "../../../stores"
    let selectedLabel = '';

    $: {
        selectedForm.subscribe((value) => {
            if (value === 'login') {
                selectedLabel = 'Pieslēgties'
            } else if (value === 'signup') {
                selectedLabel = 'Reģistrēties'
            }
        });
    }

</script>

        <button class="flex w-full justify-center items-center cursor-pointer bg-black/[0.5] rounded text-lg">
            {selectedLabel}
        </button>
