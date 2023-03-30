import { auth } from "@/services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import SignButton from "@/components/SignButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TypeWritter from "@/components/TypeWritter";

export default function Home() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const googleSignIn = () => {
    try {
      setIsLoading(true);
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((res) => console.log("succesfully logged"))
        .catch((error) => {
          setError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {}
  };

  const googleSignOut = () => {
    auth.signOut();
  };

  return (
    <main className=" w-full h-screen p-4 bg-[#a4a29d] ">
      <div className=" w-full h-full grid place-content-center gap-y-4">
        <div className=" flex flex-col-reverse md:flex-row items-center gap-y-3 md:gap-x-4">
          <div className=" text-6xl font-bold text-center flex flex-col ">
            <span className="text-[#E7DCD9] first-letter:text-[#4A4B50]   transition ">
              REACT
            </span>
            <span className=" first-letter:text-[#E7DCD9] text-[#4A4B50]   ">
              CHATS
            </span>
          </div>
          <TypeWritter />
        </div>

        {user ? (
          <>
            <SignButton onClick={() => googleSignOut()}>Log Out</SignButton>
            <button
              onClick={() => navigate("/chat")}
              className="bg-[#e4e2d4] rounded-lg hover:shadow-lg flex justify-center  items-center px-3 py-2 w-auto gap-x-4 hover:bg-[#fdfaea] hover:text-black   transition-all "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#4A4B50"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span> Chat ➞ </span>
            </button>
          </>
        ) : (
          <SignButton onClick={() => googleSignIn()}>
            {isLoading ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <>Sign In</>
            )}
          </SignButton>
        )}
        {error && (
          <p className=" text-zinc-700 rounded-lg text-center">
            Sign in error, please try again!
          </p>
        )}
      </div>
    </main>
  );
}
