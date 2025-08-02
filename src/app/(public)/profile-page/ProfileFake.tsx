'use client';

import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/navigation";
import { AnimatedPage } from "@/components/motion/AnimatedPage";
import { AnimatedTitle } from "@/components/motion/AnimatedTitle";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PROFILE_DATA, type IProfileContent, type IMedia, type IReply } from "@/shared/data/profile.data";
import { useState } from "react";

type ProfileTab = keyof IProfileContent;

export function ProfileFake() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ProfileTab>('posts');

  const renderContent = () => {
  const content = PROFILE_DATA[activeTab];
  
  return content.map((item, index) => {
      const isReply = (item: any): item is IReply => 'replyTo' in item;
      const isMedia = (item: any): item is IMedia => 'type' in item;

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="border border-white/10 rounded-xl p-4 bg-black/20 mb-4"
        >
          {isReply(item) && (
            <p className="text-white/60 text-sm mb-1">Replying to {item.replyTo}</p>
          )}
          
          {isMedia(item) ? (
            <>
              <div className="bg-black/50 rounded-lg w-full h-48 flex items-center justify-center mb-3">
                {item.type === 'image' ? (
                  <span className="text-white/60">📷 Image: {item.text}</span>
                ) : (
                  <span className="text-white/60">🎥 Video: {item.text}</span>
                )}
              </div>
            </>
          ) : (
            <p className="text-white/90 mb-2">{item.text}</p>
          )}
          
          <p className="text-white/60 text-sm">
            {item.timestamp} · {item.likes} likes
          </p>
        </motion.div>
      );
    });
  };

  
  return (
    <AnimatedPage>
      <div className="w-full max-w-xl mx-auto px-4">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="relative mb-4">
            <Image
              src="/user.svg"
              alt="Profile"
              width={120}
              height={120}
            />
            <div className="absolute -bottom-2 right-1 bg-blue-500 rounded-full p-1">
              <div className="w-6 h-6 flex items-center justify-center">
                <Image 
                  src="/verified.svg" 
                  alt="Verified" 
                  width={20} 
                  height={20}
                />
              </div>
            </div>
          </div>

          <AnimatedTitle className="mb-2">
            @username
          </AnimatedTitle>
          
          <p className="text-white/80 mb-4 max-w-md text-center">
            Digital creator | Web enthusiast | Sharing thoughts on tech and design
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-black/50 rounded-xl p-6 mb-8"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">142</p>
              <p className="text-white/60">Posts</p>
            </div>
            <div>
              <p className="text-2xl font-bold">5.2K</p>
              <p className="text-white/60">Following</p>
            </div>
            <div>
              <p className="text-2xl font-bold">24.8K</p>
              <p className="text-white/60">Followers</p>
            </div>
          </div>
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex border-b border-white/10 mb-6"
        >
          <button 
            onClick={() => setActiveTab('posts')}
            className={`flex-1 py-3 font-medium ${activeTab === 'posts' ? 'border-b-2 border-blue-500' : 'text-white/60'}`}
          >
            Posts
          </button>
          <button 
            onClick={() => setActiveTab('replies')}
            className={`flex-1 py-3 font-medium ${activeTab === 'replies' ? 'border-b-2 border-blue-500' : 'text-white/60'}`}
          >
            Replies
          </button>
          <button 
            onClick={() => setActiveTab('media')}
            className={`flex-1 py-3 font-medium ${activeTab === 'media' ? 'border-b-2 border-blue-500' : 'text-white/60'}`}
          >
            Media
          </button>
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="space-y-4 mb-8"
        >
          {renderContent()}
        </motion.div>

        {/* Go to home button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push(PAGES.HOME)}
          className="flex items-center justify-center gap-3 px-6 py-3 bg-white rounded-lg text-black font-medium mx-auto mb-8"
        >
          <Image 
            src="/back.svg" 
            alt="Back" 
            width={24} 
            height={24}
            className="w-6 h-6"
          />
          Go to home
        </motion.button>
      </div>
    </AnimatedPage>
  );
}