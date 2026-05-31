// import { createServerClient } from "@supabase/ssr";
// import { SupabaseClient } from "@supabase/supabase-js";
// import { NextResponse, type NextRequest } from "next/server";

// const ROLE_HOME: Record<string, string> = {
//   patient: "/patient/dashboard",
//   doctor: "/doctor/dashboard",
//   hospital: "/hospital/dashboard",
//   admin: "/admin/dashboard",
// };

// const PROTECTED: Record<string, string> = {
//   "/patient": "patient",
//   "/doctor": "doctor",
//   "/hospital": "hospital",
//   "/admin": "admin",
// };

// const AUTH_ROUTES = ["/login", "/register", "/forgot-password"];

// async function getUserRole(
//   supabase: SupabaseClient,
//   userId: string,
// ): Promise<string | undefined> {
//   const { data } = await supabase
//     .from("profiles")
//     .select("role")
//     .eq("id", userId)
//     .single();
//   return data?.role as string | undefined;
// }

// export async function proxy(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   let response = NextResponse.next({ request });

//   const supabase: SupabaseClient = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!,
//     {
//       cookies: {
//         getAll: () => request.cookies.getAll(),
//         setAll: (cookiesToSet) => {
//           cookiesToSet.forEach(({ name, value }) =>
//             request.cookies.set(name, value),
//           );
//           response = NextResponse.next({ request });
//           cookiesToSet.forEach(({ name, value, options }) =>
//             response.cookies.set(name, value, options),
//           );
//         },
//       },
//     },
//   );

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   // 1. Auth routes — logged-in users go to their dashboard
//   if (AUTH_ROUTES.some((r) => pathname.startsWith(r))) {
//     if (user) {
//       const role = await getUserRole(supabase, user.id);
//       const home = role ? (ROLE_HOME[role] ?? "/") : "/";
//       return NextResponse.redirect(new URL(home, request.url));
//     }
//     return response;
//   }

//   // 2. Protected routes — check login + role
//   const prefix = Object.keys(PROTECTED).find((p) => pathname.startsWith(p));

//   if (prefix) {
//     // Not logged in → send to login
//     if (!user) {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }

//     // Wrong role → send to their own dashboard
//     const role = await getUserRole(supabase, user.id);
//     if (role !== PROTECTED[prefix]) {
//       const home = role ? (ROLE_HOME[role] ?? "/") : "/";
//       return NextResponse.redirect(new URL(home, request.url));
//     }
//   }

//   // 3. Everything else (public routes + api) — let through
//   return response;
// }

// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon\\.ico|favicon\\.svg|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
//   ],
// };
import { createServerClient } from "@supabase/ssr";
import { SupabaseClient } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";

const ROLE_HOME: Record<string, string> = {
  patient: "/patient/dashboard",
  doctor: "/doctor/dashboard",
  hospital: "/hospital/dashboard",
  admin: "/admin/dashboard",
};

// Protected prefix → required role
const PROTECTED: Record<string, string> = {
  "/patient": "patient",
  "/doctor": "doctor",
  "/hospital": "hospital",
  "/admin": "admin",
};

// Only for logged-out users
const AUTH_ROUTES = ["/login", "/register", "/forgot-password"];

// Always public — checked BEFORE protected routes
const PUBLIC_PREFIXES = [
  "/doctors",
  "/hospitals",
  "/about",
  "/contact",
  "/api",
];

async function getUserRole(
  supabase: SupabaseClient,
  userId: string,
): Promise<string | undefined> {
  const { data } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();
  return data?.role as string | undefined;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  let response = NextResponse.next({ request });

  const supabase: SupabaseClient = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 1. Home page — always public
  if (pathname === "/") return response;

  // 2. Public prefixes — always let through before any auth check
  if (PUBLIC_PREFIXES.some((p) => pathname.startsWith(p))) return response;

  // 3. Auth routes — redirect logged-in users to their dashboard
  if (AUTH_ROUTES.some((r) => pathname.startsWith(r))) {
    if (user) {
      const role = await getUserRole(supabase, user.id);
      const home = role ? (ROLE_HOME[role] ?? "/") : "/";
      return NextResponse.redirect(new URL(home, request.url));
    }
    return response;
  }

  // 4. Protected routes — check login + role
  const prefix = Object.keys(PROTECTED).find((p) => pathname.startsWith(p));

  if (prefix) {
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    const role = await getUserRole(supabase, user.id);
    if (role !== PROTECTED[prefix]) {
      const home = role ? (ROLE_HOME[role] ?? "/") : "/";
      return NextResponse.redirect(new URL(home, request.url));
    }
  }

  // 5. Everything else — let through
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|favicon\\.svg|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
