import { defineCollection, z } from 'astro:content';

const artikel = defineCollection({
  type: 'content',
  schema: z.object({
    titel: z.string(),
    datum: z.string(),
    autor: z.string(),
    kategorie: z.enum(['Aktuell', 'Spielbericht', 'Transfers', 'Interview', 'Meinung', 'Frauen']),
    beschreibung: z.string(),
    aufmacher: z.boolean().default(false),
}),
});

export const collections = { artikel };
