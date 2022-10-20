<script >
   import router from '../router'

  
  export default{
    name: "home",
    data(){
      return{
        connexion_popUp: false,
        signupPage: false,
        loginPage: true
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
      this.signupPage = false;
      this.loginPage = true;
    }
    
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
        <form class="signup_form">
          <div class="signup-input_section">
            <div class="form_input">
              <label for="email">Email</label>
              <input type="email" >
            </div>
            <div class="form_input">
              <label for="entreprise">Entreprise</label>
              <input type="text" >
            </div>
          </div>
          <div class="signup-input_section">
            <div class="form_input">
              <label for="siret">Siret</label>
              <input type="text" >
            </div>
            <div class="form_input">
            <label for="phone">Numéro de téléphone</label>
            <input type="text" >
          </div>
          </div>
          <div class="signup-input_section">
            <div class="form_input">
              <label for="name">Nom</label>
              <input type="text" >
            </div>
            <div class="form_input">
              <label for="firstame">Prénom</label>
              <input type="text" >
            </div>
          </div>
          <div class="form_input">
            <label for="address">Adresse</label>
            <input type="text" >
          </div>
          <div class="signup-input_section">
            <div class="form_input">
            <label for="city">Ville</label>
            <input type="text" >
          </div>
          <div class="form_input">
            <label for="zip">Code postal</label>
            <input type="text" >
          </div>
          </div>
          <div class="form_input">
            <label for="password">Mot de passe</label>
            <input type="password" >
          </div>
          <div class="form_input">
            <label for="password-confirm">Confirmation de mot de passe</label>
            <input type="password" >
          </div>
          <button class="signup_btn" @click="signup()">Connexion</button>
          <div class="signup-link_container">
            <span> Déjà un compte ?</span>
            <span class="signup_link" @click="openLoginPage()"> Se connecter</span>
          </div>
        </form>
      </div>
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
  width: 25vw;
  background-color: black;
}

.login_btn, .signup_btn{
  margin-top: 3rem;
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
  margin-top: 2rem;
  width: 8.5rem;
}
.login_container, .signup_container{
  width: 100%;
  display: flex;
  justify-content: center;
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
  padding-block: 1rem;
}
.login_form input{
  width: 100%;
  height: 1.8rem;
}
.signup_form input{
  width: 95%;
  height: 1.8rem;
}
.signup-link_container{
  margin-top: 1rem;
  font-size: 0.9rem;;
  width: 40%;
  display: flex;
  justify-content: space-around;
}
.signup_link{
  color: #00C0FF;
  text-decoration: underline;
}
.signup-input_section{
  width: 90%;
  display: flex;
}
</style>
