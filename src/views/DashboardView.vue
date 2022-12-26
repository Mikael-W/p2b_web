<script Setup>

import { useUserStore } from "@/stores/users"

import AllEvents from '../components/AllEvents.vue';
import Menu from '../components/SideBarMenu.vue';
import AddEvent from '../components/AddEvent.vue';
import AdsEvents from '../components/AdsEvents.vue';
import FreeEvents from '../components/FreeEvents.vue';
import RecapEvent from '../components/RecapEvent.vue';
import MarketingSettings from '../components/Marketing_events.vue';
import UsersBoard from '../components/UsersBoard.vue';
import OrderPage from '../components/OrderingEvent.vue';

export default {
  setup(){
      const userStore = useUserStore();
      return { userStore }
    },
  name:"dashboard",
  components:{
    Menu, 
    AllEvents,
    AddEvent,
    AdsEvents,
    FreeEvents,
    RecapEvent,
    MarketingSettings,
    UsersBoard,
    OrderPage
  },
    data(){
      return {
        isAdmin: true,
        activeIdLink: 1,
        entrepriseEvent: false,
        eventCase: 0
      }
    },
    beforeCreate(){
      this.userStore.checkValidatedAccount();
    },
    methods:{
      activeValue(link){
        this.activeIdLink = link.activeId
      },
      eventStepValue(step){
        this.entrepriseEvent = step.adspart
        console.log(step.adspart)
        if(this.entrepriseEvent == true){
          this.eventCase = 2
        }
        if(this.entrepriseEvent == false){
          this.eventCase = 1
        }
      },
      recapEvent(){
        this.eventCase = 1
      },
      orderingEvent(){
        this.eventCase = 3
      },
      closeOrder(){
        this.activeIdLink = 1
      }
    }
}
</script>

<template>
  <div class="dashboard_container">
   <Menu  @activeId="activeValue" />
    <AddEvent  @marketSetting="eventStepValue" v-if="(activeIdLink === 0 && eventCase == 0)"/> 
    <MarketingSettings @closeMarketing="recapEvent" v-if="(eventCase === 2 && activeIdLink === 0 )" />
    <RecapEvent @orderEvent="orderingEvent" v-if="(eventCase === 1)" />
    <OrderPage @orderDone="closeOrder" v-if="(eventCase === 3 && activeIdLink === 0)"/>
    <AllEvents v-if="(activeIdLink == 1)"/>
    <AdsEvents v-if="(activeIdLink == 2)"/>
    <FreeEvents v-if="(activeIdLink == 3)"/>
    <UsersBoard v-if="(isAdmin == true && activeIdLink == 4)"/>
  </div>
</template>



<style>
.dashboard_container{
  display: flex;
  align-items: center;
}

</style>