import { SelectedRoom, useRooms } from "@/hooks/useRooms";

interface Props {
  room: SelectedRoom;
}

export default function RoomButton({ room }: Props) {
  const { currentRoom, changeRoom } = useRooms();

  return (
    <button
      className={`${
        currentRoom == room ? "bg-zinc-200" : " hover:bg-zinc-100 bg-zinc-50"
      }   w-[95%] border-y border-gray-100 flex justify-between py-2 px-2 shadow-lg rounded-lg `}
      onClick={() => changeRoom(room)}
    >
      <span className=" text-lg">{room}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  );
}
