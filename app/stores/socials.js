import { defineStore } from "pinia";


export const useSocials = defineStore("socials", {
  state: () => ({
    socials: [
      {
        name: "Facebook", 
        url: "https://www.facebook.com/profile.php?id=100064311183750", 
        icon: "/svg/facebook.svg"
      },
      { 
        name: "Instagram", 
        url: "https://www.instagram.com/jaamhouseofsushi/?img_index=1", 
        icon: "/svg/instagram.svg" 
      }
    ],
  }),
});