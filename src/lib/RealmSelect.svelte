<script>
    import { realmUrl } from "../store";
    export let selectedRealm = "";

    let realms;
    realmUrl.subscribe(async (url) => {
        const array = (await getWoWAPI(url)).realms;
        realms = array.sort((a, b) => compare(a, b));
        selectedRealm = realms[0]?.slug;
    });

    function compare(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    async function getWoWAPI(url) {
        let jsonRes;
        try {
            let response = await fetch(url);
            jsonRes = await response.json();
        } catch (e) {
            jsonRes = [];
        }
        console.log("jsonRes", jsonRes);
        return jsonRes;
    }
</script>

{#if realms}
    <select bind:value={selectedRealm}>
        {#each realms as realm}
            <option value={realm.slug}>
                {realm.name}
            </option>
        {/each}
    </select>
{/if}
