<script lang="ts">
    import { onMount } from "svelte";

    interface Props {
        fore?: string;
        back?: string;
    }

    let { fore, back }: Props = $props();

    let showFore = $state(true);

    onMount(() => {
        const interval = setTimeout(() => {
            showFore = !showFore;
        }, 500);

        return () => clearTimeout(interval);
    });
</script>

{#if true}
    <div class="relative">
        <div class={`gradient-circle center-absolute fade-in`}></div>
        <h2
            class={`text center-absolute max-tab:text-spl-ls tracking-[0.5rem] tab:text-spl-md tab:tracking-[1rem] lap:text-spl-lg z-10 fade-in
            ${showFore ? "text-red" : "fore"}`}
        >
            {fore}
        </h2>
        {#if !showFore}
            <h2
                class={`text center-absolute max-tab:text-spl-ls tracking-[0.5rem] tab:text-spl-md tab:tracking-[1rem] lap:text-spl-lg text-red hover:fore fade-in`}
            >
                {back}
            </h2>
        {/if}
    </div>
{/if}
