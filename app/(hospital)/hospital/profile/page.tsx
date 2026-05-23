"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import {
  Building2,
  Phone,
  Lock,
  Camera,
  ShieldCheck,
  Trash2,
  Activity,
  Globe,
  Mail,
  MapPin,
} from "lucide-react";

export default function HospitalProfile() {
  return (
    <div className="space-y-6">
      {/* ───────────────── HEADER ───────────────── */}
      <div>
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1">
          <Activity size={13} className="text-violet-700" />

          <span className="text-xs font-medium text-violet-700">
            Hospital Settings
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Hospital Profile
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage hospital information, contact details and security settings.
        </p>
      </div>

      {/* ───────────────── LOGO CARD ───────────────── */}
      <Card className="overflow-hidden rounded-[30px] border border-slate-200/70 shadow-none">
        <CardContent className="p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            {/* Logo */}
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-violet-600 to-indigo-600 text-2xl font-bold text-white shadow-lg shadow-violet-200">
                LG
              </div>

              <button className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-2xl border-4 border-white bg-white shadow-md transition hover:bg-slate-50">
                <Camera size={15} className="text-violet-700" />
              </button>
            </div>

            {/* Details */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-slate-900">
                Lahore General Hospital
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Government Hospital • Lahore, Pakistan
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Button className="h-10 rounded-2xl bg-violet-700 px-5 text-sm font-medium shadow-none hover:bg-violet-800">
                  Upload Logo
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

      {/* ───────────────── HOSPITAL INFO ───────────────── */}
      <Card className="rounded-[30px] border border-slate-200/70 shadow-none">
        <CardContent className="p-6">
          {/* Section Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100">
              <Building2 size={20} className="text-violet-700" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Hospital Information
              </h2>

              <p className="text-sm text-slate-500">
                Basic hospital details visible to patients.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="grid gap-5 md:grid-cols-2">
            {/* Name */}
            <div className="md:col-span-2 space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Hospital Name
              </Label>

              <Input
                defaultValue="Lahore General Hospital"
                className="h-11 rounded-2xl border-slate-200 bg-slate-50 text-sm shadow-none focus-visible:ring-violet-400"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2 space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Description
              </Label>

              <textarea
                rows={4}
                defaultValue="One of Pakistan's oldest and most trusted public healthcare institutions, established in 1956. Located on Jail Road, Lahore."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:ring-2 focus:ring-violet-400 resize-none"
              />
            </div>

            {/* Type */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Hospital Type
              </Label>

              <select className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition focus:ring-2 focus:ring-violet-400">
                <option>Government</option>
                <option>Private</option>
              </select>
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">City</Label>

              <Input
                defaultValue="Lahore"
                className="h-11 rounded-2xl border-slate-200 bg-slate-50 text-sm shadow-none focus-visible:ring-violet-400"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2 space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Full Address
              </Label>

              <div className="relative">
                <MapPin
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  defaultValue="Jail Road, Lahore, Punjab, Pakistan"
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

      {/* ───────────────── CONTACT INFO ───────────────── */}
      <Card className="rounded-[30px] border border-slate-200/70 shadow-none">
        <CardContent className="p-6">
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100">
              <Phone size={20} className="text-violet-700" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Contact Information
              </h2>

              <p className="text-sm text-slate-500">
                Contact methods patients can use to reach you.
              </p>
            </div>
          </div>

          {/* Fields */}
          <div className="grid gap-5 md:grid-cols-2">
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
                  defaultValue="+92 42 9921 0000"
                  className="h-11 rounded-2xl border-slate-200 bg-slate-50 pl-11 text-sm shadow-none focus-visible:ring-violet-400"
                />
              </div>
            </div>

            {/* Website */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Website
              </Label>

              <div className="relative">
                <Globe
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <Input
                  defaultValue="www.lgh.edu.pk"
                  className="h-11 rounded-2xl border-slate-200 bg-slate-50 pl-11 text-sm shadow-none focus-visible:ring-violet-400"
                />
              </div>
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
                  type="email"
                  defaultValue="info@lgh.edu.pk"
                  className="h-11 rounded-2xl border-slate-200 bg-slate-50 pl-11 text-sm shadow-none focus-visible:ring-violet-400"
                />
              </div>
            </div>

            {/* Emergency */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">
                Emergency Line
              </Label>

              <Input
                defaultValue="+92 42 9921 1115"
                className="h-11 rounded-2xl border-slate-200 bg-slate-50 text-sm shadow-none focus-visible:ring-violet-400"
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
                Update your account password securely.
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
                Permanent and destructive actions.
              </p>
            </div>
          </div>

          <Separator className="mb-5 bg-red-100" />

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Delete Hospital Account
              </h3>

              <p className="mt-1 max-w-md text-sm text-slate-500">
                Permanently remove hospital records, doctors and appointment
                history from the system.
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
