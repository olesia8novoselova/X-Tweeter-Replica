import { TWEETS } from "@/shared/data/tweet.data";
import { Tweet } from "./Tweet";
import { AnimatedPage } from "@/components/motion/AnimatedPage";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";

export default function Home() {
  return (
    <AnimatedPage>
      <div className="w-full max-w-xl">
        <AnimatedTitle>Welcome to the X App</AnimatedTitle>
        <div className="space-y-6">
          {TWEETS.map(tweet => (
            <Tweet key={tweet.author} tweet={tweet} />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}