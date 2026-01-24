import { defineStore } from "pinia";


export const useLinks = defineStore("links", {
  state: () => ({
    links: [
      { name: "Home", path: "/" },
      { name: "Menu", path: "/menu" },
      { name: "About us", path: "/about-us"}
    ],
  }),
});