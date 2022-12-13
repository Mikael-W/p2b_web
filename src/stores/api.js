import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', {
  state: () => { return { baseUrl: "https://www.place2be.fr/p2base/" } }
})
