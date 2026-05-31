import { supabaseAdmin } from "@/lib/supabase/admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email: body.email.trim(),
      password: body.password,
      email_confirm: true,
      user_metadata: {
        name: body.fullName,
        phone: body.phone,
        role: "doctor",
      },
    });

    if (error || !data?.user) {
      return Response.json(
        { error: error?.message || "User creation failed" },
        { status: 400 },
      );
    }

    return Response.json({
      success: true,
      userId: data.user.id,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Server error";

    return Response.json({ error: message }, { status: 500 });
  }
}
