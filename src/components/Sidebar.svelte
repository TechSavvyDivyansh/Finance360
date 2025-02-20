<script>
	import { goto } from "$app/navigation";
    import {currentUser} from '$lib/stores/UserDataStore.js'

    let handleLogout=async()=>{
        try {
            const res = await fetch('/api/logout', { method: 'GET' });
            const result = await res.json();
            console.log(result);
            currentUser.set(null)
            // Redirect to login page after logout
            goto('/login')
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }
</script>



<div class="w-[12vw] h-[100vh]  p-10 flex flex-col justify-between ">
    <div class="text-xl"><a href="/">Finance360</a></div>
    <div class="flex flex-col gap-10">
        <a href="/" class="text-xl">Analysis</a>
        <a href="/dashboard/Banks" class="text-xl">Banks</a>
        <a href="/" class="text-xl">Stocks</a>
        <a href="/" class="text-xl">Investments</a>
    </div>
    <button class="text-xl"  on:click={handleLogout}>logout</button>
</div>