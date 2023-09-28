import { ref } from "vue"
import { auth } from "@/firebase"
import { onAuthStateChanged } from "firebase/auth"

export const user = ref()

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
