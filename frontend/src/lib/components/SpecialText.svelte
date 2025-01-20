<script lang="ts">
    import { onMount } from "svelte";

    interface Props {
        fore?: string;
        back?: string;
    }

    let { fore, back }: Props = $props();

    let onHover = $state(true);

    onMount(() => {
        const interval = setTimeout(() => {
            onHover = !onHover;
        }, 500);

        return () => clearTimeout(interval);
    });
</script>

{#if true}
    <div class="group relative">
        <div class={`gradient-circle center-absolute fade-in z-0`}></div>
        <h2
            class={`text center-absolute max-tab:text-spl-ls tracking-[0.5rem] tab:text-spl-md tab:tracking-[1rem] z-10 lap:text-spl-lg fade-in group-hover:text-red
            ${onHover ? "text-red" : "fore"}`}
        >
            {fore}
        </h2>
        {#if !onHover}
            <h2
                class={`text center-absolute max-tab:text-spl-ls tracking-[0.5rem] tab:text-spl-md tab:tracking-[1rem] lap:text-spl-lg text-red hover:fore fade-in group-hover:hidden`}
            >
                {back}
            </h2>
        {/if}
    </div>
{/if}
