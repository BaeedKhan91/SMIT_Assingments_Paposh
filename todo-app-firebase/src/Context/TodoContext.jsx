import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/config";

export const expenseContext = createContext();

export default function ExpenseProvider({ children }) {
  const [currentUser, setCurrentUser] = useState([]);
  const [loading, setLoading] = useState(true);

   function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const value = {currentUser,signup,login};

  return (
    <expenseContext.Provider value={value}>{children}</expenseContext.Provider>
  );
}
