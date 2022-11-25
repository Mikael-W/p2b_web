<script Setup>

import AllEvents from '../components/AllEvents.vue';
import Menu from '../components/SideBarMenu.vue';
import AddEvent from '../components/AddEvent.vue';
import AdsEvents from '../components/AdsEvents.vue';
import FreeEvents from '../components/FreeEvents.vue';

export default {
  name:"dashboard",
  components:{
    Menu, 
    AllEvents,
    AddEvent,
    AdsEvents,
    FreeEvents
  },
    data(){
      return {
        activeIdLink: 1,
      }
    },
    methods:{
      activeValue(payload){
        this.activeIdLink = payload.activeId
      }
    }
}
</script>

<template>
  <div class="dashboard_container">
   <Menu  @activeId="activeValue" />
   <AddEvent v-if="activeIdLink == 0"/>
    <AllEvents v-if="activeIdLink == 1"/>
    <FreeEvents v-if="activeIdLink == 2"/>
    <AdsEvents v-if="activeIdLink == 3"/>
  </div>
</template>



<style>
.dashboard_container{
  display: flex;
  align-items: center;
}

</style>