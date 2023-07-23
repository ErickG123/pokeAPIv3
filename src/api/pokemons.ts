import axios from "axios";

const baseURL = 'https://pokeapi.co/api/v2/';

async function getPokemonData(pokemonId: any) {
  try {
    const response = await axios.get(baseURL + `/pokemon/${pokemonId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getPokemonBaseInfos(pokemonId: any) {
  const data = await getPokemonData(pokemonId);

  const pokemonBaseInfos = {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    base_experience: data.base_experience,
    is_default: data.is_default,
    order: data.order
  }

  return pokemonBaseInfos;
}

async function getPokemonTypes(pokemonId: any) {
  const data = await getPokemonData(pokemonId);

  const pokemonTypes = data.types;

  return pokemonTypes;
}

async function getPokemonAbilities(pokemonId: any) {
  const data = await getPokemonData(pokemonId);

  const pokemonAbilities = data.abilities;

  return pokemonAbilities;
}

async function getPokemonBaseStats(pokemonId: any) {
  const data = await getPokemonData(pokemonId);

  const pokemonBaseStats = data.stats;

  return pokemonBaseStats;
}

async function getPokemonSprites(pokemonId: any) {
  const data = await getPokemonData(pokemonId);

  const pokemonSprites = data.sprites;

  return pokemonSprites;
}

async function getPokemonMoves(pokemonId: any) {
  const data = await getPokemonData(pokemonId);

  const pokemonMoves = data.moves;

  return pokemonMoves;
}

async function getPokemonHeldItems(pokemonId: any) {
  const data = await getPokemonData(pokemonId);

  const pokemonHeldItems = data.held_items;

  return pokemonHeldItems;
}

async function getPokemonGameIndices(pokemonId: any) {
  const data = await getPokemonData(pokemonId);

  const pokemonGameIndices = data.game_indices;

  return pokemonGameIndices;
}

async function getPokemonPastTypes(pokemonId: any) {
  const data = await getPokemonData(pokemonId);

  const pokemonPastTypes = data.past_types;

  return pokemonPastTypes;
}

async function getPokemonLocationAreaEncounters(pokemonId: any) {
  const data = await getPokemonData(pokemonId);

  const pokemonLocationAreaEncounters = data.location_area_encounters;

  return pokemonLocationAreaEncounters;
}

async function getPokemonForms(pokemonId: any) {
  const data = await getPokemonData(pokemonId);

  const pokemonForms = data.forms;

  return pokemonForms;
}

export {
  getPokemonData,
  getPokemonBaseInfos,
  getPokemonTypes,
  getPokemonAbilities,
  getPokemonBaseStats,
  getPokemonSprites,
  getPokemonMoves,
  getPokemonHeldItems,
  getPokemonGameIndices,
  getPokemonPastTypes,
  getPokemonLocationAreaEncounters,
  getPokemonForms
}
