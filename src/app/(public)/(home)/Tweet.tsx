'use client';

import { PAGES } from '@/config/pages.config';
import type { ITweet } from '@/shared/types/tweet.interface';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
    tweet: ITweet;
}

export function Tweet({ tweet }: Props) {
    return (
        <motion.div
            initial={{ 
                opacity: 0, 
                y: 10,
                backgroundPosition: '0% 50%'
            }}
            animate={{ 
                opacity: 1, 
                y: 0,
                backgroundPosition: '100% 50%'
            }}
            whileHover={{ 
                scale: 1.02,
                boxShadow: '0 4px 12px -2px rgba(29, 161, 242, 0.25)'
            }}
            transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 10,
                duration: 0.5,
                backgroundPosition: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                }
            }}
            className="p-[1px] rounded-xl"
            style={{
                background: 'linear-gradient(90deg, #15202b, #1a3a5f, #1da1f2, #1a3a5f, #15202b)',
                backgroundSize: '300% 100%'
            }}
        >
            <div className="bg-black rounded-xl p-4 hover:bg-black/90 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring' }}>
                        <Image
                            src="/user.svg"
                            alt="user"
                            width={28}
                            height={28}
                            className="rounded-full"
                        />
                    </motion.div>
                    <Link 
                        href={PAGES.PROFILE(tweet.author)} 
                        className="font-semibold hover:underline hover:text-blue-400 transition-colors"
                    >
                        @{tweet.author}
                    </Link>
                </div>
                <p className="text-white/90">{tweet.text}</p>
            </div>
        </motion.div>
    );
}