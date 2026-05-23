"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { RegisterFormSchema, RegisterFormType } from "@/lib/Zod/AuthSchemas";

import { patientSignup } from "@/services/auth.services";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

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

  function onSubmit(values: RegisterFormType) {
    if (isPending) return;
    patientSignupApi(values);
  }

  return (
    <div className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 py-10">
      <div className="relative z-10 w-full max-w-2xl">
        <Card className="overflow-hidden rounded-[28px] border border-violet-100 bg-white/90 shadow-sm backdrop-blur-xl">
          <CardContent className="">
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-violet-950">
                Create your account
              </h1>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Join DocAssist and book appointments with trusted doctors
                instantly.
              </p>
            </div>

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-slate-700">
                          Full name
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder="Muhammad Ali"
                            className="h-12 rounded-xl border-violet-200 bg-white text-sm shadow-sm transition-all placeholder:text-slate-400 focus-visible:border-violet-400 focus-visible:ring-violet-300"
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
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-slate-700">
                          Email address
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder="you@example.com"
                            className="h-12 rounded-xl border-violet-200 bg-white text-sm shadow-sm transition-all placeholder:text-slate-400 focus-visible:border-violet-400 focus-visible:ring-violet-300"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-slate-700">
                        Phone number
                      </FormLabel>

                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+92 300 0000000"
                          className="h-12 rounded-xl border-violet-200 bg-white text-sm shadow-sm transition-all placeholder:text-slate-400 focus-visible:border-violet-400 focus-visible:ring-violet-300"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Passwords */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Password */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-slate-700">
                          Password
                        </FormLabel>

                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            className="h-12 rounded-xl border-violet-200 bg-white text-sm shadow-sm transition-all placeholder:text-slate-400 focus-visible:border-violet-400 focus-visible:ring-violet-300"
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
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-slate-700">
                          Confirm password
                        </FormLabel>

                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            className="h-12 rounded-xl border-violet-200 bg-white text-sm shadow-sm transition-all placeholder:text-slate-400 focus-visible:border-violet-400 focus-visible:ring-violet-300"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Terms */}
                <p className="text-xs leading-relaxed text-slate-500">
                  By creating an account, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="font-medium text-violet-700 transition-colors hover:text-violet-900"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-medium text-violet-700 transition-colors hover:text-violet-900"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isPending}
                  className="h-12 w-full rounded-xl bg-violet-700 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all hover:bg-violet-800 hover:shadow-violet-300"
                >
                  {isPending ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>
            </Form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-3">
              <Separator className="bg-violet-100" />
            </div>

            {/* Login */}
            <p className="text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-violet-700 transition-colors hover:text-violet-900"
              >
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
