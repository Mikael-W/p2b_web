<script>
import { useEventStore } from "@/stores/events"
export default {
  setup(){
    const eventStore = useEventStore();
    return { eventStore}
  },
  methods:{
    orderHandler(){
      this.eventStore.orderEvent();
      //this.$emit("orderDone")
    }
  }

}
</script>

<template>
  <div class="container">
    <div class="container_left">
      <div class="user_infos">
        <div class="user_infos--input">
          <label for="name">Nom commercial</label>
          <input type="text" value="Place2be admin event">
        </div>
        <div class="user_infos--input">
          <label for="adress">Adresse</label>
          <input type="text" value="2 rue de la chaussée saint martin">
        </div>
        <div class="user_infos--input-citycp">
          <div class="user_infos--input_divider">
            <label for="city">Ville</label>
          <input type="text" value="Paris">
          </div>
        <div class="user_infos--input_divider">
          <label for="city">cp</label>
          <input type="text" value="75001">
        </div>
        </div>
        <div class="user_infos--input">
          <label for="email">Email</label>
          <input type="email" value="place2bemail@gmail.com">
        </div><div class="user_infos--input">
          <label for="tel">Téléphone</label>
          <input type="tel" value="0606060606">
        </div>
      </div>
      <div class="container_card-infos">
        <label for="cardName">Nom</label>
        <input type="text">
        <label for="cardNumber">Numéro de la carte</label>
        <input type="text">
        <div class="card_box">
         <div class="card_input">
          <label for="expDate">Expire fin</label>
          <input type="text">
         </div>
        <div class="card_input">
          <label for="securityCode">Code de sécurité</label>
        <input type="text">
        </div>
      </div>
    </div>
  </div>
  <div class="container_right">
    <div class="container_event-infos">
      <div class="event_infos-recap">
        <div class="event_pict"></div>
        <div class="event_infos">Titre de l'évènement</div>
        <div class="event_infos"> 
          <span>Forfait:</span>
          <span>Forfait 1</span>
         </div>
        <div class="event_infos"> 
          <span>Rayon d'affichage:</span>
          <span>30km</span>  
        </div>
        <div class="event_infos"> 
          <span>Catégories:</span>
          <span>Famille, Spectacle, Concert</span> 
        </div>
        <div class="event_infos"> 
          <span>Durée:</span>
          <span>30jours</span>  
        </div>
        <div class="event_infos"> 
          <span>Montant total H.T. :</span>
          <span>123,75€</span>  
        </div>
        <div class="event_infos">
           <span>Taxes:</span>
          <span> 24,75€</span>
        </div>
        <div class="event_infos">
           <span>Montant total T.T.C. :</span>
           <span>148,50€</span>  
        </div>
      </div>
    </div>
    <button @click=orderHandler() >Payer</button>
  </div>
  </div>
</template>



<style lang="css" scoped>
.container{
  background-color:black;
  width: 78%;
  margin-left:1rem;
  height: 90vh;
  border-radius:1rem;
  display: flex;
  align-items: center;
  justify-content:space-around;
}
.container_left, .container_right{
  width: 45%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color:#00C0FF;
  padding-block: 1rem;
}
.user_infos, .container_event-infos{
  width: 90%;
  height: 45%
}
.user_infos--input{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.user_infos--input-citycp{
  display: flex;
}
.user_infos--input_divider{
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
}
label{
  margin-block: 0.5rem;
}
.event_infos-recap{
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
}
.event_infos{
  margin-block: 0.5rem;
  display: flex;
  justify-content: space-between;
}
.container_card-infos{
  width: 90%;
  display: flex;
  flex-direction: column;
}
.event_pict{
  background-color:white;
  width: 100%;
  height: 35%;
}
button{
  background-color:black;
  color:white;
  border:none;
  border-radius: 1rem;
  width: 10rem;
  height: 2rem;
}
.card_box{
  display: flex;
  margin-block: 1rem;;
}
</style>