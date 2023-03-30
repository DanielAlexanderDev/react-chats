import { auth } from "@/services/firebase";
import { IMessage } from "@/types";

interface Props {
  message: IMessage;
}

export function Message({ message }: Props) {
  const formattedDate = new Date(message.createdAt).toLocaleString();

  return (
    <div
      className={`flex w-auto max-w-[85%] md:max-w-[70%] ${
        message.name === auth.currentUser?.displayName ? "place-self-end" : ""
      } rounded-sm`}
    >
      <div className=" bg-gray-100 p-2">
        <p className="font-medium text-red-500 text-base">{message.name}</p>
        <p className="text-[#4A4B50] text-sm">
          {message.text}
          <span className="ml-2 text-xs font-light text-gray-500 ">
            {formattedDate}
          </span>
        </p>
      </div>
      <span>
        <svg
          viewBox="0 0 8 13"
          height="13"
          width="8"
          preserveAspectRatio="xMidYMid meet"
          version="1.1"
          x="0px"
          y="0px"
          enableBackground="new 0 0 8 13"
          xmlSpace="preserve"
        >
          <path
            opacity="0.13"
            d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
          ></path>
          <path
            className="fill-gray-100"
            d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
          ></path>
        </svg>
      </span>
      <div className="w-auto min-w-[48px]">
        <img
          className="rounded-full"
          src={message.avatar}
          alt=""
          width={46}
          height={46}
        />
      </div>
    </div>
  );
}
