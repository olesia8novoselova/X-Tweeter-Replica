'use client';

import { AnimatedPage } from "@/components/motion/AnimatedPage";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { TWEETS } from "@/shared/data/tweet.data";
import type { ITweet } from "@/shared/types/tweet.interface";
import Link from "next/link";
import { PAGES } from "@/config/pages.config";
import { Tweet } from "../(home)/Tweet";

interface PopularUser {
  username: string;
  followers: number;
}

const POPULAR_USERS: PopularUser[] = Array.from(
  new Set(TWEETS.map((tweet) => tweet.author))
).map((username) => ({
  username,
  followers: Math.floor(Math.random() * 90000) + 10000
}));

interface TrendingTag {
  tag: string;
  posts: number;
}

const extractHashtags = (tweets: ITweet[]): TrendingTag[] => {
  const tagMap = new Map<string, number>();
  
  tweets.forEach(tweet => {
    const tags = tweet.text.match(/#\w+/g) || [];
    tags.forEach(tag => {
      const cleanTag = tag.toLowerCase();
      tagMap.set(cleanTag, (tagMap.get(cleanTag) || 0) + 1);
    });
  });

  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, posts: count }))
    .sort((a, b) => b.posts - a.posts)
    .slice(0, 4);
};

export function Explore() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const tag = searchParams.get('tag');
  const trendingTags = extractHashtags(TWEETS);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      document.startViewTransition(() => {
        router.push(`/explore?tag=${searchInput.trim().replace('#', '')}`);
      });
    }
  };

  const filteredTweets = tag 
    ? TWEETS.filter(tweet => 
        tweet.text.toLowerCase().includes(`#${tag.toLowerCase()}`)
      )
    : TWEETS;

  return (
    <AnimatedPage>
      <div className="w-full max-w-xl px-4">
        <AnimatedTitle className="mb-6 ">
          Explore {!!tag && `#${tag}`}
        </AnimatedTitle>

        {/* Search Box */}
        <motion.form 
          onSubmit={handleSearch}
          className="mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by hashtag..."
              className="w-full bg-black/30 border border-white/20 rounded-full py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:cursor-pointer"
              />
            <button 
              type="submit"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
              >
              <Image
                src="/search.svg"
                alt="Search"
                width={20}
                height={20}
                className="w-5 h-5 hover:scale-110 transition-transform"
      />
            </button>
          </div>
        </motion.form>

        {/* Trending Section */}
        {!tag && (
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-bold mb-4">Trending Hashtags</h2>
            <div className="grid grid-cols-2 gap-3">
              {trendingTags.map((trend) => (
                <motion.div
                  key={trend.tag}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push(`/explore?tag=${trend.tag.replace('#', '')}`)}
                  className="bg-black/50 p-4 rounded-lg cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-bold">{trend.tag}</p>
                  <p className="text-white/60 text-sm">{trend.posts} posts</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Popular Accounts */}
        {!tag && (
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-4">Popular Accounts</h2>
            <div className="space-y-3">
              {POPULAR_USERS.map((user: PopularUser) => (
                <motion.div
                  key={user.username}
                  whileHover={{ scale: 1.01 }}
                  className="flex items-center gap-3 p-3 bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link 
                    href={PAGES.PROFILE(user.username)} 
                    className="flex items-center gap-3 w-full"
                  >
                    <Image
                      src="/user-outlined.svg"
                      alt={user.username}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="truncate">@{user.username}</p>

                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Filtered Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-bold mb-4">
            {tag ? `Recent posts about #${tag}` : 'Recommended for you'}
          </h2>
          
          <div className="space-y-4">
            {filteredTweets.map((tweet: ITweet, index: number) => (
              <Tweet 
                key={`${tweet.author}-${index}`} 
                tweet={tweet} 
              />
            ))}
          </div>
        </motion.div>

        {/* Clear filter button */}
        {tag && (
          <motion.button
            onClick={() => {
              router.push('/explore');
              setSearchInput('');
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 px-4 py-2 bg-white/10 rounded-full text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Clear filter
          </motion.button>
        )}
      </div>
    </AnimatedPage>
  );
}