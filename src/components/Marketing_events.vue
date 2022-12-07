<script>
export default {
  data(){
    return {
      categories: false,
      themes: ["Spectacle", "Exposition", "Famille", "Marché"],
      upArrow: false,
      downArrow: true,
      firstPackPrice :99,
      secondPackPrice :199,
      thirdPackPrice :299,
      HeroPrice: 999,
      premiumHero:9999
    }
  },
  computed:{
    firstPackPrice(){
      if(this.themes.length === 2){
        return this.firstPackPrice + (this.firstPackPrice *0.15);
      }else if(this.themes.length === 3){
        return this.firstPackPrice + (this.firstPackPrice *0.20);
      }else if(this.themes.length === 4){
        return this.firstPackPrice + (this.firstPackPrice *0.25)
      }else{
      return this.firstPackPrice
    }
    },
    secondPackPrice(){
      if(this.themes.length === 2){
        return this.secondPackPrice + (this.secondPackPrice *0.15);
      }else if(this.themes.length === 3){
        return this.secondPackPrice + (this.secondPackPrice *0.20);
      }else if(this.themes.length === 4){
        return this.secondPackPrice + (this.secondPackPrice *0.25)
      }else{
      return this.secondPackPrice
    }
    },
    thirdPackPrice(){
      if(this.themes.length === 2){
        return this.thirdPackPrice + (this.thirdPackPrice *0.15);
      }else if(this.themes.length === 3){
        return this.thirdPackPrice + (this.thirdPackPrice *0.20);
      }else if(this.themes.length === 4){
        return this.thirdPackPrice + (this.thirdPackPrice *0.25)
      }else{
      return this.thirdPackPrice
    }
    }, 
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
  }
  
}
</script>

<template>
  <div class="container">
    <div class="container_title">Choisisser votre forfait</div>
    <div class="package_container">
      <div class="package">
        <div class="package_title">Forfait 1</div>
        <div class="divider"></div>
        <div class="package_description">Diffusion dans la ou les catégories choisies, tout les 3 évènements, ordre d'affichage selon distance la plus proche</div>
        <div class="divider"></div>
        <span class="bold">Rayon de diffusion:</span>
        <span>30 Km</span>
        <div class="divider"></div>
        <div class="categories_box">
          <div class="categories_box-title">
            <span class="box-title">Catégories</span> 
            <img id="arrow"  @click="toggleArrow()" src="../assets/icons8-collapse-arrow-50.png" alt=""> 
          </div>
          <div>
            <div  class="themes_box" v-for="(theme, index) in themes.slice(0, 4)" :key="index">
              <div class="themes">{{theme}} &#x2612;
              </div>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="price">{{firstPackPrice}}€</div>
        <input type="radio" name="packageChoice" value="packOne"/>
      </div>
      <div class="package">
        <div class="package_title">Forfait 2</div>
        <div class="divider"></div>
        <div class="package_description">Diffusion dans la ou les catégories choisies, tout les 3 évènements, ordre d'affichage selon distance la plus proche</div>
        <div class="divider"></div>
        <span class="bold">Rayon de diffusion:</span>
        <span>100 Km</span>
        <div class="divider"></div>
        <div class="categories_box">
          <div class="categories_box-title">
            <span class="box-title">Catégories</span> 
            <img id="arrow"  @click="toggleArrow()" src="../assets/icons8-collapse-arrow-50.png" alt=""> 
          </div>
          <div>
            <div  class="themes_box" v-for="(theme, index) in themes.slice(0, 4)" :key="index">
              <div class="themes">{{theme}} &#x2612;
              </div>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="price">{{secondPackPrice}}€</div>
        <input type="radio" name="packageChoice" value="packTwo"/>
      </div>
      <div class="package">
        <div class="package_title">Forfait 3</div>
        <div class="divider"></div>
        <div class="package_description">Diffusion dans la ou les catégories choisies, tout les 3 évènements, ordre d'affichage selon distance la plus proche</div>
        <div class="divider"></div>
        <span class="bold">Rayon de diffusion:</span>
        <span>200 Km</span>
        <div class="divider"></div>
        <div class="categories_box">
          <div class="categories_box-title">
            <span class="box-title">Catégories</span> 
            <img id="arrow"  @click="toggleArrow()" src="../assets/icons8-collapse-arrow-50.png" alt=""> 
          </div>
          <div>
            <div  class="themes_box" v-for="(theme, index) in themes.slice(0, 4)" :key="index">
              <div class="themes">{{theme}} &#x2612;
              </div>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="price">{{thirdPackPrice}}€</div>
        <input type="radio" name="packageChoice" value="packThree"/>
      </div>
      <div class="package">
        <div class="package_title">Forfait 4</div>
        <div class="divider"></div>
        <div class="package_description">Diffusion sur la France entière dans la bannière publicitaire, ordre aléatoire suivant le nombre de publicités</div>
        <div class="divider"></div>
        <span class="bold">Rayon de diffusion:</span>
        <span>France</span>
        <div class="divider"></div>
        <div class="price">{{HeroPrice}}€</div>
        <input type="radio" name="packageChoice" value="packFour"/>
      </div>
      <div class="package">
        <div class="package_title">Forfait 5</div>
        <div class="divider"></div>
        <div class="package_description">Diffusion prioritaire annuelle sur la France entière dans la bannière publicitaire</div>
        <div class="divider"></div>
        <span class="bold">Rayon de diffusion:</span>
        <span>France</span>
        <div class="divider"></div>
        <div class="price">{{premiumHero}}€</div>
        <input type="radio" name="packageChoice" value="packFive"/>
      </div>
    </div>
    <button>Continuer</button>
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
</template>



<style lang="css" scoped>
.container {
  width: 78%;
  height: 90vh;
  background-color:black;
  margin-left: 1rem;
  display : flex;
  flex-direction: column;
  align-items: center
}
.container_title{
  font-size:3rem;
}
.package_container{
  width:100%;
  height: 100%;
  display: flex;
  justify-content:space-around;
}
.package{
  height: 90%;
  width: 18%;
  background-color:#00C0FF;
  margin-top: 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.package_title{
  font-size:2rem;
  font-weight: bold;
  margin-top: 1rem;
}
.divider{
  width: 80%;
  height:1px;
  background-color:white;
  margin-block: 0.2rem;
}
.categories_box{
  width: 100%;
}
.categories_box-title{
  display: flex;
  width:100%;
  justify-content:space-around;
  font-size: 1.2rem;
  font-weight: bold;
}
#arrow{
  height:1rem
}
.rotate{
  transform: rotate(0.5turn);
}
.themes_box{
  display: flex;
  justify-content:center;
}
.themes{
  background-color:black;
  color:white;
  margin-left: 0.3rem;
  padding: 0.2rem;
  border-radius: 0.2rem;
  margin-block: 0.3rem;
}
.package_description{
  padding-inline:1rem;
  text-align:center;
  font-size:1rem;
}
.bold{
  font-weight: bold;
  font-size: 1.2rem;
  margin-top:0.3rem;
}
.price{
  font-size: 2rem;
  font-weight: bold;
}
button{
  width: 10rem;
  height: 2rem;
  border: 1px solid white;
  border-radius: 1rem;
  margin-bottom: 1rem;
  background-color:black;
  color: white;
  cursor: pointer
}
button:hover{
  background-color: #00C0FF;
}
</style>