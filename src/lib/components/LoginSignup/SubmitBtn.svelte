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


<div class="field btn">
    <div class="btn-layer"></div>
    <input type="submit" value="{selectedLabel}">
 </div>