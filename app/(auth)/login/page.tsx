"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { loginUser } from "@/services/auth.services";
import { LoginFormSchema, LoginFormType } from "@/lib/Zod/AuthSchemas";
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

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: loginUserApi, isPending } = useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      toast.success("Login successful!");

      if (!data?.role || !data?.user) return;

      const roleRoutes = {
        patient: "/patient/dashboard",
        doctor: "/doctor/dashboard",
        hospital: "/hospital/dashboard",
        admin: "/admin/dashboard",
      };

      router.push(roleRoutes[data.role as keyof typeof roleRoutes]);
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  function onSubmit(values: LoginFormType) {
    loginUserApi(values);
  }

  return (
    <div className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4">
      <div className="relative z-10 w-full max-w-md ">
        {/* Card */}
        <Card className="overflow-hidden rounded-3xl border border-violet-100 bg-white/90 shadow-sm backdrop-blur-xl">
          <CardContent className="p-8 sm:p-10">
            {/* Heading */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-violet-950">
                Welcome back
              </h1>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Sign in to continue your healthcare journey with DocAssist
              </p>
            </div>

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
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

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <div className="flex items-center justify-between">
                        <FormLabel className="text-sm font-medium text-slate-700">
                          Password
                        </FormLabel>

                        <Link
                          href="/forgot-password"
                          className="text-xs font-medium text-violet-700 transition-colors hover:text-violet-900"
                        >
                          Forgot password?
                        </Link>
                      </div>

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

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isPending}
                  className="h-12 w-full rounded-xl bg-violet-700 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all hover:bg-violet-800 hover:shadow-violet-300"
                >
                  {isPending ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </Form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-3">
              <Separator className="bg-violet-100" />
            </div>

            {/* Register */}
            <p className="text-center text-sm text-slate-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-violet-700 transition-colors hover:text-violet-900"
              >
                Create one for free
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
