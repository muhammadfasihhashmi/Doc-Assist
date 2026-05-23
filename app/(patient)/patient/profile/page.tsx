"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Lock, Camera, ShieldCheck, Trash2 } from "lucide-react";

export default function PatientProfile() {
  return (
    <div className="flex flex-col gap-6 max-w-full">
      {/* ── HEADER ── */}
      <div>
        <h1 className="text-xl font-bold text-violet-950 tracking-tight">
          My Profile
        </h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Manage your personal information and account settings
        </p>
      </div>

      {/* ── AVATAR SECTION ── */}
      <Card className="border-violet-200 shadow-none">
        <CardContent className="pt-5 pb-5 px-5">
          <div className="flex items-center gap-5">
            <div className="relative">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-violet-100 text-violet-800 text-lg font-bold">
                  MA
                </AvatarFallback>
              </Avatar>
              <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-violet-800 rounded-full flex items-center justify-center border-2 border-white hover:bg-violet-900 transition-colors">
                <Camera size={11} className="text-white" />
              </button>
            </div>
            <div>
              <p className="text-sm font-bold text-violet-950">Muhammad Ali</p>
              <p className="text-xs text-slate-400 mt-0.5">Patient account</p>
              <button className="text-xs text-violet-800 hover:text-violet-950 font-medium mt-1.5 transition-colors">
                Upload new photo
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── PERSONAL INFO ── */}
      <Card className="border-violet-200 shadow-none">
        <CardContent className="pt-5 pb-5 px-5">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 bg-violet-100 rounded-lg flex items-center justify-center">
              <User size={14} className="text-violet-800" />
            </div>
            <h2 className="text-sm font-bold text-violet-950">
              Personal Information
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                Full name
              </Label>
              <Input
                defaultValue="Muhammad Ali"
                className="border-violet-200 focus-visible:ring-violet-400 text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                Date of birth
              </Label>
              <Input
                type="date"
                defaultValue="1995-03-15"
                className="border-violet-200 focus-visible:ring-violet-400 text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                Gender
              </Label>
              <select className="h-10 border border-violet-200 rounded-lg px-3 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-violet-400 bg-white">
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                City
              </Label>
              <Input
                defaultValue="Lahore"
                className="border-violet-200 focus-visible:ring-violet-400 text-sm"
              />
            </div>
          </div>

          <div className="mt-4">
            <Button className="bg-violet-800 hover:bg-violet-900 text-white text-sm font-semibold rounded-lg shadow-none">
              Save changes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ── CONTACT INFO ── */}
      <Card className="border-violet-200 shadow-none">
        <CardContent className="pt-5 pb-5 px-5">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 bg-violet-100 rounded-lg flex items-center justify-center">
              <Mail size={14} className="text-violet-800" />
            </div>
            <h2 className="text-sm font-bold text-violet-950">
              Contact Information
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                Email address
              </Label>
              <div className="relative">
                <Input
                  defaultValue="muhammad.ali@gmail.com"
                  className="border-violet-200 focus-visible:ring-violet-400 text-sm pr-20"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-emerald-600 font-medium">
                  Verified
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                Phone number
              </Label>
              <div className="relative">
                <Input
                  defaultValue="+92 300 1234567"
                  className="border-violet-200 focus-visible:ring-violet-400 text-sm"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Button className="bg-violet-800 hover:bg-violet-900 text-white text-sm font-semibold rounded-lg shadow-none">
              Update contact
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ── CHANGE PASSWORD ── */}
      <Card className="border-violet-200 shadow-none">
        <CardContent className="pt-5 pb-5 px-5">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 bg-violet-100 rounded-lg flex items-center justify-center">
              <Lock size={14} className="text-violet-800" />
            </div>
            <h2 className="text-sm font-bold text-violet-950">
              Change Password
            </h2>
          </div>

          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                Current password
              </Label>
              <Input
                type="password"
                placeholder="••••••••"
                className="border-violet-200 focus-visible:ring-violet-400 text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                New password
              </Label>
              <Input
                type="password"
                placeholder="••••••••"
                className="border-violet-200 focus-visible:ring-violet-400 text-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-violet-950">
                Confirm new password
              </Label>
              <Input
                type="password"
                placeholder="••••••••"
                className="border-violet-200 focus-visible:ring-violet-400 text-sm"
              />
            </div>
          </div>

          <div className="mt-4">
            <Button className="bg-violet-800 hover:bg-violet-900 text-white text-sm font-semibold rounded-lg shadow-none">
              Update password
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ── DANGER ZONE ── */}
      <Card className="border-red-200 shadow-none">
        <CardContent className="pt-5 pb-5 px-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 bg-red-50 rounded-lg flex items-center justify-center">
              <ShieldCheck size={14} className="text-red-600" />
            </div>
            <h2 className="text-sm font-bold text-red-700">Danger Zone</h2>
          </div>
          <Separator className="bg-red-100 mb-4" />
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs font-semibold text-slate-700">
                Delete account
              </p>
              <p className="text-xs text-slate-400 mt-0.5 max-w-xs">
                Permanently delete your account and all data. This action cannot
                be undone.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 text-xs shadow-none flex items-center gap-1.5"
            >
              <Trash2 size={13} /> Delete account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
