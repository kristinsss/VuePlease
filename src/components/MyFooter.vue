<template>
    <div class="footer">
        <div class="container">
            <div class="footer-1">
                <p class="footer-sub-text">Рассылка о сладком и вкусном</p>
                <p class="footer-sub-small">Подписывайтесь и получайте самые интересные и выгодные предложения первыми! </p>
                <div class="footer-email">
                    <input class="email-pole" type="search" name="q" placeholder="Введите адрес своей электронной почты">
                    <button type="submit" class="email-button">Подписаться</button>
                </div>
            </div>
            <div class="footer-2">
                <div class="footer-firstline">
                    <div class="ul-footer">
                        <ul class="ul-ul-foot">
                            <li class="li-footer"><a href="aboutus.html">О нас</a></li>
                            <li class="li-footer"><a href="catalog.html">Каталог</a></li>
                            <li class="li-footer"><a href="delivery.html">Доставка</a></li>
                            <li class="li-footer"><a href="cart.html">Корзина</a></li>
                            <li class="li-footer">Галерея</li>
                        </ul>
                    </div>
                    <div class="footer-icons">
                        <img class="footer-soc" src="../assets/socials/facebook.svg">
                        <img class="footer-soc" src="../assets/socials/twiter.svg">
                        <img class="footer-soc" src="../assets/socials/youtube.svg">
                        <img class="footer-soc" src="../assets/socials/insta.svg">
                    </div>
                </div>
                <div class="footer-logo">
                    <a href="index.html"><img class="logo-img-footer" src="../assets/logocake.png"></a>
                    <a href="index.html"><div class="footer-logo-text">Bakery Delivery</div></a>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
  name: 'MyFooter'
  
}
</script>
<style scoped>
a {
    text-decoration: none;
    color: inherit;
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
.footer-1 {
    height: 360px;
    background: var(--Red-10, #FFEFEF);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.footer-sub-text {
    font-family: 'Ubuntu', sans-serif;
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 62px;
    margin-bottom: 48px;
    background-color: #2AA5A0;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #EC008C 0%, #FC6767 100%));
}
.footer-sub-small {
    color: #000;
    font-family: 'Ubuntu', sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 501px;
    text-align: center;
    margin-bottom: 58px;
}
.footer-email {
    display: flex;
}
.email-pole {
    width: 574.544px;
    height: 60px;
    background: var(--Cold-Grey-5, #F3F4F6);
    padding-left: 27px;
    border: 0px solid red;
}
.email-pole:focus {
    outline: none;
}
.email-button {
    display: flex;
    background-size: 300% 100%;
    padding: 13px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    color: #FFF;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    border: 0px solid red;
    cursor: pointer;
    background-image: linear-gradient(to right, #F857A6, #FF5858, #ff0b65 , #d924a3);
    box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}
.email-button:focus {
    outline: none;
}
.email-button:hover {
    background-position: 100% 0;
    -moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}
.footer-2 {
    height: 250px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logo-img-footer {
    width: 34 px;
    height: 30px;
    margin-right: 7px;
}
.footer-firstline {
    display: flex;
    margin-top: 53px;
}
.ul-footer {
    border-right: 1px solid black;
    margin-right: 26px;
}
.ul-ul-foot {
    margin-left: 0;
    padding-left: 0;
    display: flex;
}
.li-footer {
    list-style-type: none;
    color: #000;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 40px;
}
.footer-soc {
    width: 28px;
    height: 25px;
    margin-right: 8px;
}
.footer-icons {
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer-logo {
    display: flex;
    align-items: center;
    margin-top: 40px;
}

.footer-logo-text {
    font-family: 'Ubuntu', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background-clip: text;
    background-color: #2AA5A0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #ec008eec 0%, #fc6767ec 100%));
}
</style>