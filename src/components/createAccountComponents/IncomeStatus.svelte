<script>
    import { userDataCollectionFormData } from '$lib/stores/UserDataStore';
    import { get } from 'svelte/store';
    import { incomeStatusSchema } from '$lib/validations/userDataValidation';
    import FormInput from '../FormInput.svelte';

    export let nextStep;


    let errors = {};  // Stores validation errors
    

    const submitForm = () => {
        const formData = get(userDataCollectionFormData);

        // Validate using Zod
        const result = incomeStatusSchema.safeParse(formData);

        if (!result.success) {
            // Extract errors from Zod
            errors = result.error.flatten().fieldErrors;
            return;  // Stop form submission
        }

        // If validation passes, proceed
        errors = {};  // Clear errors
        nextStep(3)
    };

</script>


<div class="flex flex-col gap-5">
    <form on:submit|preventDefault={submitForm}>
        <FormInput 
            label="PAN Number" 
            id="panNumber" 
            placeholder="PAN Number" 
            bind:value={$userDataCollectionFormData.panNumber} 
            errors={errors.panNumber || []} 
        />

      

        <FormInput 
            type="radioSelect"
            label="Employment Status"
            id="employmentStatus"
            value={$userDataCollectionFormData.occupationType}
            options={["Salaried", "Self-employed", "Student", "Unemployed"]}
            errors={errors.occupationType || []}
            on:update={({ detail }) => $userDataCollectionFormData.occupationType = detail.value}
        />

        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3 cursor-pointer">Next</button>
    </form>
</div>