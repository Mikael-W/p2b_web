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
    async signUp(data) {
      const { isEntreprise, isAssociation, newEmail, newPwd, phone, adress, city, zip, siret, brandName } = data;
      const jsonData = JSON.stringify(
        `{"isEntreprise":"${isEntreprise}","isAssociation":"${isAssociation}","brandName":"${brandName}","email": "${newEmail}","password": "${newPwd}","adress": "${adress}","siret":"${siret}","city": "${city}","zipCode": "${zip}","phoneNumber": "${phone}"}`);
      try {
        await axios.post("https://www.place2be.fr/p2base/signup", jsonData, { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
      } catch (e) {
        console.error(e);
      }





    },
  }


})
