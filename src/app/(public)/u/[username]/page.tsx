import type { Metadata } from "next";
import { Profile } from "./Profile";
import { Suspense } from "react";
import { Loading } from "@/components/motion/Loading";

export const metadata: Metadata = {
  title: "User Profile",
  description: "View user profile and tweets",
};

export default function ProfilePage() {
  return (
    <Suspense fallback={<Loading />}>
      <Profile />
    </Suspense>
  );
}
