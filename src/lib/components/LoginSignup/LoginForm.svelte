<script lang="ts">
	let inputEmail = 'E-pasta adrese';
	let inputPass = 'Parole';
</script>

<form method="post" action="" class="h-full">
	<div class="h-full flex flex-col justify-evenly items-center">
      <div>
         <input
            type="email"
            name="email"
            class="border p-1 rounded"
            placeholder={inputEmail}
            required
         />
      </div>
      <div class="">
         <input
            type="password"
            name="password"
            class="border p-1 rounded"
            placeholder={inputPass}
            required
         />
      </div>
      <div>
         <a
            class="flex no-underline hover:underline text-[#4137ab] justify-center items-center p-1"
            href="https://www.nva.gov.lv/lv/bezdarbnieka-statusa-iegusana">Aizmirsi paroli?</a
         >
      </div>
      <div class="flex flex-col items-center">
         <button type="submit" class="p-1 px-4 items-center cursor-pointer bg-gray-100 rounded text-lg font-bold text-sky-500 hover:bg-gray-200">Pieslēgties</button>
      </div>
   </div>
</form>
