import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export type UserRole = "creator" | "admin" | "student";

export async function getUserRole(): Promise<UserRole | null> {
  const user = auth.currentUser;

  if (!user) {
    return null;
  }

  try {
    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (!userDoc.exists()) {
      return null;
    }

    const data = userDoc.data();

    if (
      data.role === "creator" ||
      data.role === "admin" ||
      data.role === "student"
    ) {
      return data.role;
    }

    return "student";
  } catch (error) {
    console.error("Failed to get user role:", error);
    return null;
  }
}