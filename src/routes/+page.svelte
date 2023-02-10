{#await getGear()}
<h1>Loading gear
{:then gearList}
    {#each gearList as gear}
        {gear.type.name}
    {/each}
{/await}

<script>
</script>
