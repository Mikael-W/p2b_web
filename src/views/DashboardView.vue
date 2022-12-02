<script Setup>

import AllEvents from '../components/AllEvents.vue';
import Menu from '../components/SideBarMenu.vue';
import AddEvent from '../components/AddEvent.vue';
import AdsEvents from '../components/AdsEvents.vue';
import FreeEvents from '../components/FreeEvents.vue';
import EventCase from '../components/EventCase.vue';
import RecapEvent from '../components/RecapEvent.vue';
import AdsEventSet from '../components/AdsEventSet.vue';

export default {
  name:"dashboard",
  components:{
    Menu, 
    AllEvents,
    AddEvent,
    AdsEvents,
    FreeEvents,
    EventCase,
    RecapEvent,
    AdsEventSet
  },
    data(){
      return {
        activeIdLink: 1,
        eventFirstPart: true,
        eventSecondPart: false,
        eventCase: 0,
      }
    },
    methods:{
      activeValue(link){
        this.activeIdLink = link.activeId
      },
      eventPartValue(isTrue){
        this.eventFirstPart = isTrue.secondPartValue
      },
      getCaseEvent(caseEvent){
        this.eventCase = caseEvent.casePushTo
      },
    }
}
</script>

<template>
  <div class="dashboard_container">
   <Menu  @activeId="activeValue" />
    <AddEvent  @eventFirstPart="eventPartValue" v-if="activeIdLink === 0 && eventFirstPart === true"/> 
    <EventCase @push="getCaseEvent" v-if="activeIdLink === 0 && eventFirstPart === false && eventCase === 0"/>
    <RecapEvent v-if="eventCase === 1" />
    <AdsEventSet v-if="eventCase === 2" />
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