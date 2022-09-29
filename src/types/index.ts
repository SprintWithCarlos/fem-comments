export type User = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};
export type BaseRecord = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
};
export type ReplyType = BaseRecord & {
  replyingTo: string;
};
export type CommentType = BaseRecord & {
  replies?: ReplyType[];
};
export type AppData = {
  currentUser: User;
  comments: CommentType[];
};
