import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const createUserSchema = z.object({
  name: z.string(),
  password: z.string(),
  email: z.string().email(),
});

export class CreateUserSchemaDTO extends createZodDto(createUserSchema) {}
