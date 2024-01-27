import { string, z } from "zod";

const schema = z.object({
  name: z.string().min(6),
});

export default schema;
