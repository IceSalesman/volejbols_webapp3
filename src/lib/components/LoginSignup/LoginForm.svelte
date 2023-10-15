<script lang="ts">
	import SubmitBtn from './SubmitBtn.svelte';

	let inputEmail = 'E-pasta adrese';
	let inputPass = 'Parole';
</script>

<form method="post" action="" class="flex-col p-1">
	<div class="space-y-1">
      <div>
         <input
            type="email"
            name="email"
            class="flex w-full p-1 rounded"
            placeholder={inputEmail}
            required
         />
      </div>
      <div>
         <input
            type="password"
            name="password"
            class="flex w-full p-1 rounded"
            placeholder={inputPass}
            required
         />
      </div>
      <div class="space-y-1">
         <a
            class="flex no-underline hover:underline text-[#4137ab] justify-center items-center p-1"
            href="https://www.nva.gov.lv/lv/bezdarbnieka-statusa-iegusana">Aizmirsi paroli?</a
         >
         <div>
            <SubmitBtn />
         </div>
      </div>
   </div>
</form>
