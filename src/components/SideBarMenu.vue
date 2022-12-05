<script>

export default {
  data(){
    return {
      activeId: 1,
      linksMenu:[
        {id:1, titleLink: 'Mes évènements'},
        {id:2, titleLink: 'Évènements payants'},
        {id:3, titleLink: 'Évènements gratuit'},
        {id:4, titleLink: 'Utilisateurs'},
        {id:5, titleLink: 'Mon compte'},
      ]
    }
  },
methods:{
  selectLink(id) {              
        this.activeId = id;
        this.$emit("activeId",{activeId:id});
        },
  addEventLink(){
    this.activeId = 0;
    this.$emit("activeId",{activeId:0});
  }
}
}
</script>

<template>
  <div class="nav_container">
    <div class="logo_container">
      <img src="../assets/logo_place2be.png" alt="">
    </div>
   
    <div class="new-event_btn" @click="addEventLink()">
      <img class="plus-icon" src="../assets/plus.png" alt="">
      Nouvel évènement
    </div> 
    <nav>
      <ul>
        <div v-for="(link, index) in linksMenu" :key="index">
        <li v-bind:class="{active:(link.id === activeId)}" @click="selectLink(link.id)">{{ link.titleLink }}</li>
        </div>
        <li>Déconnexion</li>
      </ul>
    </nav>
  </div>
</template>



<style scoped>
 
.nav_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    height: 100vh;
    width: 20vw;
  }

  .logo_container{
    background-color: #00C0FF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    border-radius: 50%;
    width: 10vw;
    height: 10vw;
    
  }

  img{ 
    height: 5vw;
    object-fit: contain;
  }
  .plus-icon{
    height: 1.5rem;
    color: black;
  }
  .new-event_btn{
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding-inline: 1rem;
    margin-top: 2rem;
    color:black;
    width: 13rem;
    background-color: #00C0FF;
    height: 5vh;
  font-family: 'roboto', sans-serif;
  border-radius: 5rem;
  border: none;
  }
  nav{ 
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content:center
  }
  ul{ 
    width: 100%;
  }
  ul li {
    display: flex;
    align-items: center;
    padding: 1rem 0  1rem 2rem;
    color:white;
    width: 100%;
    height: 2.5rem;
  }

  nav ul li:hover {
    background-color: #00C0FF;
  }
  .active{
    background-color: #00C0FF;
  }
</style>