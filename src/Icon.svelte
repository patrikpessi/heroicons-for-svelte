<script>
    export let icon = "";
</script>

{#if icon}
    <span {...$$restProps}>
        {@html icon}
    </span>
{/if}

<style>
    span {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 1em;
        height: 1em;
    }
</style>
