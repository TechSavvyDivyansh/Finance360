<script>
    import hdfc from '/src/assets/HDFC-Bank-Limited-Symbol.png'
    let banks=[
        {
            name:"HDFC",
            logo:"/src/assets/HDFC-Bank-Limited-Symbol.png"
        },
        {
            name:"AXIS",
            logo:"/src/assets/Axis-Bank-PNG-Logo-.png"
        },
        {
            name:"ICICI",
            logo:"/src/assets/icici-bank-ltd-2021-1024x576.png"
        },
        {
            name:"Kotak mahindra",
            logo:"/src/assets/Kotak_Mahindra_Bank_logo.png"
        },
        {
            name:"SBI",
            logo:"/src/assets/SBI-Logo.png"
        },
    ]

</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#00000091] backdrop-blur-sm flex items-center justify-center cursor-pointer"  on:click|self>
    <div class="h-[80vh] w-[35vw] bg-[#1a1a1a] shadow-2xl rounded-xl cursor-default p-10 overflow-hidden">
        <p class="text-[#a8a8a8] text-xl">Select your bank</p>
        <div class="flex py-8 gap-12 overflow-x-scroll custom-scrollbar">
            {#each banks as bank}
                <img src={bank.logo} alt={bank.name} class="w-[150px] h-[100px] object-cover rounded-lg cursor-pointer bg-[#3a3a3a] p-2">
            {/each}
        </div>
    </div>
</div>