import { createContext, ReactNode, useContext, useState } from "react";

export type SelectedRoom = "Social" | "Sports" | "Programming";

interface RoomContext {
  currentRoom: SelectedRoom;
  changeRoom: (value: SelectedRoom) => void;
}

const roomContext = createContext<RoomContext>({
  currentRoom: "Social",
} as RoomContext);

export const ChatRoomProvider = ({ children }: { children: ReactNode }) => {
  const [room, setRoom] = useState<SelectedRoom>("Social");

  const value = {
    currentRoom: room,
    changeRoom(newRoom: SelectedRoom) {
      setRoom(newRoom);
    },
  };
  return <roomContext.Provider value={value}>{children}</roomContext.Provider>;
};

export const useRooms = () => {
  const context = useContext(roomContext);
  return context;
};
