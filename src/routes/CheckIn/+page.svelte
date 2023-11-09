<script lang="ts">
	import { onMount } from "svelte";
    

    

    let time = new Date()

    let goThere = "Būšu😎";
    let noGoThere = "Nebūšu🤓"

    

    const dayDict = {
        0: "rīt (šodien)",
        1: "rīt (rīt)",
        2: "rīt (parīt)",
        3: "rīt (aizparīt)",
        4: "rīt (aiz-aizparīt)",
        5: "rīt (aiz-aiz-aizparīt)",
        6: "rīt (aiz-aiz-aiz-aizparīt)"
    };
    
    const monthDict = {
        0: "janvārī",
        1: "februārī",
        2: "martā",
        3: "aprīlī",
        4: "maijā",
        5: "jūnijā",
        6: "jūlijā",
        7: "augustā",
        8: "septembrī",
        9: "oktobrī",
        10: "novembrī",
        11: "decembrī"
    }

    $: h = time.getHours();
    $: m = time.getMinutes();
    $: s = time.getSeconds();

    $: dd = time.getDate();
    $: mm = time.getMonth();
    $: yyyy = time.getFullYear();

    $: daysTillSaturday = 6-time.getDay();
    $: saturdayDate = dd + daysTillSaturday;
    $: {
        if (daysTillSaturday<0){
            daysTillSaturday = 6;
        }

    
    }


   
    onMount(() => {
        const interval = setInterval(() => {
            time = new Date;
            console.log(time.getMonth());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

   


</script>


<form action="" method="post">
    <div>
        <div class="">
            <div class="flex items-center justify-center p-2">
                {dd}/{mm + 1}/{yyyy}
            </div>
            
            <div class="flex items-center justify-center p-2">
                {h}:{m}:{s}
            </div>
        </div>
        
            
        <div class="h-full flex flex-col justify-center items-center p-1">
            <div>
                Vai tu būsi <strong>{dayDict[daysTillSaturday]}, {saturdayDate}.{monthDict[mm]}, 18:00(19:00 uz papīriem) <i>mūsu skolas</i> (Ūnijas iela 93) zālē volejbols </strong>
            </div>
            <div class="flex justify-center items-center flex-col space-y-1">
                
                <div class="p-1">
                    <input class="hidden peer" type="radio" id="radioTF-1" name="radioTF" value="True">

                    <label
                        for="radioTF-1"
                        class="p-1 rounded-lg hover:bg-gray-400 peer-checked:bg-gray-500 peer-checked:text-white">
                        {goThere}
                    </label>

                </div>

                <div class="p-1">
                    <input class="hidden peer" type="radio" id="radioTF-0" name="radioTF" value="False">

                    <label
                        for="radioTF-0"
                        class="p-1 rounded-lg hover:bg-gray-400 peer-checked:bg-gray-500 peer-checked:text-white">
                    
                        {noGoThere}
                    </label>
                </div>


            </div>    
            <div class="p-1"> 
                <button
                    
                    type="submit"
                    class="p-1 px-4 items-center cursor-pointer bg-gray-100 rounded text-lg font-bold hover:bg-gray-200"
                    >Apstirpināt
                </button>     
            </div>
        </div>
        


    </div>

</form>


<style>
</style>

