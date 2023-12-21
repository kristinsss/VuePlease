<template>
    <div class="main1">
        <div class="container">
          <div class="head-main">Наши самые выгодные предложения:</div>
            <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
                <Slide :key="1">
                <div class="carousel__item">
                    <div class="slideee">
                        <div class="carousel-img-div">
                        </div>
                        
                        <div class="slide-text">
                          <div class="name-cake">Торт Трюфельный</div>
                          <div class="price-buy">
                            <p class="price-price">2 150 ₽</p>
                            <div class="buy-button">В корзину</div>
                          </div>
                        </div>
                    </div>
                </div>
                </Slide>
                <Slide :key="2">
                <div class="carousel__item">
                    <div class="slideee">
                        <div class="carousel-img-div2">

                        </div>
                        <div class="slide-text">
                          <div class="name-cake">Шоколадный мусс с малиной</div>
                          <div class="price-buy">
                            <p class="price-price">2 500 ₽</p>
                            <div class="buy-button">В корзину</div>
                          </div>
                        </div>
                    </div>
                </div>
                </Slide>
                <Slide :key="3">
                <div class="carousel__item">
                    <div class="slideee">
                        <div class="carousel-img-div3">

                        </div>
                        <div class="slide-text">
                          <div class="name-cake">Торт Шоколадный с ягодами</div>
                          <div class="price-buy">
                            <p class="price-price">1 750 ₽</p>
                            <div class="buy-button">В корзину</div>
                          </div>
                        </div>
                    </div>
                </div>
                </Slide>
                <Slide :key="4">
                <div class="carousel__item">
                    <div class="slideee">
                        <div class="carousel-img-div4">

                        </div>
                        <div class="slide-text">
                          <div class="name-cake">Торт Манго-Маракуйя муссовый</div>
                          <div class="price-buy">
                            <p class="price-price">3 500 ₽</p>
                            <div class="buy-button">В корзину</div>
                          </div>
                        </div>
                    </div>
                </div>
                </Slide>
                <Slide :key="5">
                <div class="carousel__item">
                    <div class="slideee">
                        <div class="carousel-img-div5">

                        </div>
                        <div class="slide-text">
                          <div class="name-cake">Торт Наполеон с ягодами</div>
                          <div class="price-buy">
                            <p class="price-price">2 000 ₽</p>
                            <div class="buy-button">В корзину</div>
                          </div>
                        </div>
                    </div>
                </div>
                </Slide>
                <Slide :key="6">
                <div class="carousel__item">
                  <div class="slideee">
                        <div class="carousel-img-div6">

                        </div>
                        <div class="slide-text">
                          <div class="name-cake">Торт Сметанник Новогодний</div>
                          <div class="price-buy">
                            <p class="price-price">1 700 ₽</p>
                            <div class="buy-button">В корзину</div>
                          </div>
                        </div>
                    </div>
                </div>
                </Slide>
                <template #addons>
                <Navigation />
                <Pagination />
                </template>
                
            </Carousel>
        </div>
    </div>
</template>
<script>
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'MyMain',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>
<style scoped>
a {
    text-decoration: none;
}
.head-main {
  font-family: 'Ubuntu', sans-serif;
  font-size: 44px;
  font-weight: 500;
  margin-bottom: 30px;
  background-color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #bd0373 0%, #e05c5c 100%));
}
.main1 {
  font-family: 'Ubuntu', sans-serif;
    margin-top: 100px;
    margin-bottom: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
}
p {
    margin: 0;
}
.carousel-img {
    width: 337px;
    height: 300px;
    
}
.carousel-img-div {
    width: 100%;
    height: 60%;
    background-image: url("../assets/carousel1-slides/slide1.jpeg");
    background-size: cover;
    
}
.carousel-img-div2 {
    width: 100%;
    height: 60%;
    background-image: url("../assets/carousel1-slides/slide2.jpeg");
    background-size: cover;
}
.carousel-img-div3 {
    width: 100%;
    height: 60%;
    background-image: url("../assets/carousel1-slides/slide3.jpeg");
    background-size: cover;
}
.carousel-img-div4 {
    width: 100%;
    height: 60%;
    background-image: url("../assets/carousel1-slides/slide4.jpeg");
    background-size: cover;
}
.carousel-img-div5 {
    width: 100%;
    height: 60%;
    background-image: url("../assets/carousel1-slides/slide5.jpeg");
    background-size: cover;
}
.carousel-img-div6 {
    width: 100%;
    height: 60%;
    background-image: url("../assets/carousel1-slides/slide6.jpeg");
    background-size: cover;
}
.container {
    min-width: 1414px;
    max-width: 1414px;
    font-family: 'Ubuntu', sans-serif;
    margin-left: 5px;
    margin-right: 5px;
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.8);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.8);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.9);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

.carousel__item {
  min-height: 400px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  color: var(--vc-clr-white);
  font-size: 20px;
  display: flex;
  border: 1px solid rgba(0,0,0,0.5);
}
.slideee {
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    
}
.name-cake {
  color: #000;
  height: 50px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 10px;
}
.carousel__slide {
  padding: 10px;
}
.slide-text {
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.price-buy {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.price-price {
  color: #000;
  font-family: 'Ubuntu', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 20px;
  margin-bottom: 3px;
}
.buy-button {
  
  width: 125px;
  background-size: 300% 100%;

  display: flex;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
  height: 55px;
  cursor: pointer;
  margin-right: 20px;
  background-image: linear-gradient(to right, #F857A6, #FF5858, #ff0b65 , #d924a3);
  box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
  -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}
.buy-button:focus {
    outline: none;
}
.buy-button:hover {
    background-position: 100% 0;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  
}
</style>