<template>
    <div class="delivery">
        <div class="container">
            <div class="delivery-header">
                <p class="delivery-h">Доставка</p>
                <div class="delivery-text">
                    <div class="del-carousel">
                        <Carousel>
                            <Slide :key="1">
                            <div class="carousel__item">
                                <div class="del-plus-h">299 руб.</div>
                                <div class="del-plus-text">стоимость доставки. </div>
                                <div class="del-plus-text2">При заказе свыше 2000 руб. - доставка бесплатная</div>
                            </div>
                            </Slide>
                            <Slide :key="2">
                            <div class="carousel__item">
                                <div class="del-plus-h">3 часа</div>
                                <div class="del-plus-text">среднее время доставки готового торта </div>
                            </div>
                            </Slide>
                            <Slide :key="3">
                            <div class="carousel__item">
                                <div class="del-plus-h">от 4 дней</div>
                                <div class="del-plus-text">среднее время приготовления авторского торта</div>
                            </div>
                            </Slide>
                            <Slide :key="4">
                            <div class="carousel__item">
                                <div class="del-plus-h">с 9:00 до 22:00</div>
                                <div class="del-plus-text">доставка по Санкт-Петербургу</div>
                            </div>
                            </Slide>
                            <Slide :key="5">
                            <div class="carousel__item">
                                <div class="del-plus-h">24 кафе</div>
                                <div class="del-plus-text">работают на самовывоз</div>
                            </div>
                            </Slide>
                            <Slide :key="6">
                            <div class="carousel__item">
                                <div class="del-plus-h">до 17:00</div>
                                <div class="del-plus-text">оформленные заказы доставляются в течение дня</div>
                            </div>
                            </Slide>

                            <template #addons>
                            <Navigation />
                            </template>
                        </Carousel>
                    </div>
                    <div class="texttt-t">
                        <div class="texttt">Доставка заказов производится с 9:00 до 22:00 по Санкт-Петербургу. Способ получения заказа и временной интервал вы выбираете при оформлении заказа.</div>
                        <div class="texttt">Курьерская доставка в близлежащие районы города по согласованию с оператором и оплачивается дополнительно.</div>
                        <div class="texttt">Заказы, оформленные после 17:00, доставляются на следующий день.</div>
                        <div class="texttt">В день доставки просим вас оставаться на связи по указанному в заказе номеру телефона, чтобы оператор интернет-магазина мог связаться с вами. В комментариях к заказу можно указать удобное время для звонка.</div>
                        <div class="texttt">Оформленный заказ также можно забрать в наших кафе. Самовывоз – бесплатно.</div>
                    </div>
                    
                </div>
                
            </div>
            <div class="pay-header">
                <p class="pay-h">Оплата</p>
                <div class="pay">
                    <div class="pay-icons">
                        <div class="paymenticons">
                            <img class="pay-img1" src = "../assets/paymenticons/terminal.png">
                            <p class="pay-p">Картой: онлайн оплата на сайте</p>
                        </div>
                        <div class="paymenticons">
                            <img class="pay-img2" src = "../assets/paymenticons/paper.png">
                            <p class="pay-p">Наличные: оплата в кофейнях</p>
                        </div>
                        <div class="paymenticons">
                            <img class="pay-img3" src = "../assets/paymenticons/schet.png">
                            <p class="pay-p">Для юридических лиц безналичная оплата по счету</p>
                        </div>
                    </div>
                    <div class="pay-textt">
                        <p class="p-text">На нашем сайте Вы можете оплатить свой заказ онлайн с помощью банковских карт платёжных систем Visa, MasterCard и МИР.</p>
                        <p class="p-text">После успешной оплаты на указанную в форме оплаты электронную почту будет направлен электронный чек с информацией о заказе и данными об оплате.</p>
                        <p class="p-text">При оплате заказа банковской картой, возврат денежных средств производится на ту же самую карту, с которой был произведён платёж.</p>
                        <p class="p-text">Для юридических лиц предусмотрена оплата по счету.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'MyDelivery',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
}
</script>
<style scoped>
.carousel {
    width: 450px;
}
a {
    text-decoration: none;
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
.carousel__item {
  min-height: 400px;
  width: 100%;
  background-color: #FFF;
  border: 1px solid rgba(170, 71, 97, 0.922);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.delivery-h {
    font-family: 'Ubuntu', sans-serif;
  font-size: 44px;
  margin-top: 10px;
  font-weight: 500;
  margin-bottom: 30px;
  background-color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #ec008eec 0%, #fc9667e9 100%));
}
.pay-h {
    font-family: 'Ubuntu', sans-serif;
  font-size: 44px;
  margin-top: 20px;
  font-weight: 500;
  margin-bottom: 30px;
  background-color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #ec008eec 0%, #fc6767e9 100%));
}
.del-plus-h {
    color: #000;
  font-family: 'Ubuntu', sans-serif;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: #000;
  margin-bottom: 10px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #ec008eec 0%, #fc6767e9 100%));
}
.del-plus-text {
    color: #000;
  font-family: 'Ubuntu', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 300px;
  text-align: center;
  margin-bottom: 20px;
}
.del-plus-text2 {
    color: #000;
  font-family: 'Ubuntu', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 250px;
  text-align: center;
}
.texttt {
    color: #000;
  font-family: 'Ubuntu', sans-serif;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
}
.delivery-text {
    display: flex;
}
.texttt-t {
    margin-top: 70px;
    margin-left: 20px;
}
.pay-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}
.paymenticons {
    text-align: center;
    width: 350px;
    margin-right: 60px;
}
.pay-img1 {
    width: 42px;
    height: 42px;
}
.pay-img2 {
    width: 43px;
    height: 43px;
}
.pay-img3 {
    width: 42px;
    height: 42px;
}
.pay-p {
    background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #ec008ecd 0%, #fc6767cc 100%));
  font-family: 'Ubuntu', sans-serif;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
}
.p-text {
    font-family: 'Ubuntu', sans-serif;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 25px;
}
.pay-textt {
    margin-top: 20px;
  margin-bottom: 80px;
}
</style>