<script>
import { useEventStore } from '../stores/events';
import axios from 'axios';
export default {
  setup(){
    const eventStore =  useEventStore();
    return { eventStore }
  },
  data(){
    return {
      placeholder:"../assets/img_placeholder.png",
      isEntreprise: true,
      isAssociation: false,
      categories: false,
      themes: [],
      upArrow: false,
      downArrow: true,
      title:"",
      image:"",
      startDate:"",
      endDate:"",
      startTime:"",
      endTime:"",
      adresses:[],
      city:"",
      zipcode:"",
      lat:"",
      lng:"",
      tel:[],
      web:"",
      price:"",
      minPrice:"",
      maxPrice:"",
      descriptionFr:"",
      descriptionEn:"",
      conditionsFr:"",
      conditionsEn:"",
      isFree:false,
      file:{},
    }
  },
  methods:{
    toggleArrow(){
      const arrow = document.getElementById("arrow");
      const eventContainer = document.querySelector(
        ".event_container-infos"
      );
      arrow.classList.toggle("rotate");
      if(this.categories == false){
        this.categories = true;
      }else{
        this.categories = false;
      }
      if(this.categories === true){
        window.addEventListener("click", e => {
          if(e.target == eventContainer ){this.categories = false};
        })
      }
    },
    onFileChange(e){
      const files = e.target.files || e.dataTransfer.files;
      if(!files.length)return
      this.file = files;
      console.log(this.file[0]);
      this.createImage(files[0]);
    },
    createImage(file){
      const image = new Image();
      const reader = new FileReader();
      const vm = this
        reader.onload = (e) => {
          vm.image = e.target.result;
        };
        reader.readAsDataURL(file);},
    removeImage(e){
      this.image = "";
    },
    nextAddingPart(){
        let event = new FormData();
        event.append("isEntreprise",this.isEntreprise)
        event.append("isAssociation", this.isAssociation)
        event.append("categories", this.categories )
        event.append("themes", this.themes )
        event.append("title", this.title)
        event.append("file", this.file[0] )
        event.append("startDate", this.startDate )
        event.append("endDate",this.endDate )
        event.append("startTime", this.startTime)
        event.append("endTime", this.endTime)
        event.append("adresses", this.adresses)
        event.append("city", this.city)
        event.append("zipcode", this.zipcode)
        event.append("lat", this.lat)
        event.append("lng", this.lng)
        event.append("tel", this.tel)
        event.append("web", this.web)
        event.append("minPrice", this.minPrice)
        event.append("maxPrice", this.maxPrice)
        event.append("descriptionFr", this.descriptionFr)
        event.append("descriptionEn", this.descriptionEn)
        event.append("conditionsFr",this.conditionsFr)
        event.append("conditionsEn", this.conditionsEn)
        event.append("isFree",this.isFree)
      if(this.isEntreprise == true){
        this.$emit("marketSetting",{adspart:true});
      }
      if(this.isAssociation == true){
        this.$emit("marketSetting", {adspart: false})
      }
      this.useEventStore.addEvent(event);
    },
    async searchGeo(){
        await axios.get(import.meta.env.VITE_GEO_API + `${this.adresses}&postcode=${this.zipcode}`).then(result => {
          this.lng = result.data.features[0]['geometry']['coordinates'][0],
            this.lat = result.data.features[0]['geometry']['coordinates'][1]
        });
  }
  }
}
</script>


<template>
  <div class="container">
    <span class="pageTitle">Création d'un évènement</span>
<div class="event_container">
  <div class="event_container-infos">
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
    <div class="categories_box-container">
    <div class="categories_box" @click="toggleArrow()">
      <div class="themes_box" v-if="themes != null">
        <div  v-for="(theme, index) in themes.slice(0, 4)" :key="index">
       <div  class="themes">{{theme}}</div>
        </div>
      </div>
      <div @click="toggleArrow()" class="placeholder" v-if="themes.length <= 0" >Catégories (maximum 4)</div>
      <img id="arrow"  src="../assets/icons8-collapse-arrow-50.png" alt="">
    </div>
    <div class="categories_box-container--input" v-if="categories == true">
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
  </div>
    <div class="event_picture">
      <img class="event_image" :src="image" v-if="image" >
    </div>
    <div class="file_input-box" v-if="!image">
      <label class="file_input">
      <input type="file" @change="onFileChange" />
        cliquez ici pour importer une image ou une vidéo
      </label>
     
    </div>
    <div class="file_change-input" v-if="image">
      <label class="file_input-change">
       <input class="cursor" type="file" @change="onFileChange" />
        Changer d'image ou de video
      </label>
    </div>
    <div class="infos_input">
      <label for="adress">Adresse *</label>
      <input type="text" v-model="adresses">
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
      <input type="text" v-model="lat" >
      </div>
      <div class="infos_input">
        <label for="lng">Longitude *</label>
        <input type="text" v-model="lng">
      </div> 
    </div>
    <div class="latLng_btn-box">
      <div class="div">Générer la lattitude et longitude</div>
      <button @click="searchGeo()" class="">Générer</button>
    </div>
    <div class="infos_input">
      <label for="tel">Téléphone</label>
      <input type="tel" v-model="tel">
    </div>
    <div class="infos_input">
      <label for="web">Site web</label>
      <input type="text" v-model="web">
    </div>
    <div class="infos_input">
      <label for="descriptionFr">Description</label>
    <textarea rows="7" v-model="descriptionFr"></textarea>
    </div>
    <div class="infos_input">
      <label for="conditionsFr">Conditions</label>
      <textarea rows="5" v-model="conditionsFr"></textarea>
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
    <div class="prices_box">
      <div class="price_input">
        <label for="minPrice">Prix enfant</label>
        <div class="price_container">
          <input class="prices" type="text" v-model="minPrice" placeholder="5,00">
        <span class="euro">€</span>
        </div>
      </div>
      <div class="price_input">
        <label for="maxPrice">Prix adulte</label>
        <div class="price_container">
          <input class="prices" type="text" v-model="maxPrice" placeholder="10,00">
          <span class="euro">€</span>
        </div> 
      </div>
    </div>
    <div class="eventFree">
      <input type="checkbox" value="eventFree" v-model="isFree">
      <label for="coeventFreemmemoration">Entrée Gratuite</label>  
    </div>
  </div>
  <div class="exemple_event-container">
    <div class="event_display">
        <div class="mobile_body-title">{{ title }}</div>
        <div class="mobile_body-date">
          <img class="iconw" src="../assets/calendar_month.png" alt="">
          <div class="mobile_body-date_box">
            <div class="mobile_body-date_start"> {{ startDate }} </div>
            <span class="date-link blue">au</span>
            <div class="mobile_body-date_end">  {{ endDate }} </div>
          </div>
        </div>
        <div class="mobile_body-img_box">
          <img class= "mobile_body-img" :src="image" alt="">
        </div>
        <div class="mobile_body-location">
          <img  class="iconw" src="../assets/location_mobile.png" alt="">
          <div class="mobile_body-location_box">
            <div class="mobile_body-adress blue">{{ adresses }}</div>
            <div class="mobile_body-adress">
              <span class="blue">{{ zipcode }}</span>
              <span class="blue">{{ city}}</span>
            </div>
          </div>
        </div>
        <div class="mobile_body-icons_box">
          <img  class="iconw" src="../assets/favorite.png" alt="favoris">
          <img  class="iconw" src="../assets/phone.png" alt="telephone">
          <img  class="iconw" src="../assets/web.png" alt="lien web">
        </div>
       
        <div class="mobile_body-description black">{{ descriptionFr }}</div>
        <div class="mobile_body-condition black">{{ conditionsFr }}</div>
        <div class="mobile_body-time">
          <img class="iconw" src="../assets/schedule.png" alt="">
          <div class="mobile_body-time_box">
            <div class="mobile_body-time_start black"> {{ startTime }} </div>
            <span class="blue">-</span>
            <div class="mobile_body-time_end black">  {{ endTime }} </div>
          </div>
        </div>
        <div class="mobile_body-price">
          <img  class="iconw" src="../assets/payments.png" alt="prix">
          <div v-if="isFree === true" class="mobile_body-isfree blue">Gratuit</div>
          <div class="mobile_body-price_box">
            <div class="mobile_body-price_min black"> {{ minPrice }} </div>
            <span v-if="isFree === false" class="blue">-</span>
            <div class="mobile_body-price_max black">  {{ maxPrice }} </div>
          </div>
        </div>
       
    </div>
    <!-- <img  class="device" src="../assets/device_frame.png" alt=""> -->
   
    <button @click="nextAddingPart()">Continuer &#8594;</button>
  </div>
 
</div>

  </div>
  
</template>


<style lang="css" scoped>
.container {
  margin-left: 1rem;
  width: 78%;
  height: 95vh;
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
.event_container-infos{
  position: relative;
  display: flex;
  background-color:black;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 95%;
  margin-inline: 1rem;
  overflow: scroll;
}
.exemple_event-container{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00C0FF;
  width:40%;

}
.categories_box-container{
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
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
.categories_box-container--input{
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
  margin: 0 0 0.2rem 0.5rem;
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
  width: 50%;
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
  margin:1rem 0 1rem 0.2rem;
  width:90%;
  height: 12rem;
  background-color:white;

}
.event_image{
  width: 100%;
  height:100%;
  object-fit: cover;
}
.file_input-box{
  width: 90%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}
input[type="file"] {
    display: none;
}
.file_input {
  display: block;
  width: 100%;
  height: 15vw;
  cursor: pointer;
  color: black;
  display: flex;
  justify-content:center;
  align-items: center;
  background-color: lightgrey;
  /* background-image:url("../assets/img_placeholder.png");
  background-repeat: no-repeat;
  object-fit: cover; */
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
.price_container{
  display: flex;
  align-items: center;
}
.euro{
  margin-left: 0.5rem;
}
.file_change-input{
  width: 85%;
  text-align: center; 
  padding-block: 0.3rem;
  border: 1px solid white;
  cursor: pointer;
  margin-bottom: 0.5rem;
}
.cursor{
  cursor: pointer;
}
.device{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20vw;
}
.event_display{
  margin-top: 1rem;;
  background-color:white;
  width: 18vw;
  height: 70vh;
  overflow: scroll;
}
.mobile_body-title{
  color:#00C0FF;
  font-weight: bold;
  font-size:1rem;
  width: 100%;
  margin: 1rem 0 0 1rem;
}
.mobile_body-date_start, .mobile_body-date_end {
  color: black;
}
.blue{
  color:#00C0FF;
}
.iconw{
  width: 25px;
}
.black{
  color:black;
}
.mobile_body-img{
  width: 100%;
  object-fit: cover;
}
.mobile_body-img{
  object-fit: cover;
}
.mobile_body-date,
.mobile_body-date_box, 
.mobile_body-location,
.mobile_body-time,
.mobile_body-price,
.mobile_body-time_box{
  display: flex;
  align-items: center;
}
.date-link{
  margin-inline: 0.2rem;
}
.mobile_body-icons_box{
  display:flex;
  justify-content: space-around;
  align-items: center;
}
</style>