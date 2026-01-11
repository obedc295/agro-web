import { defineCollection, z } from 'astro:content';

export const collections = {
  products: defineCollection({
    type: 'content',
    schema: z.object({
      nombre: z.string(),
      principioActivo: z.string(),
      categoria: z.string(),
      concentracion: z.string().optional(),
      presentacion: z.string(),
      uso: z.string(),
      toxicidad: z.string(),
      imagen: z.string(),
    }),
  }),
};
