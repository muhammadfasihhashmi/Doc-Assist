import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";

export type Appointment = {
  id: string;
  appointment_date: string;
  appointment_time: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  doctor: {
    id: string;
    consultation_fee: number;
    user: {
      name: string;
    };
    specialization: {
      name: string;
    };
    hospital: {
      name: string;
    };
  };
};

async function fetchPatientAppointments(): Promise<Appointment[]> {
  const supabase = createClient();

  // Get logged in user
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  const { data, error } = await supabase
    .from("appointments")
    .select(
      `
      id,
      appointment_date,
      appointment_time,
      status,
      doctor:doctors (
        id,
        consultation_fee,
        user:profiles!doctors_user_id_fkey (
          name
        ),
        specialization:specializations (
          name
        ),
        hospital:hospitals (
          name
        )
      )
    `,
    )
    .eq("patient_id", user.id)
    .order("appointment_date", { ascending: false });

  if (error) throw error;
  return (data as unknown as Appointment[]) ?? [];
}

export function usePatientAppointments() {
  return useQuery({
    queryKey: ["patient-appointments"],
    queryFn: fetchPatientAppointments,
  });
}
