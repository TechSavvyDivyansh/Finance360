<script>
	import DashboardNavbar from "../../components/DashboardNavbar.svelte";
	import Sidebar from "../../components/Sidebar.svelte";


</script>


<div class="flex">
    <Sidebar/>
    <div class="flex flex-col h-[100vh] w-[87vw]">
        <DashboardNavbar/>
        <div class="h-[95vh] m-5 p-10 bg-[#202020] rounded-3xl">
            <slot/>
        </div>
    </div>
</div>