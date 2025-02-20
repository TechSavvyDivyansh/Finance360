<script>
    import {currentUser} from '$lib/stores/UserDataStore.js'
    
    
    let user;
    $:user=$currentUser

    console.log(user)
</script>


<p>{user.name}</p>