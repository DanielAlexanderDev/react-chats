import { ChatRoomProvider } from "@/hooks/useRooms";
import { useEffect, useRef, useState } from "react";
import ChatArea from "./ChatArea";
import ChatForm from "./ChatForm";
import ChatHeader from "./ChatHeader";
import DropDownMenu from "./DropDownMenu";
import RoomList from "./RoomList";

export default function Chat() {
  const textarea = useRef<HTMLTextAreaElement | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const changeMenuVisibility = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    textarea.current?.focus();
  }, []);

  return (
    <ChatRoomProvider>
      <main className="bg-[#B9CACE] h-screen flex  relative ">
        <RoomList />
        <div className=" w-full lg:w-3/4 h-screen flex flex-col relative   ">
          <ChatHeader changeMenuVisibility={changeMenuVisibility} />
          <ChatArea />
          <ChatForm textarea={textarea} />
          {showMenu && <DropDownMenu />}
        </div>
      </main>
    </ChatRoomProvider>
  );
}
