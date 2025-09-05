import { create } from "zustand";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../store/firebaseConfig"; // your firestore init

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  userRole: null,
  setUser: (user, role) => set({
    user,
    isAuthenticated: !!user,
    userRole: role || "organizer" // default if not admin
  }),
}));

export const doSignInWithEmailAndPassword = async (email, password) => {
  const { signInWithEmailAndPassword } = await import("firebase/auth");
  const result = await signInWithEmailAndPassword(auth, email, password);
  const user = result.user;

  // get role from Firestore
  const userDoc = await getDoc(doc(db, "users", user.uid));
  const role = userDoc.exists() ? userDoc.data().role : "organizer";
  useAuthStore.getState().setUser(user, role);
};


export const doSignInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // get role from Firestore
  const userDoc = await getDoc(doc(db, "users", user.uid));
  const role = userDoc.exists() ? userDoc.data().role : "organizer";

  useAuthStore.getState().setUser(user, role);
};


export const doSignOut = async () => {
  return auth.signOut();
};

export const doPasswordReset = async (email) => {
  return auth.sendPasswordResetEmail(email);
};

export const doPasswordUpdate = async (password) => {
  if (auth.currentUser) {
    return auth.currentUser.updatePassword(password);
  } else {
    throw new Error("No user is currently signed in.");
  } 
};

export const doSendEmailVerification = async () => {
  if (auth.currentUser) {
    return auth.currentUser.sendEmailVerification();
  } else {
    throw new Error("No user is currently signed in.");
  }
};

export const doUpdateProfile = async (profile) => {
  if (auth.currentUser) {
    return auth.currentUser.updateProfile(profile);
  } else {
    throw new Error("No user is currently signed in.");
  }
};

export const doDeleteUser = async () => {
  if (auth.currentUser) {
    return auth.currentUser.delete();
  } else {
    throw new Error("No user is currently signed in.");
  }
};

export const doReauthenticate = async (password) => {
  if (auth.currentUser && auth.currentUser.email) {
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      password
    );
    return auth.currentUser.reauthenticateWithCredential(credential);
  } else {
    throw new Error("No user is currently signed in.");
  }
};


