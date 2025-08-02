import { Suspense } from "react";
import { Explore } from "./Explore";

export const metadata = {
  title: 'Explore',
  description: 'Explore content by tags or categories',
};
export default function ExplorePage() {
  return (
    <Suspense>
      <Explore />
    </Suspense>
  );
}