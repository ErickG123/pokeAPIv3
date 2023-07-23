import fastify from "fastify";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import { pokemonsRoutes } from "./routes/pokemons.routes";
import { pokemonSpeciesRoutes } from "./routes/pokemon_especies.routes";
import { usersRoutes } from "./routes/users.routes";
import { uploadRoutes } from "./routes/upload.routes";
import { resolve } from "path";

const app = fastify();

app.register(multipart);
app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
});

app.register(cors, {
  origin: true,
});

app.register(pokemonsRoutes);
app.register(pokemonSpeciesRoutes);

app.register(usersRoutes);
app.register(uploadRoutes);

export { app };
