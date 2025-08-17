import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  userRole: "guest", // guest | user | admin
  login: (role = "user") => set({ isAuthenticated: true, userRole: role }),
  logout: () => set({ isAuthenticated: false, userRole: "guest" }),
}));
