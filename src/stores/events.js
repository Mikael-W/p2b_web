import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core';
import axios from 'axios';




export const useEventStore = defineStore("event", {
  state: () => ({
    events: null,
    event: {},
    userToken: useLocalStorage('token'),
    latRes: "",
    lngRes: "",
    adsEventPrice: "",
    packageEvent: "",
    stripeSession: "",
  }),
  actions: {
    async addEvent(event) {
      try {
        await axios.post(import.meta.env.VITE_DEV_API_URL + "/add-event", event, { headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${this.userToken}` } });
      } catch (error) {
        console.log(error)
      }
    },
    async searchEventGeolocation(adress, zip) {
      try {
        await axios.get(import.meta.env.VITE_GEO_API + `${adress}&postcode=${zip}`).then(result => {
          this.lngRes = result.data.features[0]['geometry']['coordinates'][0],
            this.latRes = result.data.features[0]['geometry']['coordinates'][1]
        })
      } catch (error) {
        console.log(error)
      }
    },
    async defineEventCondition(pack, price) {
      this.adsEventPrice = price,
        this.packageEvent = pack
      console.log(this.adsEventPrice, this.packageEvent)
    },
    async orderEvent() {
      const eventObj = { name: this.packageEvent, price: this.adsEventPrice };
      console.log(eventObj);
      await axios.post(import.meta.env.VITE_DEV_API_URL + "/order", eventObj, { headers: { 'Content-Type': 'application/json; charset=utf-8' } }).then(response => { window.location = response.data.url });
      console.log(this.stripeSession);
    }
  }
});
