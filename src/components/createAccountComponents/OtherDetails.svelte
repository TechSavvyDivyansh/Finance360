<script>
    import { userDataCollectionFormData } from '$lib/stores/UserDataStore';
    import { get } from 'svelte/store';
    import { userOtherDetailSchema } from '$lib/validations/userDataValidation';
	import FormInput from '../FormInput.svelte';
    
    export let nextStep;

    let errors = {};  // Stores validation errors

    

    const submitForm = () => {
        const formData = get(userDataCollectionFormData);

        // Validate using Zod
        const result = userOtherDetailSchema.safeParse(formData);

        if (!result.success) {
            // Extract errors from Zod
            errors = result.error.flatten().fieldErrors;
            return;  // Stop form submission
        }

        // If validation passes, proceed
        errors = {};  // Clear errors
        nextStep(2)
    };
</script>











<div class="flex flex-col gap-5">
    <form on:submit|preventDefault={submitForm}>
        <FormInput 
            label="Address Line 1" 
            id="addressLine1" 
            placeholder="Address Line 1" 
            bind:value={$userDataCollectionFormData.addressLine1} 
            errors={errors.addressLine1 || []} 
        />

        <FormInput 
            label="Address Line 2" 
            id="addressLine2" 
            placeholder="Address Line 2" 
            bind:value={$userDataCollectionFormData.addressLine2} 
            errors={errors.addressLine2 || []} 
        />

        <FormInput 
            label="City" 
            id="city" 
            placeholder="City" 
            bind:value={$userDataCollectionFormData.city} 
            errors={errors.city || []} 
        />

        <FormInput 
            label="State" 
            id="state" 
            placeholder="State" 
            bind:value={$userDataCollectionFormData.state} 
            errors={errors.state || []} 
        />

        <FormInput 
            label="Pincode" 
            id="pincode" 
            placeholder="Pincode" 
            bind:value={$userDataCollectionFormData.pincode} 
            errors={errors.pincode || []} 
        />

        


        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3 cursor-pointer">Next</button>
    </form>
</div>
