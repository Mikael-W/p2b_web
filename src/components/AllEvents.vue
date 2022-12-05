<script>

  import DeletePopUp from "../components/PopUp_delete.vue";

export default {
  components: {DeletePopUp},
  data(){
    return{
      deletePopUp: false
    }
  },
  methods:{
    closingModal(isTrue){
      this.deletePopUp = isTrue.toClose
    }
  }
  
}
</script>

<template>
  <div class="allevents_container">
    <div class="event_container">
      <div class="event_title">Mes évènements</div>
      <div class="searchBar">
        <input type="text" v-model="searchFilter" placeholder="Entrer ici votre recherche ">
        <button>&#x1F50E; Rechercher </button>
      </div>
      <div class="events">
        <div class="event_item">
          <div class="event_pict"></div>
          <div class="event_description-container">
            <div class="event_description-infos">
              <div class="event_description-title">Titre de l'évènement</div>
              <div class="event_description-location">
                <span class="zip">Code Postal</span>
                <span class="city">Ville</span>
              </div>
            </div>
            <div class="event_description-actions">
              <button>Modifier</button>
              <button @click="deletePopUp = true">Supprimer</button>
            </div> 
          </div>
        </div>
        <div class="event_item">
          <div class="event_pict"></div>
          <div class="event_description-container">
            <div class="event_description-infos">
              <div class="event_description-title">Titre de l'évènement</div>
              <div class="event_description-location">
                <span class="zip">Code Postal</span>
                <span class="city">Ville</span>
              </div>
            </div>
            <div class="event_description-actions">
              <button>Modifier</button>
              <button>Supprimer</button>
            </div>
          </div>
        </div>
        <div class="event_item">
          <div class="event_pict"></div>
          <div class="event_description-container">
            <div class="event_description-infos">
              <div class="event_description-title">Titre de l'évènement</div>
              <div class="event_description-location">
                <span class="zip">Code Postal</span>
                <span class="city">Ville</span>
              </div>
            </div>
            <div class="event_description-actions">
              <button>Modifier</button>
              <button>Supprimer</button>
            </div>
          </div>
        </div>
        <div class="event_item">
          <div class="event_pict"></div>
          <div class="event_description-container">
            <div class="event_description-infos">
              <div class="event_description-title">Titre de l'évènement</div>
              <div class="event_description-location">
                <span class="zip">Code Postal</span>
                <span class="city">Ville</span>
              </div>
            </div>
            <div class="event_description-actions">
              <button>Modifier</button>
              <button>Supprimer</button>
            </div>
          </div>
        </div>
        <div class="event_item">
          <div class="event_pict"></div>
          <div class="event_description-container">
            <div class="event_description-infos">
              <div class="event_description-title">Titre de l'évènement</div>
              <div class="event_description-location">
                <span class="zip">Code Postal</span>
                <span class="city">Ville</span>
              </div>
            </div>
            <div class="event_description-actions">
              <button>Modifier</button>
              <button>Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="stats_container">
      <div class="stats-title">Mes statistiques</div>
      <div class="stats">
        <div class="stats_bloc">
          <div class="stat_title">Vues</div>
          <div class="stat">155 000</div>
        </div>
        <div class="stats_bloc">
          <div class="stat_title">Clics</div>
          <div class="stat">375</div>
        </div>
        <div class="stats_bloc">
          <div class="stat_title">Appels</div>
          <div class="stat">47</div>
        </div>
        <div class="stats_bloc">
          <div class="stat_title">Sites</div>
          <div class="stat">28</div>
        </div>
      </div>
    </div>
  </div>
 <DeletePopUp @closeModal="closingModal" v-if="deletePopUp == true"/>
</template>



<style scoped>
.allevents_container{
  margin-left: 1rem;
  width: 78%;
  height: 95vh;
  background-color:black;
  border-radius: 1rem;
  display: flex;
  justify-content:space-around;
  
}
.event_container, .stats_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  margin-inline: 1rem
}
.event_title, .stats-title{
  margin-top: 1rem;
  font-size:2rem;
  font-weight: bold;
  color: white;
}
.events, .stats{
  margin-top: 0.8rem;
  width: 100%;
  height: 75vh;
  background-color: #00C0FF;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  overflow-y: scroll;
  scrollbar-width: thin;
}
.events{
  padding-top: 0.5rem;
  flex-direction: column;
  justify-content: space-around;
 
}
.stats{
  height: 85%;
  margin-top: 1rem;
  justify-content:space-around;
  flex-wrap: wrap;
}
.event_item{
  height: 7rem;
  width: 95%;
  margin-bottom: 0.2rem;
  background-color: black;
  display: flex;
  justify-content: start;
  align-items:center;
}
.stats_bloc{
  width: 13rem;
  height: 13rem;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items:center;
}
.stat_title{
  padding: 1rem 0 3rem 0;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;;
}
.stat{
 
  color: white;
  font-weight: bold;
  font-size: 2.5rem;;
}
.event_pict{
  width: 6.5rem;
  height: 6rem;
  background-color: white;
  margin: 0.5rem;
}
.city, .zip, .event_description-title, .event_description-text{
  color: white;
}
.event_description-title{
  height: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
}
.event_description-location{
  margin-block: 0.5rem;
  display: flex;
}
.city, .zip {
  display: block;
}
.zip{
  margin-right: 1rem
}
.event_description-actions{
  width: 20rem;
  display: flex;
  justify-content: flex-end;
}
button{
  width: 5rem;
  display: block;
  background-color:#00C0FF;
  color: white;
  border: none;
  padding: 0.4rem;  
  margin: 0 0.5rem 0 0.5rem;
}
.searchBar{
  display: flex;
  width: 100%;
 height: 2rem;	
 margin-top: 0.5rem;
}
.searchBar input{
  width:75%;
  background-color:#00C0FF;
  color: white;
  border: none;
  outline: none;
  border-top-left-radius:1rem;
  border-bottom-left-radius:1rem;
  text-indent: 1rem;
}
::placeholder{
  color:white;
}
.searchBar button{
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size:0.8rem;
  width: 25%;
  margin: 0;
  border-top-right-radius:1rem;
  border-bottom-right-radius:1rem;
  background-color: black;
  border-top: 2px solid #00C0FF;
  border-bottom: 2px solid #00C0FF;
  border-right: 2px solid #00C0FF;
}
</style>