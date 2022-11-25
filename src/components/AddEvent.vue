<script>
export default {
  data(){
    return {
      categories: false,
      themes: [],
      upArrow: false,
      downArrow: true,
    }
  },
  methods:{
    toggleArrow(){
      const arrow = document.getElementById("arrow");
      arrow.classList.toggle("rotate");
      if(this.categories == false){
        this.categories = true;
      }else{
        this.categories = false;
      }
      console.log(this.categories)
    }
  }

}
</script>


<template>
  <div class="container">
    <span class="pageTitle">Création d'un évènement</span>
<div class="event_container">
  <div class="event_container-infos">
    <div class="categories_box">
      <div  v-if="themes != null">
        <div  v-for="(theme, index) in themes" :key="index">
       <span class="themes">{{theme}}</span>
        </div>
      </div>
      <div class="placeholder" v-if="themes.length <= 0" >Catégories</div>
      <img id="arrow"  @click="toggleArrow()" src="../assets/icons8-collapse-arrow-50.png" alt="">
    </div>
    <div class="categories_box-container" v-if="categories == true">
      <div class="categories_box-input" >
        <label for="bricBrac">Brocantes et vide greniers</label>
        <input type="checkbox" value="bricBrac" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="familly">Famille</label>
        <input type="checkbox" value="familly" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="exhibitions">Expositions</label>
        <input type="checkbox" value="exhibitions" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="shows">Spectacles - Concerts - Bals</label>
        <input type="checkbox" value="shows" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="sports">Évènements sportifs</label>
        <input type="checkbox" value="sports" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="culturals">Évènements Culturel</label>
        <input type="checkbox" value="culturals" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="markets">Fêtes - Marchés - Autres</label>
        <input type="checkbox" value="markets" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="fairs">Foires et Salons</label>
        <input type="checkbox" value="fairs" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="commemoration">Commemoration</label>
        <input type="checkbox" value="commemorations" v-model="themes">
      </div>
    </div>
    <label for="title">Titre de l'évènement</label>
    <input type="text" v-model="title">
    <label for="startDate">Date de début</label>
    <input type="date" v-model="startDate">
    <label for="endDate">Date de fin</label>
    <input type="date" v-model="endDate">
    <label for="startTime">Heure de début</label>
    <input type="date" v-model="startTime">
    <label for="startTime">Heure de fin</label>
    <input type="date" v-model="endTime">
    <label for="adress">Adresse</label>
    <input type="text" v-model="adress">
    <label for="city">Ville</label>
    <input type="text" v-model="city">
    <label for="zip">Code Postal</label>
    <input type="number" v-model="zipcode">
    <label for="lat">Lattitude</label>
    <input type="text" v-model="lat">
    <label for="lng">Longitude</label>
    <input type="text" v-model="lng">
    <label for="tel">Téléphone</label>
    <input type="tel" v-model="tel">
    <label for="description">Description</label>
    <textarea v-model="description"></textarea>
    <label for="conditions">Conditions</label>
    <textarea v-model="conditions"></textarea>
    <label for="price">Prix</label>
    <input type="text" v-model="price">
    <label for="minPrice">Prix minimum</label>
    <input type="text" v-model="minPrice">
    <label for="maxPrice">Prix maximum</label>
    <input type="text" v-model="maxPrice">
  </div>
    <div class="event_container-renderApp"></div>
</div>
  
  </div>
  
</template>


<style scoped>
.container {
  margin-left: 1rem;
  width: 78%;
  height: 90vh;
  background-color:black;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event_container{
  display: flex;
  justify-content:space-around;
  align-items: center;
  width: 95%;
  height: 87%;
  background-color: #00C0FF;
  margin-top: 1rem;
}
.pageTitle{
  color: white;
  font-size:2rem;
  font-weight:bold;
  padding-top: 0.5rem;;
}
.event_container-infos, .event_container-renderApp{
  display: flex;
  background-color:black;
  flex-direction: column;
  align-items: center;
  width: 45%;
  height: 95%;
  margin-inline: 1rem;
}
.categories_box{
  background-color: black;
  border: 1px solid white;
  border-color: white;;
  color: white;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin-top: 0.5rem;
}
#arrow{
  height: 30px;
  margin-right: 0.5rem; 
}
.placeholder{
  font-size: 1.5rem;
}
.rotate{
  transform: rotate(0.5turn);
}
.categories_box-container{
  width: 90%;
  background-color:black;
  border: 1px solid white;
}
.categories_box-input{
  display: flex;
  justify-content:space-between;
  color: white;
  padding: 0.8rem
}
label{
  color: white;
}
</style>