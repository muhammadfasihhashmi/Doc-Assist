"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import {
  Camera,
  User,
  Stethoscope,
  Lock,
  ShieldCheck,
  Trash2,
  Activity,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  BriefcaseMedical,
  Star,
} from "lucide-react";

export default function DoctorProfile() {
  return (
    <div className="space-y-6">
      {/* ───────────────── HEADER ───────────────── */}
      <div>
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1">
          <Activity size={13} className="text-violet-700" />

          <span className="text-xs font-medium text-violet-700">
            Doctor Settings
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          My Profile
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage your personal details, medical information and account
          security.
        </p>
      </div>

      {/* ───────────────── PROFILE CARD ───────────────── */}
      <Card className="overflow-hidden rounded-[30px] border border-slate-200/70 shadow-none">
        <CardContent className="p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="h-24 w-24 border-4 border-violet-100">
                <AvatarFallback className="bg-gradient-to-br from-violet-600 to-indigo-600 text-2xl font-bold text-white">
                  SA
                </AvatarFallback>
              </Avatar>

              <button className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-2xl border-4 border-white bg-white shadow-md transition hover:bg-slate-50">
                <Camera size={15} className="text-violet-700" />
              </button>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Dr. Sarah Ahmed
                </h2>

                <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1">
                  <Star size={12} className="fill-amber-400 text-amber-400" />

                  <span className="text-xs font-semibold text-amber-700">
                    4.9
                  </span>
                </div>
              </div>

              <p className="mt-1 text-sm font-medium text-violet-700">
                Cardiologist
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Lahore General Hospital • 12 years experience
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Button className="h-10 rounded-2xl bg-violet-700 px-5 text-sm font-medium shadow-none hover:bg-violet-800">
                  Upload Photo
                </Button>

                <Button
                  variant="outline"
                  className="h-10 rounded-2xl border-slate-200 px-5 text-sm shadow-none"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ───────────────── PERSONAL INFO ───────────────── */}
      <Card className="rounded-[30px] border border-slate-200/70 shadow-none">
        <CardContent className="p-6">
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100">
              <User size={20} className="text-violet-700" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Personal Information
              </h2>

              <p className="text-sm text-slate-500">
                Your basic account and contact details.
              </p>
            </div>
          </div>

          {/* Fields */}
          <div className="grid gap-5 md:grid-cols-2">
            {/* Full Name */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Full Name
              </Label>

              <Input
                defaultValue="Dr. Sarah Ahmed"
                className="h-11 rounded-2xl border-slate-200 bg-slate-50 text-sm shadow-none focus-visible:ring-violet-400"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Email Address
              </Label>

              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  defaultValue="sarah.ahmed@lgh.pk"
                  className="h-11 rounded-2xl border-slate-200 bg-slate-50 pl-11 text-sm shadow-none focus-visible:ring-violet-400"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Phone Number
              </Label>

              <div className="relative">
                <Phone
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  defaultValue="+92 300 1234567"
                  className="h-11 rounded-2xl border-slate-200 bg-slate-50 pl-11 text-sm shadow-none focus-visible:ring-violet-400"
                />
              </div>
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">City</Label>

              <div className="relative">
                <MapPin
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  defaultValue="Lahore"
                  className="h-11 rounded-2xl border-slate-200 bg-slate-50 pl-11 text-sm shadow-none focus-visible:ring-violet-400"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button className="h-11 rounded-2xl bg-violet-700 px-5 text-sm font-semibold shadow-none hover:bg-violet-800">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ───────────────── PROFESSIONAL INFO ───────────────── */}
      <Card className="rounded-[30px] border border-slate-200/70 shadow-none">
        <CardContent className="p-6">
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100">
              <Stethoscope size={20} className="text-violet-700" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Professional Information
              </h2>

              <p className="text-sm text-slate-500">
                Your specialization, qualifications and consultation details.
              </p>
            </div>
          </div>

          {/* Fields */}
          <div className="grid gap-5 md:grid-cols-2">
            {/* Specialization */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Specialization
              </Label>

              <div className="relative">
                <BriefcaseMedical
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  defaultValue="Cardiologist"
                  className="h-11 rounded-2xl border-slate-200 bg-slate-50 pl-11 text-sm shadow-none focus-visible:ring-violet-400"
                />
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Experience (Years)
              </Label>

              <Input
                type="number"
                defaultValue="12"
                className="h-11 rounded-2xl border-slate-200 bg-slate-50 text-sm shadow-none focus-visible:ring-violet-400"
              />
            </div>

            {/* Qualification */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Qualification
              </Label>

              <div className="relative">
                <GraduationCap
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  defaultValue="FCPS (Cardiology), MBBS"
                  className="h-11 rounded-2xl border-slate-200 bg-slate-50 pl-11 text-sm shadow-none focus-visible:ring-violet-400"
                />
              </div>
            </div>

            {/* Fee */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Consultation Fee (Rs.)
              </Label>

              <Input
                type="number"
                defaultValue="2000"
                className="h-11 rounded-2xl border-slate-200 bg-slate-50 text-sm shadow-none focus-visible:ring-violet-400"
              />
            </div>

            {/* Bio */}
            <div className="md:col-span-2 space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Professional Bio
              </Label>

              <textarea
                rows={4}
                defaultValue="Experienced Cardiologist with 12 years of clinical practice at Lahore General Hospital, specializing in interventional cardiology and heart failure management."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:ring-2 focus:ring-violet-400 resize-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <Button className="h-11 rounded-2xl bg-violet-700 px-5 text-sm font-semibold shadow-none hover:bg-violet-800">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ───────────────── SECURITY ───────────────── */}
      <Card className="rounded-[30px] border border-slate-200/70 shadow-none">
        <CardContent className="p-6">
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100">
              <Lock size={20} className="text-violet-700" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">Security</h2>

              <p className="text-sm text-slate-500">
                Change your account password securely.
              </p>
            </div>
          </div>

          {/* Passwords */}
          <div className="max-w-xl space-y-5">
            {["Current Password", "New Password", "Confirm New Password"].map(
              (label) => (
                <div key={label} className="space-y-2">
                  <Label className="text-sm font-medium text-slate-700">
                    {label}
                  </Label>

                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="h-11 rounded-2xl border-slate-200 bg-slate-50 text-sm shadow-none focus-visible:ring-violet-400"
                  />
                </div>
              ),
            )}
          </div>

          <div className="mt-6">
            <Button className="h-11 rounded-2xl bg-violet-700 px-5 text-sm font-semibold shadow-none hover:bg-violet-800">
              Update Password
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ───────────────── DANGER ZONE ───────────────── */}
      <Card className="rounded-[30px] border border-red-200 shadow-none">
        <CardContent className="p-6">
          {/* Header */}
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50">
              <ShieldCheck size={20} className="text-red-600" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-red-700">
                Danger Zone
              </h2>

              <p className="text-sm text-slate-500">
                Permanent and irreversible actions.
              </p>
            </div>
          </div>

          <Separator className="mb-5 bg-red-100" />

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Delete Account
              </h3>

              <p className="mt-1 max-w-md text-sm text-slate-500">
                Permanently remove your doctor account and associated records
                from the platform.
              </p>
            </div>

            <Button
              variant="outline"
              className="h-11 rounded-2xl border-red-200 px-5 text-sm font-medium text-red-600 shadow-none hover:bg-red-50"
            >
              <Trash2 size={15} />
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
