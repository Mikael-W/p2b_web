import { defineStore } from 'pinia'

export const useAdminStore = defineStore(("adminStore"), {
  state: () => ({
    ppd: "",
    heroBannerPrice: "",
    annualHeroBannerPrice: ""
  }),
  async defineAdminSettings() {
    await axios.post(import.meta.env.VITE_DEV_API_URL + "/add-event", event, { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.userToken}` } }
    );
  }
})