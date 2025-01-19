<script>
    import { fade } from "svelte/transition";

    const characters = [..."0123456789", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

    const gridSize = 100000;
    const cells = Array(gridSize)
        .fill(null)
        .map(() => ({
            char: "*",
        }));
</script>

<div class="grid-container">
    {#each cells as cell}
        <span transition:fade={{ duration: 1000 }} class="cell">
            {cell.char}
        </span>
    {/each}
</div>

<style>
    .grid-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(0.5rem, 1fr));
        grid-template-rows: repeat(auto-fill, minmax(0.5rem, 1fr));
        pointer-events: none;
        user-select: none;
        overflow: hidden;
        z-index: 0;
    }

    .cell {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.45rem;
        color: #2c5530;
        pointer-events: auto;
        user-select: none;
    }
</style>
