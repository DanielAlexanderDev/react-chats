import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";
import { auth } from "./services/firebase";

function App() {
  const [user] = useAuthState(auth);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={user ? <Chat /> : <Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
