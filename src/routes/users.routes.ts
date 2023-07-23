import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { z } from 'zod';
import { randomUUID } from 'crypto';

export async function usersRoutes(app: FastifyInstance) {
  app.get('/users', async () => {
    const users = await prisma.user.findMany({
      orderBy: {
        created_at: 'asc',
      }
    });

    return users;
  });

  app.get('/users/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params)

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return user;
  });

  app.post('/users', async (request) => {
    const bodySchema = z.object({
      name: z.string(),
      username: z.string(),
      email: z.string(),
      password: z.string(),
      avatarURL: z.string(),
      admin: z.coerce.boolean().default(false),
    });

    const { name, username, email, password, avatarURL, admin } = bodySchema.parse(request.body);

    const user = await prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        username,
        email,
        password,
        avatarURL,
        admin
      }
    });

    return user;
  });

  app.put('/users/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      name: z.string(),
      username: z.string(),
      email: z.string(),
      password: z.string(),
      avatarURL: z.string(),
      admin: z.coerce.boolean().default(false),
    });

    const { name, username, email, password, avatarURL, admin } = bodySchema.parse(request.body);

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        username,
        email,
        password,
        avatarURL,
        admin
      },
    });

    return user;
  });

  app.delete('/users/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prisma.user.delete({
      where: {
        id,
      },
    });
  });
}
