export interface IMessage {
  text: string;
  name: string;
  avatar: string;
  createdAt: number;
  uid: string;
  id: string;
}

export type ChatRoom = "social" | "sports" | "e-sports";
