import { z } from "zod";

export const academicDepartmentSchema = z.object({
  name: z.string({ required_error: "Academic Department is required." }),
  academicFaculty: z.string({
    required_error: "Please select a academic faculty.",
  }),
});
