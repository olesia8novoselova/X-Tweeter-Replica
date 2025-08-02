'use client';

import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/navigation";

export function ProfileFake() {
    const router = useRouter()
  return (
    <div className="flex justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Profile Page</h1>
        <button onClick={() => router.push(PAGES.HOME)}>Go to home</button>
      </div>
    </div>
  );
}