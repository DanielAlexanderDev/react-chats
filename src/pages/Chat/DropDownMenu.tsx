import { auth } from "@/services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

export default function DropDownMenu() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div className=" lg:hidden absolute top-10 py-8 left-8 flex flex-col bg-white gap-y-4 w-[90%] rounded-md">
      <div className="font-semibold text-3xl flex  justify-center gap-x-2 border-b pb-3">
        <span className="text-[#4A4B50]  transition ">REACT</span>
        <span className="  text-[#4A4B50]   ">CHATS</span>
      </div>
      <div className="text-left flex flex-col justify-start items-center  border-b py-4 ">
        <img
          src={user?.photoURL ?? " "}
          alt={user?.displayName ?? "User photo"}
          width={34}
          height={34}
          className="rounded-full "
        />
        <p className="font-medium">{user?.displayName}</p>
        <p className=" text-sm font-light">{user?.email}</p>
        <Link className="underline py-4" to={"/"}>
          Home
        </Link>
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
  );
}
