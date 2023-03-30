import { useRooms } from "@/hooks/useRooms";
import { sendMessage } from "@/services/sendMessage";
import {
  MutableRefObject,
  KeyboardEvent,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";

interface Props {
  textarea: MutableRefObject<HTMLTextAreaElement | null>;
}

export default function ChatForm({ textarea }: Props) {
  const [message, setMessage] = useState("");
  const { currentRoom } = useRooms();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const el = textarea.current;
    if (el) {
      el.style.height = "0px";
      const scrollHeight = el.scrollHeight;
      el.style.height = scrollHeight + "px";
    }
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    await sendMessage(message, currentRoom);
    setMessage("");
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className=" absolute bottom-0 z-50 w-full flex gap-x-2 p-2 bg-[#E7DCD9] h-auto  "
    >
      <textarea
        ref={textarea}
        className=" w-full bg-white shadow-lg p-2 rounded-md  focus:outline-none resize-none"
        name="text-message"
        value={message}
        rows={1}
        onKeyDown={async (e: KeyboardEvent<HTMLTextAreaElement>) => {
          if (e.code === "Enter" && !e.shiftKey) {
            e.preventDefault();
            await sendMessage(message, currentRoom);
            setMessage("");
          }
        }}
        id=""
        placeholder="Send new message..."
        onChange={handleChange}
      />
      <button className="  p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#7C7B7A"
          className="w-5 h-5 hover:fill-black"
        >
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
      </button>
    </form>
  );
}
