import z from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  description: z
    .string()
    .min(2, { message: "Description must be at least 2 characters." }),
  price: z
    .number({ error: "Price must be a number." })
    .min(0, { message: "Price must be at least 0." }),
  stock: z
    .number({ error: "Stock must be a number." })
    .min(0, { message: "Stock must be at least 0." }),
  imageUrl: z.url({ message: "Image URL must be a valid URL." }),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
