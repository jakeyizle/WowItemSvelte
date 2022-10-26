<script>
  import { loop_guard } from "svelte/internal";
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import { Regions } from "./static/constants.js";
  import RegionSelect from "./lib/RegionSelect.svelte";
  import { token, realmUrl } from "./store";
  import { onMount } from "svelte";
  import RealmSelect from "./lib/RealmSelect.svelte";
  let selectedRealm;
  let characterName;
</script>

<main>
  <div>
    <RegionSelect />
    <RealmSelect {selectedRealm} />
    <input type="text" bind:value={characterName} />
    <!-- <div>
    <button on:click={async () => await getCharacter()}>Get character</button>
  </div>
  {character && character.equipped_items.map((x) => x.name)} -->
  </div>
</main>

<style>
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } */
</style>
