import { z } from "zod";

export const sepaRequestSchema = z.object({
  accountId: z.string().uuid(),
  amount: z.number(),
  recipientName: z.string(),
  targetIBAN: z.string(), // IBAN validation
  targetBIC: z.string(), // BIC validation
  reference: z.string(),
});

export const searchParamsSchema = z.object({
  minBalance: z.coerce.number().optional(),
  maxBalance: z.coerce.number().optional(),
  country: z.string().optional(),
  pageSize: z.coerce.number().default(10),
  pageNumber: z.coerce.number().default(0),
});
