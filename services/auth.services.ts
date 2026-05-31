import { LoginFormType, RegisterFormType } from "@/lib/Zod/AuthSchemas";
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

export async function loginUser({ email, password }: LoginFormType) {
  try {
    const supabase = createClient();

    // 1. Sign in with Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    // 2. Fetch role from profiles table
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    if (profileError) {
      throw new Error(profileError.message);
    }
    console.log(data);

    return {
      user: data.user,
      role: profile.role as "patient" | "doctor" | "hospital" | "admin",
    };
  } catch (error) {
    console.error("Login Error:", error);

    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Something went wrong while logging in.");
  }
}
