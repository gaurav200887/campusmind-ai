"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { getUserRole, type UserRole } from "@/lib/getUserRole";

type AppUser = {
  uid: string;
  name?: string;
  email?: string;
  role?: UserRole;
};

export default function AdminPage() {
  const [users, setUsers] = useState<AppUser[]>([]);
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const loadUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));

    const list: AppUser[] = snapshot.docs.map((item) => {
      const data = item.data();

      return {
        uid: item.id,
        name: data.name,
        email: data.email,
        role: data.role || "student",
      };
    });

    setUsers(list);
  };

  useEffect(() => {
    const init = async () => {
      const role = await getUserRole();
      setCurrentRole(role);

      if (role === "creator") {
        await loadUsers();
      }

      setLoading(false);
    };

    init();
  }, []);

  const changeRole = async (
    uid: string,
    newRole: "admin" | "student"
  ) => {
    if (currentRole !== "creator") {
      return;
    }

    if (uid === auth.currentUser?.uid) {
      setMessage("You cannot change your own Creator role here.");
      return;
    }

    try {
      await updateDoc(doc(db, "users", uid), {
        role: newRole,
      });

      setMessage(`Role updated to ${newRole}.`);
      await loadUsers();
    } catch (error) {
      console.error(error);
      setMessage("Unable to update role.");
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading...
      </main>
    );
  }

  if (currentRole !== "creator") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-400">
            Access Denied
          </h1>

          <p className="mt-3 text-slate-400">
            Only the Creator can manage administrator roles.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-medium text-cyan-400">
            Creator Control Panel
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            User Management
          </h1>

          <p className="mt-2 text-slate-400">
            Promote students to Admin or remove Admin access.
          </p>
        </div>

        {message && (
          <div className="mb-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-cyan-300">
            {message}
          </div>
        )}

        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.uid}
              className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="font-bold">
                  {user.name || "Student"}
                </h2>

                <p className="text-sm text-slate-400">
                  {user.email}
                </p>

                <p className="mt-2 text-sm">
                  Role:{" "}
                  <span className="font-semibold text-cyan-400">
                    {user.role}
                  </span>
                </p>
              </div>

              {user.role !== "creator" && (
                <div className="flex gap-3">
                  {user.role !== "admin" && (
                    <button
                      onClick={() => changeRole(user.uid, "admin")}
                      className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold transition hover:bg-cyan-400"
                    >
                      Make Admin
                    </button>
                  )}

                  {user.role === "admin" && (
                    <button
                      onClick={() => changeRole(user.uid, "student")}
                      className="rounded-xl border border-red-500/30 px-4 py-2 font-semibold text-red-400 transition hover:bg-red-500/10"
                    >
                      Remove Admin
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}