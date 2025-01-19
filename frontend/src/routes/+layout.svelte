<script lang="ts">
    import "../app.css";
    import NavBar from "$lib/components/NavBar.svelte";
    import BackgroundGrid from "$lib/components/BackgroundGrid.svelte";
    let { children } = $props();
</script>

<div class="h-full">
    {@render children()}
</div>
