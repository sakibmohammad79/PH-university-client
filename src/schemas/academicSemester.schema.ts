import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "This field is required." }),
  Year: z.string({ required_error: "This field is required." }),
  startMonth: z.string({ required_error: "This field is required." }),
  endMonth: z.string({ required_error: "This field is required." }),
});
