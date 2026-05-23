import z from "zod";

export const doctorSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  password: z.string().min(8),
  specialization: z.string().min(1),

  experience: z.number(),
  qualification: z.string().min(2),
  fee: z.number(),

  bio: z.string().optional(),
});

export type DoctorForm = z.infer<typeof doctorSchema>;
