import { createClient } from "@/lib/supabase/client";
import { DoctorForm } from "@/lib/Zod/DoctorShemas";

export async function addDoctorService(formData: DoctorForm) {
  const supabase = createClient();

  // 1. Get hospital user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  // 2. Get hospital id
  const { data: hospital, error: hospitalError } = await supabase
    .from("hospitals")
    .select("id")
    .eq("user_id", user.id)
    .single();

  if (hospitalError || !hospital) {
    throw new Error("Hospital not found");
  }

  // 3. Get specialization
  const { data: spec, error: specError } = await supabase
    .from("specializations")
    .select("id")
    .eq("name", formData.specialization)
    .single();

  if (specError || !spec) {
    throw new Error("Specialization not found");
  }

  // 4. CREATE DOCTOR AUTH USER (CALL API)
  const res = await fetch("/api/doctors/create-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.error);
  }

  const doctorUserId = result.userId;

  // 5. INSERT DOCTOR PROFILE
  const { error: doctorError } = await supabase.from("doctors").insert({
    user_id: doctorUserId,
    hospital_id: hospital.id,
    specialization_id: spec.id,
    experience_years: formData.experience,
    qualification: formData.qualification,
    consultation_fee: formData.fee,
    bio: formData.bio || null,
  });

  if (doctorError) {
    throw new Error("Doctor created but profile failed");
  }

  return { success: true };
}
