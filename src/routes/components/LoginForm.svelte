<script>

   import FormContainer from "./FormContainer.svelte";

   import { selectedForm } from "../../stores";

   let label = "Pieslēgties";


</script>
<main class="loginForm">
   <div class="login">
      {label}
   </div>

   
   <form>
      <div class="field">
         <input type="text" placeholder="E-pasta adrese" required>
      </div>
      <div class="field">
         <input type="password" placeholder="Parole" required>
      </div>
      <div class="pass-link">
         <a href="#top">Aizsmirsi paroli?</a>
      </div>
      <div class="field btn">
         <div class="btn-layer"></div>
         <input type="submit" value="Pieslēgties">
      </div>
      
   </form>
</main>





<style>



</style>