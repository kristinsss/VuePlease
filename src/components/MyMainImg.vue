<template>
    <div class="section1">
    <div class="container">
      <div class="section1-inner">
        <img class="caracul3" src="../assets/home-main/karakul3.svg">
        <div class="section1-objects">
          <img class="caracul" src="../assets/home-main/karakul.svg">
          <img class="caracul2" src="../assets/home-main/karakul2.svg">
          
          <p id="section1-bigtext">Доставка свежей выпечки</p>
          <p class="section1-smalltext">Когда так хочется сладкого к чаю или приближается день рождения близкого человека, все, что остается - заказать в Bakery Delivery.</p>
          <a href="aboutus.html"><div id="section1-more">
            <p id="section1-more-text">Узнать больше</p>
            <img id="section1-more-arrow" src="../assets/home-main/arrowsmallright.svg">
          </div></a>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyMainImg'
  
}
</script>

<style scoped>
a {
  text-decoration: none;
}
p {
  margin: 0;
}
.caracul {
  width: 200px;
  height: 300px;
  position: absolute;
  right: -50px;
  top: -50px;
  
}
.caracul2 {
  width: 200px;
  height: 200px;
  position: absolute;
  right: -20px;
  bottom: -10px;
  transform: scale(-1, 1)
}
.caracul3 {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 570px;
  top: 160px;
}
.container {
  min-width: 1414px;
  max-width: 1414px;
  font-family: 'Ubuntu', sans-serif;
  
  margin-left: 5px;
  margin-right: 5px;
}
.section1-inner {
  background-image: url("../assets/home-main/cupcakes.jpg");
  height: 580px;
  width: 1414px;
  background-size:cover;
  position: relative;
}
.section1-objects {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 605px;
  position: relative;
  overflow: hidden;
  height: 100%;
}
#section1-bigtext {
  text-align: left;
  font-family: 'Ubuntu', sans-serif;
  font-size: 52px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 27px;
  margin-top: 200px;
  display: flex;
  background-color: #000;
  background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #bd0373 0%, #f36d6d 100%));
}
.section1-smalltext {
  color: #7B7E86;
  font-family: 'Ubuntu', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 700px;
  margin-bottom: 51px;
}
#section1-more {
  display: flex;
  align-items: center;
}
#section1-more-text {
  background-color: #2AA5A0;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #a50264 0%, #b34c4c 100%));
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 16px;
}
#section1-more-arrow {
  width: 7px;
  height: 16px;
  flex-shrink: 0;
}
</style>