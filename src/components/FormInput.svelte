<script>
    export let label = "";
    export let id = "";
    export let type = "text";
    export let placeholder = "";
    export let value;
    export let errors = [];
    export let options = [];
    export let isDisabled=false;
    let isPasswordVisible = false; 
    
    // Event dispatcher to update value in parent
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

{#if type == "text"}
    <div class="flex flex-col">
        <label for={id} class="ml-3">{label}</label>
        <input 
            type="text" 
            id={id} 
            placeholder={placeholder} 
            bind:value
            disabled={isDisabled}
            class="border-2 border-[#3d3d3d] p-2 px-5 rounded-lg"
        />
        {#if errors.length}
            <p class="text-red-500">{errors[0]}</p>
        {/if}
    </div>
{:else if type == "radioSelect"}
    <div class="flex flex-col">
        <label class="ml-3" for="">{label}</label>
        <div class="flex gap-5 mt-2" role="radiogroup">
            {#each options as option}
                <button
                    type="button"
                    role="radio"
                    aria-checked={value === option}
                    class="p-2 rounded-lg border-2 transition-all duration-200 cursor-pointer"
                    class:border-blue-500={value === option}
                    class:bg-blue-300={value === option}
                    class:text-blue-800={value === option}
                    on:click={() => dispatch("update", { id, value: option })}
                >
                    {option}
                </button>
            {/each}
        </div>
        {#if errors && errors.length}
            <p class="text-red-500">{errors[0]}</p>
        {/if}
    </div>

{:else if type=="email"}
    <div class="flex flex-col">
        <label for={id} class="ml-3">{label}</label>
        <input 
            type="email"
            id={id} 
            placeholder={placeholder} 
            bind:value
            disabled={isDisabled}
            class="border-2 border-[#3d3d3d] p-2 px-5 rounded-lg"
        />
        {#if errors.length}
            <p class="text-red-500">{errors[0]}</p>
        {/if}
    </div>

{:else if type=="date"}
    <div class="flex flex-col">
        <label for={id} class="ml-3">{label}</label>
        <input 
            type="date"
            id={id} 
            placeholder={placeholder} 
            bind:value
            disabled={isDisabled}
            class="border-2 border-[#3d3d3d] p-2 px-5 rounded-lg"
        />
        {#if errors.length}
            <p class="text-red-500">{errors[0]}</p>
        {/if}
    </div>

{:else if type=="password"}
    <div class="flex flex-col">
        <label for={id} class="ml-3">{label}</label>
            <div class="border-2 border-[#3d3d3d] p-2 px-5 rounded-lg focus-within:border-[#ffffff]">
                <input 
                type={isPasswordVisible ? "text" : "password"}
                id={id} 
                placeholder={placeholder} 
                bind:value
                disabled={isDisabled}
                class="focus:outline-0"
            />
           
            <i 
                class='bx bx-show cursor-pointer'
                role="button"
                aria-label="Show password"
                tabindex="0"
                on:mouseover={() => isPasswordVisible = true}
                on:mouseout={() => isPasswordVisible = false}
                on:focus={() => isPasswordVisible = true}
                on:blur={() => isPasswordVisible = false}
            ></i>
        </div>
        {#if errors.length}
            <p class="text-red-500">{errors[0]}</p>
        {/if}
    </div>

{/if}
