"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RegisterFormType, RegisterFormSchema } from "@/lib/Zod/AuthSchemas";
import { Separator } from "@/components/ui/separator";
import { patientSignup } from "@/services/auth.services";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const form = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate: patientSignupApi, isPending } = useMutation({
    mutationKey: ["auth.patient.signup"],
    mutationFn: patientSignup,
    onSuccess: () => {
      toast.success("Account created successfully");
      form.reset();
      router.push("/login");
    },
    onError: (error) => {
      toast.error(error?.message || "Something went wrong");
    },
  });

  async function onSubmit(values: RegisterFormType) {
    if (isPending) return;
    patientSignupApi(values);
  }

  return (
    <div className="min-h-screen bg-violet-50/40 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 bg-violet-800 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="11" y="5" width="2" height="14" fill="white" />
              <rect x="5" y="11" width="14" height="2" fill="white" />
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          <span className="text-base font-semibold text-violet-950 tracking-tight">
            DocAssist
          </span>
        </div>

        <Card className="border-violet-200 shadow-sm">
          <CardContent className="pt-6 pb-6 px-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-xl font-bold text-violet-950 tracking-tight mb-1">
                Create your account
              </h1>
              <p className="text-sm text-slate-500">
                Join DocAssist and book appointments instantly
              </p>
            </div>

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1.5 space-y-0">
                      <FormLabel className="text-xs font-medium text-violet-950">
                        Full name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Muhammad Ali"
                          className="border-violet-200 focus-visible:ring-violet-400 text-sm placeholder:text-slate-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1.5 space-y-0">
                      <FormLabel className="text-xs font-medium text-violet-950">
                        Email address
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="you@example.com"
                          className="border-violet-200 focus-visible:ring-violet-400 text-sm placeholder:text-slate-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1.5 space-y-0">
                      <FormLabel className="text-xs font-medium text-violet-950">
                        Phone number
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+92 300 0000000"
                          className="border-violet-200 focus-visible:ring-violet-400 text-sm placeholder:text-slate-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1.5 space-y-0">
                      <FormLabel className="text-xs font-medium text-violet-950">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          className="border-violet-200 focus-visible:ring-violet-400 text-sm placeholder:text-slate-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Confirm Password */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1.5 space-y-0">
                      <FormLabel className="text-xs font-medium text-violet-950">
                        Confirm password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          className="border-violet-200 focus-visible:ring-violet-400 text-sm placeholder:text-slate-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Terms */}
                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  By creating an account you agree to our{" "}
                  <Link
                    href="#"
                    className="text-violet-800 hover:text-violet-950 font-medium transition-colors"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="text-violet-800 hover:text-violet-950 font-medium transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </p>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-violet-800 hover:bg-violet-900 text-white text-sm font-semibold rounded-lg mt-1 shadow-none"
                  disabled={isPending}
                >
                  Create account
                </Button>
              </form>
            </Form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <Separator className="flex-1 bg-violet-100" />
              <span className="text-xs text-slate-400">or</span>
              <Separator className="flex-1 bg-violet-100" />
            </div>

            {/* Login link */}
            <p className="text-center text-xs text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-violet-800 hover:text-violet-950 font-semibold transition-colors"
              >
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>

        {/* Back to home */}
        <p className="text-center text-xs text-slate-400 mt-6">
          <Link href="/" className="hover:text-violet-800 transition-colors">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
