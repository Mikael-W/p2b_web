<script>

  import DeletePopUp from "../components/PopUp_delete.vue";

export default {
  components: {DeletePopUp},
  data(){
    return{
      deletePopUp: false,
      userFilter: "",
      difFilter:"",
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
  <div class="allUsers_container">
    <div class="users_container">
      <div class="users_title">Utilisateurs mobile</div>
      <div class="searchBar">
        <input type="text" v-model="userFilter" placeholder="Entrer ici votre recherche ">
        <button>&#x1F50E; Rechercher </button>
      </div>
      <div class="mobile_users">
        <div class="user_item">
          <div class="user_description-container">
            <div class="user_description-infos">
              <div class="user_id">id : XW23459566</div>
              <div class="user_names-box">
                <div class="user_Lastname">Nom: Doe</div>
              <div class="username">Prénom: John</div>
              </div>
              <div class="user_adress">addresse: 1 place 2 be</div>
              <div class="user_adress-infos">
                <span class="zip">CP: 75001</span>
                <span class="city">Ville: Paris</span>
              </div>
            </div>
           
            <div class="user_description-actions">
              <div class="user_tel">Tel: 0606060606</div>
              <div class="button-box">
                <button>Modifier</button>
                <button @click="(deletePopUp = true)">Supprimer</button>
              </div>
            </div> 
          </div>
        </div>
        <div class="user_item">
          <div class="user_description-container">
            <div class="user_description-infos">
              <div class="user_id">id : XW23459566</div>
              <div class="user_names-box">
                <div class="user_Lastname">Nom: Doe</div>
              <div class="username">Prénom: John</div>
              </div>
              <div class="user_adress">addresse: 1 place 2 be</div>
              <div class="user_adress-infos">
                <span class="zip">CP: 75001</span>
                <span class="city">Ville: Paris</span>
              </div>
            </div>
           
            <div class="user_description-actions">
              <div class="user_tel">Tel: 0606060606</div>
              <div class="button-box">
                <button>Modifier</button>
                <button @click="(deletePopUp = true)">Supprimer</button>
              </div>
            </div> 
          </div>
        </div>
        <div class="user_item">
          <div class="user_description-container">
            <div class="user_description-infos">
              <div class="user_id">id : XW23459566</div>
              <div class="user_names-box">
                <div class="user_Lastname">Nom: Doe</div>
              <div class="username">Prénom: John</div>
              </div>
              <div class="user_adress">addresse: 1 place 2 be</div>
              <div class="user_adress-infos">
                <span class="zip">CP: 75001</span>
                <span class="city">Ville: Paris</span>
              </div>
            </div>
           
            <div class="user_description-actions">
              <div class="user_tel">Tel: 0606060606</div>
              <div class="button-box">
                <button>Modifier</button>
                <button @click="(deletePopUp = true)">Supprimer</button>
              </div>
            </div> 
          </div>
        </div>
        <div class="user_item">
          <div class="user_description-container">
            <div class="user_description-infos">
              <div class="user_id">id : XW23459566</div>
              <div class="user_names-box">
                <div class="user_Lastname">Nom: Doe</div>
              <div class="username">Prénom: John</div>
              </div>
              <div class="user_adress">addresse: 1 place 2 be</div>
              <div class="user_adress-infos">
                <span class="zip">CP: 75001</span>
                <span class="city">Ville: Paris</span>
              </div>
            </div>
           
            <div class="user_description-actions">
              <div class="user_tel">Tel: 0606060606</div>
              <div class="button-box">
                <button>Modifier</button>
                <button @click="(deletePopUp = true)">Supprimer</button>
              </div>
            </div> 
          </div>
        </div>
        <div class="user_item">
          <div class="user_description-container">
            <div class="user_description-infos">
              <div class="user_id">id : XW23459566</div>
              <div class="user_names-box">
                <div class="user_Lastname">Nom: Doe</div>
              <div class="username">Prénom: John</div>
              </div>
              <div class="user_adress">addresse: 1 place 2 be</div>
              <div class="user_adress-infos">
                <span class="zip">CP: 75001</span>
                <span class="city">Ville: Paris</span>
              </div>
            </div>
           
            <div class="user_description-actions">
              <div class="user_tel">Tel: 0606060606</div>
              <div class="button-box">
                <button>Modifier</button>
                <button @click="(deletePopUp = true)">Supprimer</button>
              </div>
            </div> 
          </div>
        </div>
        <div class="user_item">
          <div class="user_description-container">
            <div class="user_description-infos">
              <div class="user_id">id : XW23459566</div>
              <div class="user_names-box">
                <div class="user_Lastname">Nom: Doe</div>
              <div class="username">Prénom: John</div>
              </div>
              <div class="user_adress">addresse: 1 place 2 be</div>
              <div class="user_adress-infos">
                <span class="zip">CP: 75001</span>
                <span class="city">Ville: Paris</span>
              </div>
            </div>
           
            <div class="user_description-actions">
              <div class="user_tel">Tel: 0606060606</div>
              <div class="button-box">
                <button>Modifier</button>
                <button @click="(deletePopUp = true)">Supprimer</button>
              </div>
            </div> 
          </div>
        </div>
      </div>
      
    </div>
    <div class="users_container">
      <div class="users_title">Diffuseurs</div>
      <div class="searchBar">
        <input type="text" v-model="difFilter" placeholder="Entrer ici votre recherche ">
        <button>&#x1F50E; Rechercher </button>
      </div>
      <div class="mobile_users">
        <div class="user_item">
          <div class="user_description-container">
            <div class="user_description-infos">
              <div class="user_id">id : XW23459566</div>
              <div class="user_names-box">
                <div class="user_Lastname">Nom: Doe</div>
              <div class="username">Prénom: John</div>
              </div>
              <div class="user_adress">addresse: 1 place 2 be</div>
              <div class="user_adress-infos">
                <span class="zip">CP: 75001</span>
                <span class="city">Ville: Paris</span>
              </div>
            </div>
           
            <div class="user_description-actions">
              <div class="user_tel">Tel: 0606060606</div>
              <div class="button-box">
                <button>Modifier</button>
                <button @click="(deletePopUp = true)">Supprimer</button>
              </div>
            </div> 
          </div>
        </div>
        <div class="user_item">
          <div class="user_description-container">
            <div class="user_description-infos">
              <div class="user_id">id : XW23459566</div>
              <div class="user_names-box">
                <div class="user_Lastname">Nom: Doe</div>
              <div class="username">Prénom: John</div>
              </div>
              <div class="user_adress">addresse: 1 place 2 be</div>
              <div class="user_adress-infos">
                <span class="zip">CP: 75001</span>
                <span class="city">Ville: Paris</span>
              </div>
            </div>
           
            <div class="user_description-actions">
              <div class="user_tel">Tel: 0606060606</div>
              <div class="button-box">
                <button>Modifier</button>
                <button @click="(deletePopUp = true)">Supprimer</button>
              </div>
            </div> 
          </div>
        </div>
        <div class="user_item">
          <div class="user_description-container">
            <div class="user_description-infos">
              <div class="user_id">id : XW23459566</div>
              <div class="user_names-box">
                <div class="user_Lastname">Nom: Doe</div>
              <div class="username">Prénom: John</div>
              </div>
              <div class="user_adress">addresse: 1 place 2 be</div>
              <div class="user_adress-infos">
                <span class="zip">CP: 75001</span>
                <span class="city">Ville: Paris</span>
              </div>
            </div>
           
            <div class="user_description-actions">
              <div class="user_tel">Tel: 0606060606</div>
              <div class="button-box">
                <button>Modifier</button>
                <button @click="(deletePopUp = true)">Supprimer</button>
              </div>
            </div> 
          </div>
        </div>
        <div class="user_item">
          <div class="user_description-container">
            <div class="user_description-infos">
              <div class="user_id">id : XW23459566</div>
              <div class="user_names-box">
                <div class="user_Lastname">Nom: Doe</div>
              <div class="username">Prénom: John</div>
              </div>
              <div class="user_adress">addresse: 1 place 2 be</div>
              <div class="user_adress-infos">
                <span class="zip">CP: 75001</span>
                <span class="city">Ville: Paris</span>
              </div>
            </div>
           
            <div class="user_description-actions">
              <div class="user_tel">Tel: 0606060606</div>
              <div class="button-box">
                <button>Modifier</button>
                <button @click="(deletePopUp = true)">Supprimer</button>
              </div>
            </div> 
          </div>
        </div>
        <div class="user_item">
          <div class="user_description-container">
            <div class="user_description-infos">
              <div class="user_id">id : XW23459566</div>
              <div class="user_names-box">
                <div class="user_Lastname">Nom: Doe</div>
              <div class="username">Prénom: John</div>
              </div>
              <div class="user_adress">addresse: 1 place 2 be</div>
              <div class="user_adress-infos">
                <span class="zip">CP: 75001</span>
                <span class="city">Ville: Paris</span>
              </div>
            </div>
           
            <div class="user_description-actions">
              <div class="user_tel">Tel: 0606060606</div>
              <div class="button-box">
                <button>Modifier</button>
                <button @click="(deletePopUp = true)">Supprimer</button>
              </div>
            </div> 
          </div>
        </div>
        <div class="user_item">
          <div class="user_description-container">
            <div class="user_description-infos">
              <div class="user_id">id : XW23459566</div>
              <div class="user_names-box">
                <div class="user_Lastname">Nom: Doe</div>
              <div class="username">Prénom: John</div>
              </div>
              <div class="user_adress">addresse: 1 place 2 be</div>
              <div class="user_adress-infos">
                <span class="zip">CP: 75001</span>
                <span class="city">Ville: Paris</span>
              </div>
            </div>
           
            <div class="user_description-actions">
              <div class="user_tel">Tel: 0606060606</div>
              <div class="button-box">
                <button>Modifier</button>
                <button @click="(deletePopUp = true)">Supprimer</button>
              </div>
            </div> 
          </div>
        </div>
      </div>
      
    </div>
  </div>
 <DeletePopUp @closeModal="closingModal" v-if="(deletePopUp == true)"/>
</template>



<style scoped>
.allUsers_container{
  margin-left: 1rem;
  width: 78%;
  height: 95vh;
  background-color:black;
  border-radius: 1rem;
  display: flex;
  justify-content:space-around;
  
}
.users_container, .stats_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  margin-inline: 1rem
}
.users_title, .stats-title{
  margin-top: 1rem;
  font-size:2rem;
  font-weight: bold;
  color: white;
}
.mobile_users, .stats{
  margin-top: 0.8rem;
  padding-top: 0.8rem;
  width: 100%;
  height: 75vh;
  background-color: #00C0FF;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  scrollbar-width: thin;
}
.users{
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
.user_item{
  height: 7rem;
  width: 95%;
  margin-bottom: 0.5rem;
  background-color: black;
  display: flex;
  justify-content: start;
  align-items:center;
  padding-left: 0.5rem;
}
.user_id{
  margin-top: 1rem;
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
.user_names-box{
  display: flex;
}
.username{
  margin-left: 1rem;
}
.stat{
 
  color: white;
  font-weight: bold;
  font-size: 2.5rem;;
}
.city, .zip, .user_description-title, .user_description-text{
  color: white;
}
.user_description-title{
  height: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
}
.user_adress-infos{
  display: flex;
}
.city, .zip {
  display: block;
}
.zip{
  margin-right: 1rem
}
.user_description-actions{
  width: 28rem;
  display: flex;
  justify-content:space-between;
  align-items:center;
  margin-top:0.3rem;
  margin-bottom: 1rem;
}
.button-box{
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