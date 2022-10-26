<!-- <script>
    async function getRealms() {
        let url = `${baseUrl}/data/wow/realm/index?namespace=dynamic-${selectedRegion}&locale=en_US&access_token=${token}`;
        let response = await fetch(url);
        let jsonRes = await response.json();
        realms = jsonRes.realms.sort(compare);
    }
    async function getCharacter() {
        let url = `${baseUrl}/profile/wow/character/${selectedRealm}/${characterName.toLowerCase()}/equipment?namespace=profile-${selectedRegion}&locale=en_US&access_token=${token}`;
        let response = await fetch(url);
        character = await response.json();
    }

    
</script> -->
