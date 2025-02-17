<script>
    // import { userDataCollectionFormData } from '$lib/stores/UserDataStore';
    import { userDataCollectionFormData } from '$lib/stores/UserDataStore';
    import { get } from 'svelte/store';
    import { userAuthSchema } from '$lib/validations/userDataValidation';
    import FormInput from '../FormInput.svelte';
    import { goto } from '$app/navigation';



    let errors = {};  // Stores validation errors
    

    const submitForm = () => {
        const formData = get(userDataCollectionFormData);

        // Validate using Zod
        const result = userAuthSchema.safeParse(formData);

        if (!result.success) {
            // Extract errors from Zod
            errors = result.error.flatten().fieldErrors;
            return;  // Stop form submission
        }

        // If validation passes, proceed
        errors = {};  // Clear errors
        goto("/dashboard")
    };

</script>


<div class="flex flex-col gap-5">
    <form on:submit|preventDefault={submitForm}>
        <FormInput 
            label="username" 
            id="username" 
            placeholder="username" 
            bind:value={$userDataCollectionFormData.email} 
            isDisabled={true}
        />

        <FormInput 
            label="Password" 
            id="password"
            type="password" 
            placeholder="Password" 
            bind:value={$userDataCollectionFormData.password} 
            errors={errors.password || []} 
        />

        <FormInput 
            label="Confirm Password" 
            id="confirmPassword"
            type="password" 
            placeholder="ConfirmPassword" 
            bind:value={$userDataCollectionFormData.confirmPassword} 
            errors={errors.confirmPassword || []} 
        />
      
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3 cursor-pointer">Next</button>
    </form>
</div>