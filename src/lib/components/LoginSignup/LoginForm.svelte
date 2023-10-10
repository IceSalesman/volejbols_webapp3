<script>
   import LoginInputs from "./inputs/LoginInputs.svelte";
   import SubmitBtn from "./SubmitBtn.svelte";


</script>

<main class="">

   <form class="flex-col p-1">
      <LoginInputs></LoginInputs>

      <div class="space-y-1">
         <a class="flex no-underline hover:underline text-[#4137ab] justify-center items-center p-1 " href="https://www.nva.gov.lv/lv/bezdarbnieka-statusa-iegusana">Aizmirsi paroli?</a>
         
         <div class="">
            <SubmitBtn></SubmitBtn>
         </div>
      </div>

   </form>

</main>

<style lang="postcss">

</style>