<script>
    import { onMount } from "svelte";

    onMount(() => {
        const blockContainer = document.getElementById("blocks");
        const blocksize = 30;
        const screenwidth = window.innerWidth;
        const screenheight = window.innerHeight;
        const cols = Math.floor(screenwidth / blocksize);
        const rows = Math.floor(screenheight / blocksize);
        const numblocks = cols * rows;

        function createGrid() {
            for (let i = 0; i < numblocks; i++) {
                const block = document.createElement("div");
                block.classList.add("block");
                block.dataset.id = i;
                block.addEventListener("mousemove", highlightRandomNeighbors);
                blockContainer.appendChild(block);
            }
        }

        function highlightRandomNeighbors() {
            const index = parseInt(this.dataset.id);
            const neighbors = [
                index - 1,
                index + 1,
                index - cols,
                index + cols,
                index - cols - 1,
                index + cols - 1,
                index - cols + 1,
                index + cols + 1,
            ].filter(
                (i) =>
                    i >= 0 &&
                    i < numblocks &&
                    Math.abs(i % cols) - (index % cols) <= 1,
            );

            this.classList.add("highlight");
            setTimeout(() => {
                this.classList.remove("highlight");
            }, 500);

            shuffleArray(neighbors)
                .slice(0, 1)
                .forEach((i) => {
                    const neighbor = blockContainer.children[i];
                    if (neighbor) {
                        neighbor.classList.add("highlight");
                        setTimeout(() => {
                            neighbor.classList.remove("highlight");
                        }, 500);
                    }
                });
        }

        function shuffleArray(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

        createGrid();
    });
</script>

<div class="blocks-container">
    <div id="blocks"></div>
</div>

<style>
    .blocks-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    #blocks {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        z-index: 0;
        overflow: hidden;
        flex-wrap: wrap;
    }
</style>
