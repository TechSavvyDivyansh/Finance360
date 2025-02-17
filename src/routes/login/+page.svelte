<script>
	import FormInput from "../../components/FormInput.svelte";
    import {currentUser, loginFormData} from '$lib/stores/UserDataStore.js'
	import { goto } from "$app/navigation";


    let handleLoginSubmit=async()=>{
        try {
            const loginData=$loginFormData
            const res=await fetch('/api/login',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(loginData)
            })

            const result=await res.json()
            console.log(result);
            
            if(res.ok)
            {
                document.cookie = `userData=${JSON.stringify(result.userData)}; path=/; max-age=${7 * 24 * 60 * 60}`;
                currentUser.set(result.userData)
                goto('/dashboard')
            }
            else
            {

            }
            
        } catch (error) {
            
        }
    }

</script>


<div class="flex">
    <div class="w-[50vw] h-[100vh] p-14 flex flex-col justify-between">
        <div class="">Finance360</div>
        <div class="flex flex-col gap-15">
            <div class="">
                <p class="text-5xl">Welcome Back!</p>
                <p class="text-2xl">Please Login to your account</p>
            </div>
            <form>
                <FormInput
                    label="Username"
                    placeholder="Username"
                    type="text"
                    id="Username"
                    bind:value={$loginFormData.username} 
                />
                <FormInput
                    label="Password"
                    placeholder="Password"
                    type="password"
                    id="Password"
                    bind:value={$loginFormData.password} 
                />
                <div class="">
                    <button class="bg-[#204418] p-5 rounded-xl" on:click={handleLoginSubmit}>Login</button>
                    <a href="/CreateAcc"><button class="bg-[#204418] p-5 rounded-xl cursor-pointer">Create your account</button></a>
                </div>
            </form>
        </div>
        <div class=""></div>
    </div>
    <div class="w-[50vw] h-[100vh]"></div>
</div>