"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronLeft,
  UserPlus,
  Info,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { DoctorForm, doctorSchema } from "@/lib/Zod/DoctorShemas";
import { addDoctorService } from "@/services/doctor.services";
import { toast } from "sonner";

export default function AddDoctorPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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

  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: (data: DoctorForm) => addDoctorService(data),
    onSuccess: () => {
      toast.success("Doctor account created successfully!");
      reset();
      setTimeout(() => router.push("/hospital/doctors"), 1500);
    },
  });

  const onSubmit = (data: DoctorForm) => mutate(data);

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
          This will create a new DocAssist account for the doctor with role{" "}
          <strong>doctor</strong>. They can log in immediately with the
          credentials you set here.
        </p>
      </div>

      {/* Success */}
      {isSuccess && (
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded-xl px-4 py-3">
          <CheckCircle2 size={14} className="shrink-0" />
          Doctor account created successfully! Redirecting...
        </div>
      )}

      {/* Error */}
      {isError && (
        <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl px-4 py-3">
          <AlertCircle size={14} className="shrink-0 mt-0.5" />
          {(error as Error)?.message ??
            "Something went wrong. Please try again."}
        </div>
      )}

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
              <Label className="text-xs font-medium text-violet-950">
                Full name
              </Label>
              <Input
                placeholder="Dr. Full Name"
                {...register("fullName")}
                className="border-violet-200 focus-visible:ring-violet-400 text-sm"
              />
              {errors.fullName && (
                <p className="text-xs text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                Email
              </Label>
              <Input
                type="email"
                placeholder="doctor@hospital.com"
                {...register("email")}
                className="border-violet-200 focus-visible:ring-violet-400 text-sm"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                Phone
              </Label>
              <Input
                placeholder="+92 300 0000000"
                {...register("phone")}
                className="border-violet-200 focus-visible:ring-violet-400 text-sm"
              />
              {errors.phone && (
                <p className="text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                Password
              </Label>
              <Input
                type="password"
                placeholder="Min. 8 characters"
                {...register("password")}
                className="border-violet-200 focus-visible:ring-violet-400 text-sm"
              />
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
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
              <Label className="text-xs font-medium text-violet-950">
                Specialization
              </Label>
              <select
                {...register("specialization")}
                className="h-10 border border-violet-200 rounded-lg px-3 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-violet-400 bg-white"
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
                <option>Gynecologist</option>
                <option>Ophthalmologist</option>
                <option>ENT Specialist</option>
                <option>Urologist</option>
                <option>Gastroenterologist</option>
                <option>Endocrinologist</option>
                <option>Oncologist</option>
              </select>
              {errors.specialization && (
                <p className="text-xs text-red-500">
                  {errors.specialization.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                Experience (years)
              </Label>
              <Input
                type="number"
                placeholder="e.g. 8"
                {...register("experience", { valueAsNumber: true })}
                className="border-violet-200 focus-visible:ring-violet-400 text-sm"
              />
              {errors.experience && (
                <p className="text-xs text-red-500">
                  {errors.experience.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                Qualification
              </Label>
              <Input
                placeholder="e.g. FCPS, MBBS"
                {...register("qualification")}
                className="border-violet-200 focus-visible:ring-violet-400 text-sm"
              />
              {errors.qualification && (
                <p className="text-xs text-red-500">
                  {errors.qualification.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                Consultation fee (Rs.)
              </Label>
              <Input
                type="number"
                placeholder="e.g. 2000"
                {...register("fee", { valueAsNumber: true })}
                className="border-violet-200 focus-visible:ring-violet-400 text-sm"
              />
              {errors.fee && (
                <p className="text-xs text-red-500">{errors.fee.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label className="text-xs font-medium text-violet-950">
                Bio{" "}
                <span className="text-slate-400 font-normal">(optional)</span>
              </Label>
              <Textarea
                placeholder="Brief professional background..."
                {...register("bio")}
                className="border-violet-200 focus-visible:ring-violet-400 text-sm resize-none"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator className="bg-violet-100" />

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button
          type="submit"
          disabled={isPending || isSuccess}
          className="bg-violet-800 hover:bg-violet-900 text-white text-sm font-semibold rounded-lg shadow-none disabled:opacity-60"
        >
          {isPending ? "Creating account..." : "Create doctor account"}
        </Button>

        <Button
          type="button"
          variant="outline"
          className="border-violet-200 text-violet-800 hover:bg-violet-50 text-sm shadow-none"
          asChild
        >
          <Link href="/hospital/doctors">Cancel</Link>
        </Button>
      </div>
    </form>
  );
}
