import { FastifyInstance } from "fastify";
import { z } from "zod";
import { getPokemonAbilities, getPokemonBaseInfos, getPokemonBaseStats, getPokemonData, getPokemonForms, getPokemonGameIndices, getPokemonHeldItems, getPokemonLocationAreaEncounters, getPokemonMoves, getPokemonPastTypes, getPokemonSprites, getPokemonTypes } from "../api/pokemons";

export async function pokemonsRoutes(app: FastifyInstance) {
  const paramsSchema = z.object({
    id: z.string(),
  });

  app.get('/pokemon/:id', async (request, response) => {
    const { id } = paramsSchema.parse(request.params);
    const pokemon = await getPokemonData(id);

    response.send(pokemon);
  });

  app.get('/pokemon/:id/baseInfos', async (request, response) => {
    const { id } = paramsSchema.parse(request.params);
    const pokemonBaseInfos = await getPokemonBaseInfos(id);

    response.send(pokemonBaseInfos);
  });

  app.get('/pokemon/:id/types', async (request, response) => {
    const { id } = paramsSchema.parse(request.params);
    const types = await getPokemonTypes(id);

    response.send(types);
  });

  app.get('/pokemon/:id/abilities', async (request, response) => {
    const { id } = paramsSchema.parse(request.params);
    const abilities = await getPokemonAbilities(id);

    response.send(abilities);
  });

  app.get('/pokemon/:id/baseStats', async (request, response) => {
    const { id } = paramsSchema.parse(request.params);
    const baseStats = await getPokemonBaseStats(id);

    response.send(baseStats);
  });

  app.get('/pokemon/:id/sprites', async (request, response) => {
    const { id } = paramsSchema.parse(request.params);
    const sprites = await getPokemonSprites(id);

    response.send(sprites);
  });

  app.get('/pokemon/:id/moves', async (request, response) => {
    const { id } = paramsSchema.parse(request.params);
    const moves = await getPokemonMoves(id);

    response.send(moves);
  });

  app.get('/pokemon/:id/heldItems', async (request, response) => {
    const { id } = paramsSchema.parse(request.params);
    const moves = await getPokemonHeldItems(id);

    response.send(moves);
  });

  app.get('/pokemon/:id/gameIndices', async (request, response) => {
    const { id } = paramsSchema.parse(request.params);
    const gameIndices = await getPokemonGameIndices(id);

    response.send(gameIndices);
  });

  app.get('/pokemon/:id/pastTypes', async (request, response) => {
    const { id } = paramsSchema.parse(request.params);
    const pastTypes = await getPokemonPastTypes(id);

    response.send(pastTypes);
  });

  app.get('/pokemon/:id/locationAreaEncounters', async (request, response) => {
    const { id } = paramsSchema.parse(request.params);
    const locationAreaEncounters = await getPokemonLocationAreaEncounters(id);

    response.send(locationAreaEncounters);
  });

  app.get('/pokemon/:id/forms', async (request, response) => {
    const { id } = paramsSchema.parse(request.params);
    const forms = await getPokemonForms(id);

    response.send(forms);
  });
}
