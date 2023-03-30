import { IMessage } from "@/types";

interface Props {
  message: IMessage;
}

export default function ReceivedMessage({ message }: Props) {
  return (
    <div className="flex w-auto max-w-[85%] md:max-w-[70%] rounded-sm ">
      <div className="w-auto min-w-[48px]">
        <img
          className="rounded-full"
          src={message.avatar}
          alt={message.name}
          width={46}
          height={46}
        />
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
            className="fill-gray-100"
            d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
          ></path>
          <path
            className="fill-gray-100"
            d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
          ></path>
        </svg>
      </span>
      <div className=" bg-[#fdfaea] p-2">
        <p className="font-medium text-red-500 text-base">{message.name}</p>
        <p className="text-[#4A4B50] text-sm">{message.text}</p>
      </div>
    </div>
  );
}
