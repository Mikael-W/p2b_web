<script >
   import router from '../router'

  
  export default{
    name: "home",
    data(){
      return{
        connexion_popUp: false,
        signupPage: false,
        loginPage: true,
        isAssociation: false,
        isEntreprise: true,
        signupDone: false
      }
    },
    methods: {
      openPopup(){
        this.connexion_popUp = true;
    },
      openSignupPage(){
      this.signupPage = true;
      this.loginPage = false;
    },
    openLoginPage(){
      this.signupPage = false;
      this.loginPage = true;
    },
    login(){
      router.push({name: "dashboard"});
    },
    signup(){
      this.connexion_popUp = false;
      this.signupDone = true;
    },
    toggleEntity(){
      const association = document.getElementById("association_link");
      const entreprise = document.getElementById("entreprise_link");
      if(this.isEntreprise == true){
        this.isEntreprise = false;
        this.isAssociation = true;
        association.classList.add("active");
        entreprise.classList.remove("active");
      }else{
        this.isEntreprise = true;
        this.isAssociation = false;
        entreprise.classList.add("active");
        association.classList.remove("active");
      }
    },
    
    }
    
  }
</script>

<template>
  <main>
    <div class="container">
      <div class="logo_container">
        <img class= "logo" src="../assets/logo_place2be.png" alt="logo place2be">
        <button class="home_btn" v-if="connexion_popUp == false" @click="openPopup()">Connexion</button>
      </div>
    </div>
    <div class="popUp_container" v-if="connexion_popUp == true" >
      <img class="account_icon" src="../assets/account.png" alt="compte place2be">
      <div v-if="signupPage == false && loginPage == true" class="login_container">
        <form class="login_form">
          <div class="form_input">
            <label for="email">Email</label>
            <input type="email" >
          </div>
          <div class="form_input">
            <label for="password">Mot de passe</label>
            <input type="password" >
          </div>
          <button class="login_btn" @click="login()">Connexion</button>
          <div class="signup-link_container">
            <span> Pas encore de compte ?</span>
            <span class="signup_link" @click="openSignupPage()"> Créer un compte</span>
          </div>
        </form>
      </div>
      <div v-if="signupPage == true && loginPage == false" class="signup_container">
        <div class="entityChoice">
          <span @click="toggleEntity" id="entreprise_link">Entreprise/</span>
          <span @click="toggleEntity" id="association_link">Association</span>
        </div>
        <form class="signup_form">
          <div v-if="isEntreprise == true" class="form_input">
              <label for="name">Nom commercial</label>
              <input class="com_input" type="text" >
            </div>
            <div v-if="isAssociation == true" class="form_input">
              <label for="name">Nom de l'association</label>
              <input class="com_input" type="text" >
            </div>
            <div class="signup-input_section">
            <div class="form_input">
              <label for="email">Email</label>
              <input class="email_input" type="email" >
            </div>
            <div class="form_input">
              <label for="phone">Numéro de téléphone</label>
              <input class="tel" type="text" >
            </div>
          </div>
            <div v-if="isEntreprise == true" class="form_input">
              <label for="siret">Siret</label>
              <input class="siret_input" type="text" >
            </div>
          <div class="form_input">
            <label for="address">Adresse</label>
            <input class="adresse_input" type="text" >
          </div>
          <div class="signup-input_section">
            <div class="form_input">
            <label for="city">Ville</label>
            <input class="city_input" type="text" >
          </div>
          <div class="form_input">
            <label for="zip">Code postal</label>
            <input class="zip" type="text" >
          </div>
          </div>
          <div class="form_input">
            <label for="password">Mot de passe</label>
            <input class="mdp_input" type="password" >
          </div>
          <div class="form_input">
            <label for="password-confirm">Confirmation de mot de passe</label>
            <input class="mdp_input" type="password" >
          </div>
          <button class="signup_btn" @click="signup()">Connexion</button>
          <div class="signup-link_container">
            <span> Déjà un compte ?</span>
            <span class="signup_link" @click="openLoginPage()"> Se connecter</span>
          </div>
        </form>
      </div>
    </div>
    <div v-if="signupDone == true" class="account_popUp">
      <span>Consulter vos emails pour valider votre compte</span>
      <button @click="signupDone = false" class="popUp_btn">Ok</button>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.logo{
  display: block;
  object-fit: contain;
  height: 15rem;
 
}
.logo_container{
  display: flex;
  flex-direction: column;
  align-content: center;
 
}
.home_btn, .login_btn, .signup_btn { 
  height: 5vh;
  align-self: center;
  color: #FFFF;
  font-family: 'roboto', sans-serif;
  border-radius: 5rem;
  border: none;
}
.home_btn{
  margin-top: 5rem;
  padding-block: 1.5rem;
  padding-inline: 10rem;
  display: flex;
  justify-content:center;
  align-items: center;
  background-color: black;
  font-size: 1.5rem;
}

.login_btn, .signup_btn{
  margin-top: 2rem;
  width: 20vw;
  background-color: #00C0FF;
}

.popUp_container{
  position: absolute;
  top:0;
  right: 0;
  width: 35vw;
  height:100vh;
  background-color:black;
  display: flex;
  flex-direction: column;
  align-items: center;
  color:white;
}
.account_icon{
  margin-top: 1rem;
  width: 8.5rem;
}
.login_container, .signup_container{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.entityChoice{
  margin-top: 1rem;
}
#entreprise_link, #association_link{
  cursor: pointer;
}
#entreprise_link:hover, #association_link:hover{
  color: #00C0FF;
}
.active{
  color: #00C0FF;
}


.login_form, .signup_form{
  width: 100%;
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login_form{
  margin-top: 8rem;
}
.form_input{
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: start;
  
}
label{ 
  padding-block: 0.5rem;
}
.login_form input{
  width: 100%;
  height: 1.8rem;
}
.com_input, .adresse_input, .siret_input, .mdp_input {
  width: 100%;
  height: 1.5rem;
}

.signup-link_container{
  margin-top: 1rem;
  font-size: 0.9rem;;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.city_input, .email_input{
  width: 90%;
  height: 1.5rem;
}
.signup_link{
  color: #00C0FF;
  text-decoration: underline;
  margin-left: 0.5rem;
 
}
.signup-input_section{
  width: 90%;
  display: flex;
}
.tel, .zip{
  width: 100%;
  height: 1.5rem;
}
.account_popUp{
  position: absolute;
  width: 40rem;
  height: 25rem;
  background-color:black;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  border-radius:1rem;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  font-size:1.5rem;
  text-align: center;
}
.popUp_btn{
  width: 10rem;
  height: 2rem;
  background-color:#00C0FF;
  border: none;
  border-radius: 1rem;
  color: white;
  margin-top: 5rem;
}
</style>
