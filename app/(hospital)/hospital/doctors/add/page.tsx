"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, UserPlus, Info } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DoctorForm, doctorSchema } from "@/lib/Zod/DoctorShemas";

export default function AddDoctorPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DoctorForm>({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      specialization: "",
      experience: 0,
      qualification: "",
      fee: 0,
      bio: "",
    },
  });

  const onSubmit = (data: DoctorForm) => {
    console.log("FORM VALUES 👉", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 max-w-full"
    >
      {/* Back */}
      <Link
        href="/hospital/doctors"
        className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-violet-800 transition-colors font-medium w-fit"
      >
        <ChevronLeft size={14} /> Back to doctors
      </Link>

      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-violet-950 tracking-tight">
          Add New Doctor
        </h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Create a doctor account and link them to your hospital
        </p>
      </div>

      {/* Info */}
      <div className="bg-violet-50 border border-violet-200 rounded-xl px-4 py-3 flex items-start gap-2">
        <Info size={14} className="text-violet-700 mt-0.5 shrink-0" />
        <p className="text-xs text-violet-800 leading-relaxed">
          This will create a new DocAssist account for the doctor.
        </p>
      </div>

      {/* Account Info */}
      <Card className="border-violet-200 shadow-none">
        <CardContent className="pt-5 pb-5 px-5">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 bg-violet-100 rounded-lg flex items-center justify-center">
              <UserPlus size={14} className="text-violet-800" />
            </div>
            <h2 className="text-sm font-bold text-violet-950">
              Account Information
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label>Full name</Label>
              <Input {...register("fullName")} />
              <p className="text-xs text-red-500">{errors.fullName?.message}</p>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label>Email</Label>
              <Input type="email" {...register("email")} />
              <p className="text-xs text-red-500">{errors.email?.message}</p>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label>Phone</Label>
              <Input {...register("phone")} />
              <p className="text-xs text-red-500">{errors.phone?.message}</p>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label>Password</Label>
              <Input type="password" {...register("password")} />
              <p className="text-xs text-red-500">{errors.password?.message}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Info */}
      <Card className="border-violet-200 shadow-none">
        <CardContent className="pt-5 pb-5 px-5">
          <h2 className="text-sm font-bold text-violet-950 mb-5">
            Professional Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label>Specialization</Label>
              <select
                {...register("specialization")}
                className="h-10 border border-violet-200 rounded-lg px-3 text-sm"
              >
                <option value="">Select specialization</option>
                <option>Cardiologist</option>
                <option>Neurologist</option>
                <option>Dermatologist</option>
                <option>Pediatrician</option>
                <option>Orthopedic</option>
                <option>Dentist</option>
                <option>Psychiatrist</option>
                <option>General Physician</option>
              </select>
              <p className="text-xs text-red-500">
                {errors.specialization?.message}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label>Experience</Label>
              <Input
                type="number"
                {...register("experience", { valueAsNumber: true })}
              />
              <p className="text-xs text-red-500">
                {errors.experience?.message}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label>Qualification</Label>
              <Input {...register("qualification")} />
              <p className="text-xs text-red-500">
                {errors.qualification?.message}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label>Fee</Label>
              <Input
                type="number"
                {...register("fee", { valueAsNumber: true })}
              />
              <p className="text-xs text-red-500">{errors.fee?.message}</p>
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label>Bio (optional)</Label>
              <Textarea {...register("bio")} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator className="bg-violet-100" />

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-violet-800 hover:bg-violet-900"
        >
          Create doctor account
        </Button>

        <Button variant="outline" asChild>
          <Link href="/hospital/doctors">Cancel</Link>
        </Button>
      </div>
    </form>
  );
}
