import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router';

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async signIn(email, password) {
      const jsonData = JSON.stringify(`{"email": "${email}","password": "${password}"}`);
      const res = await axios.post(import.meta.env.VITE_DEV_API_URL + "/login", jsonData, { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
      const user = res.data;
      localStorage.setItem('userEmail', email);
      localStorage.setItem('isValidated', user.isValidated);
      this.token = user.token;
      this.user = user.data;
    },
    async signUp(data) {
      const { isEntreprise, isAssociation, email, pwd, phone, adress, city, zip, siret, brandName } = data;
      localStorage.setItem('userEmail', email);
      localStorage.setItem('isValidated', false);
      const jsonData = JSON.stringify(
        `{"isEntreprise":"${isEntreprise}","isAssociation":"${isAssociation}","brandName":"${brandName}","email": "${email}","password": "${pwd}","adress": "${adress}","siret":"${siret}","city": "${city}","zipCode": "${zip}","phoneNumber": "${phone}"}`);
      try {
        await axios.post(import.meta.env.VITE_DEV_API_URL + "/signup", jsonData, { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
      } catch (e) {
        console.error(e);
      }
    },
    async checkValidatedAccount() {
      const email = localStorage.getItem('userEmail');
      const isValidated = localStorage.getItem('isValidated');
      if (!email && isValidated == false) {
        router.push('/');
      } else {
        if (isValidated == false) {
          const res = await axios.get(import.meta.env.VITE_DEV_API_URL + `/validation/${email}`, { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
          if (res.data.validUser === true) {
            localStorage.setItem('isValidated', true);
            localStorage.setItem('token', res.data.token)
            this.user = res;
          } else {
            router.push('/');
          }
        } else
          return
      }
    },
  }
});
