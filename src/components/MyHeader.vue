<template>
  <div id="header-1">
    <div class="container">
       <div class="header-up-line">
        <div class="search">
          <img id="lupa" src="../assets/header-img/lupa.svg ">
        </div>
        <div class="header-logo">
          <a href="index.html"><img class="logo-pic" src="../assets/logocake.png"></a>
          <a href="index.html"><p id="logo-name">Baking Delivery</p></a>
        </div>
        <div class = "header-cart">
          <p class="signin-header">8 (911) 999-99-99</p>
          <img id="heart-header" src="../assets/header-img/cart.svg">
        </div>
       </div>
       <div class="header-down-line">
        <ul class="ul-header">
           <li class="li-header"><a href="aboutus.html">О нас</a></li> 
           <li class="li-header"><a href="catalog.html">Каталог</a></li>
           <li class="li-header"><a href="delivery.html">Доставка</a></li>
          <li class="li-header"><a href="cart.html">Начинки </a></li>
        </ul>
       </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'MyHeader'
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

#header-1 {
  margin-top: 23px;
}
p {
  margin: 0;
}

.container {
  min-width: 1414px;
  max-width: 1414px;
  font-family: 'Ubuntu', sans-serif;
  
  margin-left: 5px;
  margin-right: 5px;
}

#lupa {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
.logo-pic {
  width: 34px;
  height: 30px;
  margin-right: 7px;
}
.header-up-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-down-line {
  margin-bottom: 30px;
  margin-top: 15px;
}
.header-logo {
  display: flex;
  align-items: center;
  width: 210px;
  height: 26px;
  padding-left: 175px;
}
#logo-name {
  font-family: 'Ubuntu', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: #2AA5A0;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #ec008eec 0%, #fc6767e9 100%));
  
}
.header-cart {
  display: flex;
  align-items: center;
}
.signin-header {
  -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #ec008eec 0%, #d35555e9 100%));
  color: #000;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin-right: 35px;
  border-bottom: 1.5px dashed #f01d9cec;
  cursor: pointer;
}

#heart-header {
  width: 24px;
  height: 20.571px;
  flex-shrink: 0;
}
#cart-head {
  width: 18px;
  height: 18px;
  margin-left: 8px;
}
.ul-header {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0px;
  padding-left: 20px;
  box-sizing: border-box;
  transition: all .35s ease;
}
.li-header {
  color: #000;
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 40px;
  display: flex;
  align-items: center;
}
.li-header:hover {
  color: #d40481ec;
  transition: 0.3s ease-in-out;
}
</style>
