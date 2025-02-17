<script>
	import BankPopup from "../../../components/BanksComponents/BankPopup.svelte";
    let open=false

</script>


<button class="flex items-center gap-5 text-2xl p-4 bg-gradient-to-tr  from-[#000000] to-[#2f4b3d] shadow-2xl rounded-2xl cursor-pointer" on:click={()=>{open=true}}>
    <i class='bx bxs-bank text-4xl cursor-pointer'></i>
    Add new Bank
</button>
{#if open}
    <BankPopup {open} on:click={()=>{open=false}}/>
{/if}