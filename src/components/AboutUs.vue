<template>
    <div class="aboutusdiv">
        <div class="container">
            <div class="aboutinner">
                
                <div class="aboutusimg-div">
                    <div class="about-img">
                        <img class="img-img" src="../assets/aboutuscake.png">
                    </div>
                    <div class="aboutus-img2">
                        <div class="head-about">О компании</div>
                        <div class="about-text-1">Bakery delivery работает уже более 10 лет и за это время наша пекарня стала неотъемлемой частью жизни города. 
                        Мы с любовью готовим вашу любимую выпечку и радуем вас новинками.</div>
                        <a href="catalog.html"><div class="button-cake">Заказать у нас</div></a>
                    </div>
                    
                </div>
                <div class="about-text">
                        
                        <div class="about-text2">Как готовится наша выпечка?</div>
                        <div class="about-text3">Наша выпечка отличается тем, что мы заботимся о здоровье наших клиентов и при готовке используем не только вкусные, но и полезные продукты.</div>
                        <div class="about-icons">
                            <div class="icon">
                                <img class="icon-img" src="../assets/aboutusicons/chocolate.svg">
                                <p class="icon-h">Шоколад</p>
                                <p class="icon-p">является источником антиоксидантов, защищающих организм от свободных радикалов и поддерживающих хорошее состояние сердечно-сосудистой системы.</p>
                            </div>
                            <div class="icon">
                                <img class="icon-img" src="../assets/aboutusicons/krem.svg">
                                <p class="icon-h">Кисломолочный крем</p>
                                <p class="icon-p">насыщен полезными пробиотиками, которые способствуют нормализации пищеварения и укрепляют иммунную систему. </p>
                            </div>
                            <div class="icon">
                                <img class="icon-img" src="../assets/aboutusicons/strawberry.svg">
                                <p class="icon-h">Фруктовый топпинг</p>
                                <p class="icon-p">Антиоксиданты и клетчатка, содержащиеся во фруктах, положительно влияют на пищеварение, укрепляют иммунную систему и способствуют общему улучшению состояния организма.</p>
                            </div>
                            <div class="icon">
                                <img class="icon-img" src="../assets/aboutusicons/nuts.svg">
                                <p class="icon-h">Орехи</p>
                                <p class="icon-p">являются источниками полиненасыщенных жирных кислот, витаминов и минералов, они обладают противовоспалительными и антиоксидантными свойствами.</p>
                            </div>
                        </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AboutUs',
  
}


</script>

<style scoped>

.icon-img {
    width: 30px;
    height: 30px;
}
.aboutusdiv {
    margin-bottom: 50px;
}
.aboutus-img2 {

    margin-left: 50px;
    margin-top: 140px;
    width: 780px;
}
.button-cake {
    width: 170px;
  display: flex;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  height: 55px;
  font-size: 20px;
  cursor: pointer;
  color: white;
  font-family: 'Ubuntu', sans-serif;
  margin-right: 20px;
  background-image: linear-gradient(to right, #F857A6, #FF5858, #ff0b65 , #d924a3);
  box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
  -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    background-size: 300% 100%;
}
.button-cake:focus {
    outline: none;
}
.button-cake:hover {
    background-position: 100% 0;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}
.aboutusimg-div {
    display: flex;
    margin-top: 50px;
}
.about-icons {
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
}
.icon {
width: 230px;
margin-right: 70px;
}
.icon:first-child {margin-left: 30px;}
.icon-h {
    color: var(--Black, #010101);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.2px;
}
.icon-h:hover {
    color: #d03592;
    transition: .5s;
}
.icon-p {
    color: var(--Light-grey, rgba(1, 1, 1, 0.60));
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.9px;
}
.img-img {
    width: 505px;
    height: 536px;
}
.about-text-1 {
    font-size: 24px;
    margin-bottom: 40px;
}
.about-text2 {
    font-size: 29px;
    margin-bottom: 20px;
    border-bottom: 3px dashed #ed52af;
    width: 420px;
}
.about-text3 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 22px;
    width: 840px;
}
.about-text {
    font-family: 'Ubuntu', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 55px;
    margin-left: 35px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.head-about {
    font-family: 'Ubuntu', sans-serif;
    font-size: 44px;
    text-align: left;
    font-weight: 500;
    margin-bottom: 30px;
    background-color: #000;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #db118a 0%, #f08484 100%));
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
</style>