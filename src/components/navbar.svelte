<script>
    import {currentUser} from '$lib/stores/UserDataStore.js'
    
</script>



<div class="flex justify-between px-14 p-8">
    <div class="">
        <a href="/">FinManage</a>
    </div>
    <div class="flex gap-16 ">
        <a href="/">Features</a>
        <a href="/">Blog</a>
        <a href="/">Saving</a>
        <a href="/">Help</a>
    </div>
    <div class="flex gap-4 items-center">
        <a href="/CreateAcc">Create Account</a>
        {#if $currentUser!=null}
            <button>{$currentUser.name}</button>
        {:else}
            <button><a href="/login" class="px-4 py-1 rounded-2xl bg-white text-black font-semibold">login</a></button>
        {/if}
    </div>
</div>