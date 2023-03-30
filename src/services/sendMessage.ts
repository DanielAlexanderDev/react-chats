import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./firebase";
import { type SelectedRoom } from "@/hooks/useRooms";

export async function sendMessage(message: string, room: SelectedRoom) {
  const uid = auth.currentUser?.uid;
  const docRef = await addDoc(collection(db, room), {
    text: message,
    name: auth.currentUser?.displayName,
    avatar: auth.currentUser?.photoURL,
    createdAt: Date.now(),
    uid,
  });
}
