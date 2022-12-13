<script>
export default {
  data(){
    return {
      isEntreprise: true,
      isAssociation: false,
      categories: false,
      themes: [],
      upArrow: false,
      downArrow: true,
      title:"",
      startDate:"",
      endDate:"",
      startTime:"",
      endTime:"",
      adress:"",
      city:"",
      zipcode:"",
      lat:"",
      lng:"",
      tel:"",
      web:"",
      price:"",
      minPrice:"",
      maxPrice:"",
      descriptionFr:"",
      descriptionEn:"",
      conditionsFr:"",
      conditionsEn:"",
      isFree:false
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
    },
    nextAddingPart(){
      if(this.isEntreprise == true){
        this.$emit("marketSetting",{adspart:true});
      }
      if(this.isAssociation == true){
        this.$emit("marketSetting", {adspart: false})
      }
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
      <div class="themes_box" v-if="themes != null">
        <div  v-for="(theme, index) in themes.slice(0, 4)" :key="index">
       <div class="themes">{{theme}}</div>
        </div>
      </div>
      <div class="placeholder" v-if="themes.length <= 0" >Catégories (maximum 3)</div>
      <img id="arrow"  @click="toggleArrow()" src="../assets/icons8-collapse-arrow-50.png" alt="">
    </div>
    <div class="categories_box-container" v-if="categories == true">
      <div class="categories_box-input" >
        <label for="bricBrac">Brocantes et vide greniers</label>
        <input type="checkbox" value="Brocante" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="familly">Famille</label>
        <input type="checkbox" value="Famille" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="exhibitions">Expositions</label>
        <input type="checkbox" value="Expositions" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="shows">Spectacles - Concerts - Bals</label>
        <input type="checkbox" value="Spectacles" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="sports">Évènements sportifs</label>
        <input type="checkbox" value="Sports" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="culturals">Évènements Culturel</label>
        <input type="checkbox" value="Culturels" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="markets">Fêtes - Marchés - Autres</label>
        <input type="checkbox" value="Marchés" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="fairs">Foires et Salons</label>
        <input type="checkbox" value="Salons" v-model="themes">
      </div>
      <div class="categories_box-input">
        <label for="commemoration">Commemoration</label>
        <input type="checkbox" value="Commemorations" v-model="themes">
      </div>
    </div>
    <div class="infos_input">
      <label for="title">Titre de l'évènement *</label>
      <input type="text" v-model="title">
    </div>
    <div class="box_moment">
      <div class="infos_input">
        <label for="startDate">Date de début *</label>
        <input type="date" v-model="startDate">
      </div>
      <div class="infos_input">
        <label for="endDate">Date de fin *</label>
        <input type="date" v-model="endDate">
      </div>
    </div>
    <div class="box_moment"> 
      <div class="infos_input">
        <label for="startTime">Heure de début</label>
        <input type="text" v-model="startTime" placeholder="16:00">
      </div>
      <div class="infos_input">
        <label for="endTime">Heure de fin</label>
        <input type="text" v-model="endTime" placeholder="22:00">
      </div>
  </div>
    <div class="infos_input">
      <label for="adress">Adresse *</label>
      <input type="text" v-model="adress">
    </div>
    <div class="infos_input">
      <label for="city">Ville *</label>
      <input type="text" v-model="city">
    </div> 
    <div class="infos_input">
      <label for="zip">Code Postal *</label>
      <input type="number" v-model="zipcode">
    </div>
    <div class="geolocate_inputs">
      <div class="infos_input">
      <label for="lat">Lattitude *</label>
      <input type="text" v-model="lat">
      </div>
      <div class="infos_input">
        <label for="lng">Longitude *</label>
        <input type="text" v-model="lng">
      </div> 
    </div>
    <div class="latLng_btn-box">
      <div class="div">Générer la lattitude et longitude</div>
      <button>Générer</button>
    </div>
    <div class="infos_input">
      <label for="tel">Téléphone</label>
      <input type="tel" v-model="tel">
    </div>
    <div class="infos_input">
      <label for="web">Site web</label>
      <input type="text" v-model="web">
    </div>
   
    <div class="prices_box">
      <div class="price_input">
        <label for="minPrice">Prix enfant</label>
        <input class="prices" type="text" v-model="minPrice" placeholder="5,00€">
      </div>
      <div class="price_input">
        <label for="maxPrice">Prix adulte</label>
        <input class="prices" type="text" v-model="maxPrice" placeholder="10,00€">
      </div>
    </div>
    <div class="eventFree">
      <input type="checkbox" value="eventFree" v-model="isFree">
      <label for="coeventFreemmemoration">Entrée Gratuite</label>  
    </div>
  </div>
  <div class="event_container-description">
    <div class="event_picture">
    </div>
    <div class="file_input-box">
      <label class="file_input">
     <input type="file"/>
      Importer une image ou une vidéo
    </label>
    </div>
    <div class="infos_input">
      <label for="descriptionFr">Description</label>
    <textarea rows="7" v-model="descriptionFr"></textarea>
    </div>
    <div class="infos_input">
      <label for="conditionsFr">Conditions</label>
      <textarea rows="5" v-model="conditionsFr"></textarea>
    </div>
    <button @click="nextAddingPart()">Continuer &#8594;</button>
  </div>
</div>
  
  </div>
  
</template>


<style lang="css" scoped>
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
.event_container-infos, .event_container-description{
  position: relative;
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
  margin: 0.5rem 0 0 0.5rem;
}
.themes_box{
  display: flex;
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
  position: absolute;
  margin:2.5rem 0 0 0.5rem;
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
.themes{
  background-color:#00C0FF;
  margin-left: 0.3rem;
  padding: 0.2rem;
  border-radius: 0.2rem;
}
label{
  color: white;
  margin-left: 0.5rem
}
input, textarea{
  margin-left: 0.5rem
}
input[type='checkbox'] {
    accent-color: #00C0FF;
}
textarea{
  resize:none;
  overflow: scroll;
}
.latLng_btn-box{
  width:85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.latLng_btn-box button {
  width: 8rem;
  margin-top: 0;
  height: 1.5rem;
}
.infos_input, .price_input{
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  width: 90%;
  padding-block: 0.3rem;
}
.price_input{
  width: 28%;
}
.prices{
  text-align: end;
}
.box_moment, .box_startEnding, .geolocate_inputs, .prices_box{
  width: 90%;
  display: flex;
  align-items:center
}
.eventFree{
  display: flex;
  justify-content:flex-start;
  width: 90%;
}
.event_picture{
  margin-block:1rem;
  width:90%;
  height: 10rem;
  background-color:white;

}
.file_input-box{
  width: 90%;
  display: flex;
  justify-content: flex-end;
}
input[type="file"] {
    display: none;
}
.file_input {
  display: block;
    border: 1px solid white;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}
.file_input:hover,button:hover{
  background-color:#00C0FF;
  color: white;
}
button{
  margin-top: 1.5rem;
  width: 60%;
  height: 2rem;
  color:white;
  background-color:black;
  border: 1px solid white;
  border-radius: 5rem;
  cursor: pointer;
}
.location{
  margin-left: 0.3rem;
  cursor: pointer;
  display: block;
}
.icon{
  height: 1.5rem;
}
</style>