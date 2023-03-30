import { auth } from "@/services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import RoomButton from "./RoomButton";

export default function RoomList() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <section className="w-1/4 hidden lg:flex flex-col h-full  justify-center pb-4 bg-[#E7DCD9] border-r border-gray-200 ">
      <header className="text-center p-2 flex flex-col gap-y-4 ">
        <div className=" flex flex-col   bg-slate-50 shadow-lg p-4  rounded-lg">
          <Link
            to="/"
            className="font-semibold text-3xl flex  justify-center gap-x-2 border-b py-3"
          >
            <span className="text-[#4A4B50]  transition ">REACT</span>
            <span className="  text-[#4A4B50]   ">CHATS</span>
          </Link>
          <div className="text-left flex flex-col justify-start items-center gap-x-4 border-b py-4 ">
            <img
              src={user?.photoURL ?? " "}
              alt={user?.displayName ?? "User photo"}
              width={34}
              height={34}
              className="rounded-full "
            />
            <p className="font-medium">{user?.displayName}</p>
            <p className=" text-sm font-light">{user?.email}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-1 py-12">
            <h2 className="font-light">Available Rooms</h2>
            <RoomButton room="Social" />
            <RoomButton room="Sports" />
            <RoomButton room="Programming" />
          </div>
          <button
            onClick={() => {
              auth.signOut();
              navigate("/");
            }}
            className="bg-zinc-700  text-white shadow-lg w-52 mx-auto  rounded-lg justify-self-end py-2 font-medium flex justify-center gap-x-3"
          >
            Log out
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
      </header>
    </section>
  );
}
