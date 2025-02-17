<script>
    import { userDataCollectionFormData } from '$lib/stores/UserDataStore';
    import { get } from 'svelte/store';
    import { basicUserDataSchema } from '$lib/validations/userDataValidation';
    import FormInput from '../FormInput.svelte';

    export let nextStep;


    let errors = {};  // Stores validation errors
    

    const submitForm = () => {
        const formData = get(userDataCollectionFormData);

        // Validate using Zod
        const result = basicUserDataSchema.safeParse(formData);

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
            label="Full Name" 
            id="name" 
            placeholder="Full Name" 
            bind:value={$userDataCollectionFormData.name} 
            errors={errors.name || []} 
        />


        <FormInput 
            type="email"
            label="Email" 
            id="email" 
            placeholder="Email Address" 
            bind:value={$userDataCollectionFormData.email} 
            errors={errors.email || []} 
        />

        <FormInput 
            label="Phone Number" 
            id="text" 
            placeholder="Phone Number" 
            bind:value={$userDataCollectionFormData.phone} 
            errors={errors.phone || []} 
        />

        <FormInput 
            type="date"
            label="Date of Birth" 
            id="dob" 
            bind:value={$userDataCollectionFormData.dob} 
            errors={errors.dob || []} 
        />

        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3 cursor-pointer">Next</button>
    </form>
</div>
