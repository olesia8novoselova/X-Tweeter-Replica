import { Suspense } from "react";
import { ProfileFake } from "./ProfileFake";
import { Loading } from "@/components/motion/Loading";

export const metadata = {
  title: "Profile Page",
  description: "View your profile and tweets",
};

export default function ProfileFakePage() {
  return (
    <Suspense fallback={<Loading />}>
      <ProfileFake />
    </Suspense>
  );
}
