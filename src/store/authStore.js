import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuth: localStorage.getItem("isAuth") === "true",
  user: JSON.parse(localStorage.getItem("currentUser")) || null,

  login: (user) => {
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));
    set({ isAuth: true, user });
  },

  logout: () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("currentUser");
    set({ isAuth: false, user: null });
  },
}));
