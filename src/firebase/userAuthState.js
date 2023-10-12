import { auth } from "@/firebase/init";
import { onAuthStateChanged } from "firebase/auth";

export const getUser = () => {
  return new Promise((resolve, reject) => {
    const remove = onAuthStateChanged(auth, (userData) => {
      remove()
      resolve(userData)
    },
      reject
    )
  })
}
