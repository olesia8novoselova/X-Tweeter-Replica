// src/shared/data/profile.data.ts
import type { ITweet } from "@/shared/types/tweet.interface";

export interface IReply extends ITweet {
  replyTo: string;
}

export interface IMedia extends ITweet {
  type: 'image' | 'video';
  preview: string;
}

export interface IProfileContent {
  posts: ITweet[];
  replies: IReply[];
  media: IMedia[];
}

export const PROFILE_DATA: IProfileContent = {
  posts: [
    {
      text: "Just launched my new portfolio website! #webdev #showcase",
      author: "user123",
      timestamp: "2h ago",
      likes: 24
    },
    {
      text: "Working on a new React component library. Can't wait to share it!",
      author: "user123",
      timestamp: "5h ago",
      likes: 42
    },
    {
      text: "Beautiful day for coding outside ☀️ #developerlife",
      author: "user123",
      timestamp: "1d ago",
      likes: 87
    }
  ],
  replies: [
    {
      text: "Thanks for the feedback! I'll definitely consider that approach.",
      author: "user123",
      timestamp: "3h ago",
      likes: 5,
      replyTo: "@techguru"
    },
    {
      text: "I had the same issue last week. Try updating your dependencies first.",
      author: "user123",
      timestamp: "7h ago",
      likes: 12,
      replyTo: "@newcoder"
    }
  ],
  media: [
    {
      text: "Screenshot of my latest project",
      author: "user123",
      timestamp: "4h ago",
      likes: 56,
      type: "image",
      preview: "/project-screenshot.jpg"
    },
    {
      text: "Demo of the new animation system",
      author: "user123",
      timestamp: "1d ago",
      likes: 124,
      type: "video",
      preview: "/animation-preview.jpg"
    }
  ]
};