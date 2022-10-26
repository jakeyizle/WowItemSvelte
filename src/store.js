import { writable, derived, get } from 'svelte/store';

export const token = writable('');
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
let urlencoded = new URLSearchParams();
urlencoded.append("client_id", import.meta.env['VITE_CLIENT_ID']);
urlencoded.append("client_secret", import.meta.env['VITE_CLIENT_SECRET']);
urlencoded.append("grant_type", "client_credentials");
const data = await fetch("https://us.battle.net/oauth/token", {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
});
const response = await data.text();
const jsonRes = JSON.parse(response).access_token;
token.set(jsonRes);

export const region = writable('us');
export const realmUrl = derived(
    region,
    $region => `https://${$region}.api.blizzard.com/data/wow/realm/index?namespace=dynamic-${$region}&locale=en_US&access_token=${get(token)}`
)
