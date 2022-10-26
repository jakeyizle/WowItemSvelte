<script>
  import { Regions } from "../static/constants.js";
  import { region } from "../store";
  let regions = Regions;
  let selectedRegion;
  function onMount() {
    selectedRegion = "us";
  }
</script>

<select
  bind:value={selectedRegion}
  on:change={() => region.set(selectedRegion)}
>
  {#each regions as region}
    <option value={region.value}>
      {region.display}
    </option>
  {/each}
</select>

<style>
</style>
