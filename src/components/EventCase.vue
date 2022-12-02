<script>
export default {
  methods:{
    pushToRecap(){
      this.$emit("push", { casePushTo: 1});
    },
    pushToAdPage(){
      this.$emit("push", { casePushTo: 2});
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="container_case">
      <div class="container_case-title">Choisisser votre type d'évènement</div>
      <div class="container_case-btn">
        <button @click="pushToRecap()" >Évènement gratuit</button>
    <button @click="pushToAdPage()" class="pub-button">Évènement publicitaire</button>
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
  justify-content: center;
  align-items: center
}
.container_case{
  display:flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  width: 95%;
  height: 90%;
  background-color:#00C0FF;
  border-radius: 1rem;
}
button{
  width:15rem;
  height: 10rem;
  background-color: black;
  color: white;
  border: none;
  font-size: 2rem;
  border-radius: 1rem ;

}
.pub-button{
  margin-left: 5rem;
}
.container_case-title{
  font-size: 3rem;
  text-decoration: underline;
}
</style>