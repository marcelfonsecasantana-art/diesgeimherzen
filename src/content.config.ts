import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artikel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artikel' }),
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
