import { Suspense } from "react";
import { Explore } from "./Explore";
import { Loading } from "@/components/motion/Loading";

export const metadata = {
  title: "Explore",
  description: "Explore content by tags or categories",
};
export default function ExplorePage() {
  return (
    <Suspense fallback={<Loading />}>
      <Explore />
    </Suspense>
  );
}
