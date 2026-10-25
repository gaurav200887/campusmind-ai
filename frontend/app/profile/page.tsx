"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { UserRound, Mail, Shield } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-slate-400">Loading profile...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400">
            Not Logged In
          </h1>

          <p className="mt-2 text-slate-400">
            Please login to view your profile.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">

      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold">
            Student Profile
          </h1>

          <p className="mt-2 text-slate-400">
            Manage your CampusMind AI account.
          </p>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl">

          {/* Profile Header */}
          <div className="border-b border-slate-800 p-8">

            <div className="flex flex-col items-center gap-5 sm:flex-row">

              {/* Profile Photo Placeholder */}
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-cyan-500 text-4xl font-bold shadow-lg shadow-cyan-500/20">
                {user.displayName?.charAt(0).toUpperCase() || "S"}
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  {user.displayName || "Student"}
                </h2>

                <p className="mt-1 text-slate-400">
                  Student
                </p>
              </div>

            </div>

          </div>

          {/* Account Information */}
          <div className="space-y-5 p-8">

            <h3 className="text-xl font-bold">
              Account Information
            </h3>

            {/* Name */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                <UserRound size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Full Name
                </p>

                <p className="mt-1 font-medium">
                  {user.displayName || "Not set"}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                <Mail size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Email
                </p>

                <p className="mt-1 font-medium">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Role */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                <Shield size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Role
                </p>

                <p className="mt-1 font-medium text-cyan-400">
                  Student
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}