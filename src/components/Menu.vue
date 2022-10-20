<script>

export default {
  data(){
    return {
      activeId: 0,
      linksMenu:[
        {id:1, title: 'Accueil'},
        {id:2, title: 'Mes évènements payants'},
        {id:3, title: 'Mes évènements gratuit'},
        {id:4, title: 'Mon compte'},
      ]
    }
  },
methods:{
  selectLink(id) {              
        this.activeId = id;
        consol.log('clicked')
        }
      }
}

</script>

<template>
  <div class="nav_container">
    <div class="logo_container">
      <img src="../assets/logo_place2be.png" alt="">
    </div>
   
    <div class="new-event_btn">
      <img class="plus-icon" src="../assets/plus.png" alt="">
      Nouvel évènement
    </div> 
    <nav>
      <ul>
        <div v-for="(link, index) in linksMenu" :key="index">
        <li v-bind:class="{active:(link.id === activeId)}" @click="selectLink(link.id)">{{ link.title }}</li>
        </div>
        
        <li>Déconnexion</li>
      </ul>
    </nav>
  </div>
</template>



<style scoped>
 
</style>