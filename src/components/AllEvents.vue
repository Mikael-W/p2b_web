<script>
export default {
  props:{
    allevents: false
  }

}
</script>

<template>
  <div class="allevents_container">
    <div class="event_container">
      <div class="event_title">Mes évènements</div>
      <div class="events"></div>
    </div>
    <div class="stats_container">
      <div class="stats-title">Mes statistiques</div>
      <div class="stats"></div>
    </div>
  </div>
</template>



<style>
.allevents_container{
  margin-left: 1.5vw;
  width: 75vw;
  height: 85vh;
  background-color:black;
  border-radius: 1rem;
  display: flex;
  
}
.event_container, .stats_container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event_title, .stats-title{
  margin-top: 1rem;
  font-size:2rem;
  font-weight: bold;
  color: white;
}
.events, .stats{
  margin: 1rem 0 0 2rem ;
  width: 35vw;
  height: 75vh;
  background-color: #00C0FF;
  border-radius: 1rem;
}
.eventStats{
  margin-right: 2rem;
}
</style>