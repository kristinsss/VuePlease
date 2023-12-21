<template>
    <div class="catalog">
        <div class="container">
            <div class="catalog-inner">
                <div class="categories">
                    <div class="category" @click="IfCake"><img class="categ-icon" src="../assets/catalogicons/cakecat.svg">Торты</div>
                    <div class="category" @click="IfPirog"><img class="categ-icon" src="../assets/catalogicons/pirog.svg">Пирожные</div>
                    <div class="category" @click="IfCookie"><img class="categ-icon" src="../assets/catalogicons/cookie.svg">Печенье</div>
                    <div class="category" @click="IfDrink"><img class="categ-icon" src="../assets/catalogicons/napitok.svg">Напитки</div>
                </div>
                <div class="tovari">

                    <div v-if="ifCake" class="div-tovari-cakes">
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cakes/cake1.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Рождественский эльф</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">7 900₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cakes/cake2.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Рождественская ель</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">5 600₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cakes/cake3.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Волшебный лес</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">6 400₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cakes/cake4.png">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Школа волшебства</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">10 900₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cakes/cake5.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Новогодние сладости</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">7 000₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cakes/cake6.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Торт Гринч</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">8 900₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cakes/cake7.png">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Рождественский олень</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">10 900₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cakes/cake8.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Торт Хлопок</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">6 900₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cakes/cake9.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Лесная фея</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">11 000₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="ifPirog" class="div-tovari-pirogi">
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/pirogi/pirog1.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Чизкейк с карамелью</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">225₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/pirogi/pirog2.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Красный бархат</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">220₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/pirogi/pirog3.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Сметанник</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">199₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/pirogi/pirog4.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Наполеон</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">219₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/pirogi/pirog5.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Морковный пирог</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">179₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/pirogi/pirog6.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Брауни с вишней</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">179₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/pirogi/pirog7.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Наполеон с вишней</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">219₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/pirogi/pirog8.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Шоколад-орех</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">285₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/pirogi/pirog9.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Картошка медовая</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">170₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="ifCookie" class="div-tovari-cookies">
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cookies/cookie1.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Пряничный человек</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">95₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cookies/cookie2.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Елочка</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">140₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cookies/cookie3.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Арахис с шоколадом</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">100₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cookies/cookie4.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Шоколадное печенье</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">100₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cookies/cookie5.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Клюква в шоколаде</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">100₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cookies/cookie6.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Овсяное печенье</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">100₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cookies/cookie7.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Лимонное печенье</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">115₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cookies/cookie8.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Шоколад с вишней</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">115₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/cookies/cookie9.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Здоровое печенье</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">89₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div v-if="ifDrink" class="div-tovari-napitki">
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/napitki/napitok1.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Смузи Ягодный</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">179₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/napitki/napitok2.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Смузи Манго-Маракуйя</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">179₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/napitki/napitok3.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Смузи Клубника-Банан</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">179₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/napitki/napitok4.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Морс клюквенный</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">159₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/napitki/napitok5.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Морс клубничный</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">159₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/napitki/napitok6.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Вода негазированная</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">129₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                        <div class="tovar">
                            <div class="tovar-img"> <img class="tovar-img-img" src="../assets/catalogimages/napitki/napitok7.jpeg">
                            </div>
                            <div class="tovar-info">
                                <div class="tovar-name">Вода газированная</div>
                                <div class="tovar-buy">
                                    <p class="tovar-price">129₽</p>
                                    <div class="buy-button">В корзину</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'MyCatalog',
  data () {
    return {
        ifCake : true,
        ifPirog : false,
        ifCookie : false,
        ifDrink : false
    }
  },
  methods : {
    IfCake() {
        this.ifCake = true,
        this.ifPirog = false,
        this.ifCookie = false,
        this.ifDrink = false
    }, 
    IfPirog() {
        this.ifCake = false,
        this.ifPirog = true,
        this.ifCookie = false,
        this.ifDrink = false
    },
    IfCookie() {
        this.ifCake = false,
        this.ifPirog = false,
        this.ifCookie = true,
        this.ifDrink = false
    },
    IfDrink () {
        this.ifCake = false,
        this.ifPirog = false,
        this.ifCookie = false,
        this.ifDrink = true
    }
  }
}
</script>
<style scoped>
a {
    text-decoration: none;
}
p {
    margin: 0;
}
.div-tovari-cakes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
    
}
.div-tovari-pirogi {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
}
.div-tovari-cookies {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
}
.div-tovari-napitki {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
}
.tovari {
    margin-top: 40px;
    margin-left: 150px;
    
}
.tovar {
    width: 320px;
    height: 370px;
    background-color:#fdeaea;
    border-radius: 20px;
    margin-bottom: 25px;
}
.tovar-img {
    width: inherit;
    height: 60%;
}
.tovar-img-img {
    width: 100%;
    height: 100%;
    
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
.tovar-buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.tovar-name {
    color: #000;
  font-family: 'Ubuntu', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 30px;
}
.tovar-info {
    margin-left: 20px;
    margin-right: 15px;
}
.buy-button {
    width: 120px;
    color: white;
    background-size: 300% 100%;
  display: flex;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  height: 49px;
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
.catalog-inner {
    display: flex;
}
.tovar-price {
    color: #000;
  font-family: 'Ubuntu', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 20px;
  margin-bottom: 3px;
}
.categ-icon {
    margin-right: 10px;
    width: 25px;
    height: 25px;
}
.categories {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.category {
    display: flex;
    cursor: pointer;
    align-items: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 27px;
    text-align: center;
    margin-top: 20px;
    font-weight: 500;
    margin-bottom: 30px;
    background-color: #000;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #bd0373 0%, #e05c5c 100%));
    
}
.category:hover {
    background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #ea56af 0%, #e35757 100%));
}
.container {
    min-width: 1414px;
    max-width: 1414px;
    font-family: 'Ubuntu', sans-serif;
    margin-left: 5px;
    margin-right: 5px;
}
</style>