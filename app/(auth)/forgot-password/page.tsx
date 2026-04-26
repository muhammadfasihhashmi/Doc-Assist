"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MailOpen } from "lucide-react";
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
import {
  ForgotPasswordFormType,
  ForgotPasswordFormSchema,
} from "@/lib/Zod/AuthSchemas";

export default function ForgotPasswordPage() {
  const form = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(ForgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: ForgotPasswordFormType) {
    console.log("Forgot Password Form Data:", values);
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
            {/* Icon */}
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-5">
              <MailOpen size={22} className="text-violet-800" />
            </div>

            {/* Header */}
            <div className="mb-6">
              <h1 className="text-xl font-bold text-violet-950 tracking-tight mb-1">
                Forgot your password?
              </h1>
              <p className="text-sm text-slate-500 leading-relaxed">
                No worries. Enter your email and we&apos;ll send you a reset
                link right away.
              </p>
            </div>

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
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

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-violet-800 hover:bg-violet-900 text-white text-sm font-semibold rounded-lg mt-1 shadow-none"
                >
                  Send reset link
                </Button>
              </form>
            </Form>

            {/* Back to login */}
            <p className="text-center text-xs text-slate-500 mt-5">
              Remembered your password?{" "}
              <Link
                href="/login"
                className="text-violet-800 hover:text-violet-950 font-semibold transition-colors"
              >
                Back to login
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
