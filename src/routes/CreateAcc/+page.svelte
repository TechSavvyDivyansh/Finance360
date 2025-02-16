<script>
    import { fly } from "svelte/transition";

	import BasicDetail from "../../components/createAccountComponents/BasicDetail.svelte";
	import OtherDetails from "../../components/createAccountComponents/OtherDetails.svelte";
	import IncomeStatus from "../../components/createAccountComponents/IncomeStatus.svelte";
	import UsernamePass from "../../components/createAccountComponents/UsernamePass.svelte";

    let currentStep=1
    let nextStep=(current)=>{
        currentStep=currentStep+1
    }

    let prevStep=(current)=>{
        currentStep=currentStep-1
    }

</script>


<div class="flex w-[100vw] h-[100vh] justify-between">
    <div class="image w-[50vw] h-[100vh]">

    </div>
    <div class="w-[50vw] p-10">
        {#if currentStep==1}
            <div out:fly={{ x: -300, duration: 300 }} in:fly={{ x: 300, duration: 300 }} class="absolute">
                <BasicDetail nextStep={nextStep}/>
            </div>
        {/if}
        {#if currentStep==2}
            <div out:fly={{ x: -300, duration: 300 }} in:fly={{ x: 300, duration: 300 }} class="absolute">
                <OtherDetails nextStep={nextStep}/>
            </div>
        {/if}
        {#if currentStep==3}
            <div out:fly={{ x: -300, duration: 300 }} in:fly={{ x: 300, duration: 300 }} class="absolute">
                <IncomeStatus nextStep={nextStep}/>
            </div>
        {/if}
        {#if currentStep==4}
            <div out:fly={{ x: -300, duration: 300 }} in:fly={{ x: 300, duration: 300 }} class="absolute">
                <UsernamePass/>
            </div>
        {/if}
    </div>
    
</div>