<script>
    import SpecialText from "$lib/components/SpecialText.svelte";
    import CountDown from "$lib/components/CountDown.svelte";
</script>

<div class={`flex flex-col flex-nowrap h-full justify-between gap pb-10`}>
    <div class={`flex flex-row flex-wrap justify-between w-full`}>
        <div class={`flex flex-row flex-nowrap justify-between items-center`}>
            <a href={"#"}>
                <p class={`text`}>REVIL</p>
            </a>
        </div>
        <div
            class={`group flex flex-row flex-nowrap justify-between items-center`}
        >
            <a href={"https://maps.app.goo.gl/WXENGyUWthpuWg7Q9"}>
                <p class={`text font-light text-end group-hover:underline`}>
                    12°58'18.8" N
                </p>
                <p class={`text font-light text-end group-hover:underline`}>
                    80°02'34.7" E
                </p>
            </a>
        </div>
    </div>
    <div class={`grid grid-rows-3 gap-12 tab:gap-16 lap:gap-24`}>
        <p class={`text text-center`}>From the department of cyber security</p>
        <SpecialText fore={"REVIL"} back={"2025"} />
        <p class={`text text-center`}>Starts in</p>
        <CountDown />
    </div>
    <div class={`flex flex-wrap mx-auto`}>
        <p class={`text`}>Stay tuned!</p>
    </div>
</div>
