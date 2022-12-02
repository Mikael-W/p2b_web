
<script>
export default {

}
</script>

<template>
  <div class="container">
    <div class="container_infos">
      <div class="title">Titre de l'évènement'</div>
      <div class="container_infos-dateBox">
        <div class="startDate">29/11/2022</div>
      <div class="endDate">29/11/2022</div>
      </div>
      <div class="container_infos-timeBox">
        <div class="startTime">14:00</div>
      <div class="endTime">18:00</div>
      </div>
      <div class="adress">rue de l'évènement</div>
      <div class="cityZip-box">
        <div class="city">ville de l'évènement</div>
        <div class="zip">27120</div>
      </div>
      <div class="geoLat">42.757363</div>
      <div class="geoLng">-1.4567</div>
      <div class="descriptionFr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia enim culpa distinctio, molestiae autem ipsum hic natus quasi inventore. Placeat maiores eos ducimus sint quibusdam iure aliquam? Praesentium, omnis!</div>
      <div class="descriptionEn">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad rerum consequatur numquam velit id distinctio mollitia, ipsum ab ullam ut fugit minima aut quae dolor debitis praesentium cumque dicta obcaecati.</div>
      <div class="conditionsFr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus totam dicta distinctio saepe nostrum explicabo maiores. Cupiditate commodi deleniti veniam necessitatibus possimus modi officia, sapiente maiores magnam saepe nam nisi.</div>
      <div class="conditionsEn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit error odit voluptate, atque fugiat perspiciatis possimus culpa ad eum reiciendis maiores sapiente, provident nemo et quam ratione eos dolorum consectetur!</div>
      <div class="prices-box">
        <div class="price">8,00€</div>
        <div class="minPrice">5,00€</div>
        <div class="maxPrice">16,00€</div>
      </div>
    </div>
    <div class="container_appRender">
      <div class="container_appRender-title">Rendu d'affichage flux</div>
      <div class="container_appRender-list"></div>
      <div class="container_appRender-title">Rendu d'affichage Détail</div>
      <div class="container_appRender-details"></div>
      <button>Valider</button>
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
.container_infos, .container_appRender{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 48%;
  height: 95%;
  background-color:#00C0FF;
  border-radius: 1rem;
}
.container_appRender{
  align-items: center;
  background-color:#00C0FF;
  margin-left: 2rem;
}
.container_appRender-title{
  font-size:2rem;
  margin-bottom: 1rem;
}
.container_appRender-list{
  width: 20%;
  height: 10rem;
  background-color:white;
  margin-bottom: 1rem;
}
.container_appRender-details{
  width: 40%;
  height: 23rem;
  background-color:white;
}
button{
  width: 15rem;
  height: 2rem;
  border-radius: 1rem;
  border: none;
  background-color:black;
  color: white;
  margin-block: 1rem;
}
</style>