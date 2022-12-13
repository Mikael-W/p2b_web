import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    token: null
  }),
  actions: {
    async signIn(email, password) {
      const jsonData = JSON.stringify(`{"email": "${email}","password": "${password}"}`);
      const res = await axios.post("https://www.place2be.fr/p2base/login", jsonData, { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
      const user = await res.data;
      this.token = user.token;
      this.user = user.data;
    },
  }


})
