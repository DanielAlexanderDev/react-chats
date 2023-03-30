import { useEffect, useRef, useState } from "react";
import { auth, db } from "@/services/firebase";
import { IMessage } from "@/types";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import ReceivedMessage from "./ReceivedMessage";
import { Message } from "./Message";
import { useRooms } from "@/hooks/useRooms";

export default function ChatArea() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const section = useRef<HTMLDivElement | null>(null);
  const { currentRoom } = useRooms();

  useEffect(() => {
    const el = section.current;
    el?.scrollIntoView({
      behavior: "smooth",
    });
    const q = query(
      collection(db, currentRoom),
      orderBy("createdAt", "desc"),
      limit(10)
    );
    const unsuscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages: IMessage[] = [];
      QuerySnapshot.forEach((doc) => {
        messages.unshift({ ...doc.data(), id: doc.id } as IMessage);
      });
      setMessages(messages);
    });

    return () => unsuscribe();
  }, [currentRoom]);

  return (
    <section className=" h-auto min-h-[90%] overflow-y-scroll scrollbar-hide p-2  bg-zinc-200 ">
      <button
        className={` ${
          messages.length >= 10 ? "block" : "hidden"
        }  mx-auto mb-2 px-2 py-1 rounded-lg bg-[#B9CACE] hover:bg-[#c5d8dc]`}
      >
        Load more
      </button>
      <div className="flex flex-col gap-y-3  h-auto ">
        {messages &&
          messages.map((message) =>
            message.name == auth.currentUser?.displayName ? (
              <Message message={message} key={message.id} />
            ) : (
              <ReceivedMessage message={message} key={message.id} />
            )
          )}
      </div>
      <div className=" h-16 w-full" ref={section}></div>
    </section>
  );
}
