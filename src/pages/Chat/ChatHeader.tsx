import { SelectedRoom, useRooms } from "@/hooks/useRooms";
import { type ChangeEvent } from "react";

interface Props {
  changeMenuVisibility: () => void;
}
export default function ChatHeader({ changeMenuVisibility }: Props) {
  const { currentRoom, changeRoom } = useRooms();
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    changeRoom(e.target.value as SelectedRoom);
  };

  return (
    <header className=" flex justify-between items-center sticky z-50 w-full bg-white p-2  bg-opacity-70 backdrop-filter backdrop-blur-lg  font-light text-lg">
      <div className="w-full flex">
        Chat Room:{" "}
        <span className="font-semibold hidden lg:block italic mx-1">
          {currentRoom}
        </span>
        <select
          onChange={handleChange}
          className="w-auto font-semibold italic ml-1 lg:hidden"
          name="room-select"
          id="room"
        >
          <option value="Social">Social</option>
          <option value="Sports">Sports</option>
          <option value="Programming">Programming</option>
        </select>
      </div>

      <svg
        onClick={changeMenuVisibility}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className=" lg:hidden"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </header>
  );
}
