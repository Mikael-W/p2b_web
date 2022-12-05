<script>
export default {
  data(){
    return{}
  },
  methods:{
      closeModal(){
        this.$emit("closeModal", {toClose:false})
      }
    }
}
</script>

<template>
  <div class="container"></div>
    <div class="deletePopUp_container">
      <div class="deletePopUp_title">Êtes vous sur de vouloir supprimer cet évènenment</div>
      <div class="deletePopUp-buttons">
        <button>Oui</button>
        <button @click="closeModal">Retour</button>
      </div>
    </div>
</template>



<style lang="css" scoped>

.container{
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 0;
  opacity: 0.8;
  overflow: hidden;
}
.deletePopUp_container{
  position: absolute;
  width: 40rem;
  height: 20rem;
  background-color:#00C0FF;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  border-radius:1rem;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  font-size:2rem;
  text-align: center;
  z-index:2;
}
.deletePopUp-buttons{
  width: 30rem;
  display: flex;
  justify-content:space-around;
}
button{
  border-radius: 1rem;
  border:none;
  width: 10rem;
  height: 2rem;
  background-color:black;
  color:white;
}
</style>