<script>
   import EmailInput from "$lib/components/EmailInput.svelte";
   import PasswordInput from "$lib/components/PasswordInput.svelte";


    let signupLabel = "Reģistrēties"


</script>


<main>
   <div class = "label">
      {signupLabel}
   </div>
    <form action="#" class="signup">
         <div class="field">
            <EmailInput></EmailInput>
         </div>
         <div class="">
            <PasswordInput></PasswordInput>
         </div>
         <div class="">
            <PasswordInput></PasswordInput>
         </div>
        
        
     </form>
</main>




<style lang="postcss">


</style>