import { RegisterFormType } from "@/lib/Zod/AuthSchemas";
import { createClient } from "@/lib/supabase/client";

export async function patientSignup(formData: RegisterFormType) {
  try {
    const supabase = createClient();

    const email = formData.email.trim();
    const password = formData.password;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: formData.fullName,
          phone: formData.phone,
          role: "patient",
        },
      },
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    throw error;
  }
}
