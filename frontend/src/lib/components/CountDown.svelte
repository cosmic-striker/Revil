<script>
    import { onMount } from "svelte";

    let targetTime = new Date("2025-02-10T00:00:00").getTime();
    let remainingTime = calculateTimeLeft(targetTime);

    function calculateTimeLeft(target) {
        const now = new Date().getTime();
        const diff = Math.max(target - now, 0);
        const seconds = Math.floor(diff / 1000) % 60;
        const minutes = Math.floor(diff / (1000 * 60)) % 60;
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        return { days, hours, minutes, seconds };
    }

    onMount(() => {
        timer = setInterval(() => {
            remainingTime = calculateTimeLeft(targetTime);
            if (
                remainingTime.days === 0 &&
                remainingTime.hours === 0 &&
                remainingTime.minutes === 0 &&
                remainingTime.seconds === 0
            ) {
                clearInterval(timer);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    });
</script>

<div class={`flex flex-row justify-around mx-auto gap-5 tab:gap`}>
    <div class={`flex flex-col justify-around h-fit tab:gap-3 lap:gap-5`}>
        <p
            class={`text text-red text-4xl tab:text-spl-ls lap:text-md text-center`}
        >
            {remainingTime.days}
        </p>
        <p class={`text text-center`}>Days</p>
    </div>
    <div class={`flex flex-col justify-around h-fit tab:gap-3 lap:gap-5`}>
        <p
            class={`text text-red text-4xl tab:text-spl-ls lap:text-md text-center`}
        >
            {remainingTime.hours}
        </p>
        <p class={`text text-center`}>Hours</p>
    </div>
    <div class={`flex flex-col justify-around h-fit tab:gap-3 lap:gap-5`}>
        <p
            class={`text text-red text-4xl tab:text-spl-ls lap:text-md text-center`}
        >
            {remainingTime.minutes}
        </p>
        <p class={`text text-center`}>Minutes</p>
    </div>
    <div class={`flex flex-col justify-around h-fit tab:gap-3 lap:gap-5`}>
        <p
            class={`text text-red text-4xl tab:text-spl-ls lap:text-md text-center`}
        >
            {remainingTime.seconds}
        </p>
        <p class={`text text-center`}>Seconds</p>
    </div>
</div>
