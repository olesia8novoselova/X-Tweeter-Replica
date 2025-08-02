'use client';

import { motion } from 'framer-motion';
import { useParams } from "next/navigation";
import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { AnimatedPage } from "@/components/motion/AnimatedPage";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
// Import your Tweet component
import { TWEETS } from "@/shared/data/tweet.data"; // Import your tweets data
import { Tweet } from '../../(home)/Tweet';

export function Profile() {
    const params = useParams<{ username: string }>();
    const router = useRouter();
    
    // Filter tweets by this user
    const userTweets = TWEETS.filter(tweet => tweet.author === params.username);
    
    return (
        <AnimatedPage className="text-center">
            <div className="w-full max-w-xl">
                {/* Profile Header */}
                <div className="flex justify-center mb-6">
                    <Image
                        src="/user.svg"
                        alt="Profile"
                        width={80}
                        height={80}
                    />
                </div>
                
                <AnimatedTitle>
                    @{params.username}
                </AnimatedTitle>
                
                {/* Profile Stats */}
                <div className="bg-black/50 rounded-xl p-6 mb-8">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div>
                            <p className="text-xl font-bold">{userTweets.length}</p>
                            <p className="text-white/60">Tweets</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">5,678</p>
                            <p className="text-white/60">Following</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">9,012</p>
                            <p className="text-white/60">Followers</p>
                        </div>
                    </div>
                    
                    <p className="text-white/80 mb-6">
                        Digital creator | Web enthusiast | Sharing thoughts on tech and design
                    </p>
                </div>
                
                {/* User's Tweets */}
                <div className="space-y-4 mb-8 text-left">
                    {userTweets.length > 0 ? (
                        userTweets.map(tweet => (
                            <Tweet 
                                key={`${tweet.author}-${tweet.text}`} 
                                tweet={tweet} 
                            />
                        ))
                    ) : (
                        <p className="text-white/60 py-8">No tweets yet</p>
                    )}
                </div>
                
                {/* Back Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push(PAGES.HOME)}
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-white rounded-lg text-black font-medium mx-auto"
                >
                    <Image 
                        src="/back.svg" 
                        alt="Back" 
                        width={24} 
                        height={24}
                        className="w-6 h-6"
                    />
                    <span>Back to home</span>
                </motion.button>
            </div>
        </AnimatedPage>
    );
}