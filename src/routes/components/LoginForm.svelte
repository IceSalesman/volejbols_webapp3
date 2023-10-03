<script>
   import EmailInput from "./EmailInput.svelte";
   import PasswordInput from "./PasswordInput.svelte";


   let label = "Pieslēgties";


</script>
<main class="">
   <div class="">
      {label}
   </div>

   
   <form>
      <div class="field">
         <EmailInput></EmailInput>
      </div>
      <div class="">
         <PasswordInput></PasswordInput>
      </div>
         
      <div class="pass-link">
         <a href="#top">Aizsmirsi paroli?</a>
      </div>
      <div class="cursor-pointer">
         <div class="btn-layer"></div>
         <input type="submit" value="{label}">
      </div>
      
   </form>
</main>





<style lang="postcss">

   

</style>