<template>
    <div class="nachinki">
        <div class="container">
            <div class="nachinki-inner">
                <div class="nach-div1">
                    <div @click="IfCake" class="nach-categ">
                        <p class="nach-cat-p">Шоколад</p>
                        <img class="nach-cat-img" src="../assets/vnizarrow.svg">
                    </div>
                    <div v-if="ifCake" class="nach-1">
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/chocolate/nachinka1.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Пралине</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Фирменный шоколадный бисквит с добавлением черного шоколада, прослоен шоколадно-молочным муссом в сочетании с прослойкой орехового пралине и вафельной крошки.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/chocolate/nachinka2.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Мокко (кофейная)</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Шоколадный бисквит из горького шоколада. Прослойка из нежного французского крема Ganache и кофейного мусса. Мусс состоит из сыра Креметта, белого шоколада, натуральных сливок и кофе. </p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/chocolate/nachinka3.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Три шоколада</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Шоколадно-сливочный бисквит пропитан сиропом с добавлением коньяка (по желанию исключается) и прослоен муссом из белого, черного и молочного шоколада.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/chocolate/nachinka4.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Клюква в шоколаде</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Фирменный шоколадный бисквит пропитан сахарным сиропом, прослоен сметанным муссом и клюквенным джемом с добавлением молочного шоколада.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/chocolate/nachinka5.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Венский десерт (Захер)</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Фирменный шоколадный бисквит из горького шоколада прослоен абрикосовым конфитюром и шоколадной начинкой.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/chocolate/nachinka6.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Пражский</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Масляный «пражский» бисквит пропитан сиропом с добавлением коньяка, прослоен яблочным повидлом и фирменным сливочно-заворным шоколадным кремом.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/chocolate/nachinka7.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Сникерс</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Шоколад, арахис и карамель, знакомое всем сочетание вкуса, благодаря культовому батончику. Имеет более нежный и менее приторный вкус.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/chocolate/nachinka8.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Чизкейк шоколадный</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Шоколадный бисквит пропитан шоколадным сиропом с добавлением ликера (амаретто), прослоен шоколадно-сырным кремом.</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div @click="IfCake2" class="nach-div1">
                    <div class="nach-categ">
                        <p class="nach-cat-p">Ягоды и фрукты</p>
                        <img class="nach-cat-img" src="../assets/vnizarrow.svg">
                    </div>
                    <div v-if="ifCake2" class="nach-1">
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/fruits/fruits1.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Черничный мусс</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">У этой начинки нежный и деликатный вкус. Черничный мусс с натуральными ягодами, и ванильный бисквит пропитанный сиропом, вкус сладкий, но не приторный.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/fruits/fruits2.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Йогуртовая</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Традиционный бисквит, пропитан сахарным сиропом с добавлением коньяка (по желанию исключается), прослоен йогуртово-сметанным муссом и начинкой из лесных ягод.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/fruits/fruits3.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Сметанная</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Традиционный белый бисквит пропитан сиропом с добавлением коньяка (по желанию исключается), прослоен сметанным муссом с добавлением персиков, ананасов и ягод.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/fruits/fruits4.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Тирамису клубничная</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Традиционный бисквит, пропитан сахарным сиропом, прослоен сливочно-сырным муссом и клубничной начинкой, приготовленной из свежих ягод.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/fruits/fruits5.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Манго-клубника</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Традиционный бисквит пропитан сахарным сиропом, прослоен муссами манго и клубники с добавлением ягодного пюре, прослоен клубничной начинкой.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/fruits/fruits6.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Творожная</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Сочетание двух видов бисквитов: шоколадно-сливочного и традиционного белого, прослоены творожно-сливочным муссом с добавлением фруктовой начинки </p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/fruits/fruits7.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Банановый Фостер</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Банановый Фостер это йогуртовый нежный мусс, белый бисквит пропитанный банановым сиропом "Monin, Creme de Banane", с прослойками из натуральных бананов и мармелада.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/fruits/fruits8.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Малина-маракуйя</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Мусс на основе йогурта малины и маракуйя дает торту необычный сладкий с кислинкой вкус. Мусс на основе йогурта, поэтому торт не покажется Вам тяжелым или жирным.</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div @click="IfCake3" class="nach-div1">
                    <div class="nach-categ">
                        <p class="nach-cat-p">Специальныe</p>
                        <img class="nach-cat-img" src="../assets/vnizarrow.svg">
                    </div>
                    <div v-if="ifCake3" class="nach-1">
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/special/special1.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Морковно-кокосовая</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Для любителей сладкого, которые соблюдают пост, являются строгими вегетарианцами, или по медицинским показаниям вынуждены отказаться от молочных продуктов.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/special/special2.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Диабетическая-безглютеновая</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Для людей страдающим диабетом и аллергией на глютен, мы разработали специальную начинку без содержания сахара и глютена.</p>
                                    </div>
                                </div>
                        </div>
                        <div class="tovar">
                                <div class="tovar-img"> <img class="tovar-img-img" src="../assets/nachinki/special/special3.jpeg">
                                </div>
                                <div class="tovar-info">
                                    <div class="tovar-name">Низкокалорийная (Легкая)</div>
                                    <div class="tovar-buy">
                                        <p class="tovar-price">Самая легкая из линейки наших начинок. Не содержит сахара и глютена. Кукурузный бисквит, с творожное-сметанным муссом, и прослойка мармелада из натуральных ягод. </p>
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
  name: '<MyCart>',
    data () {
    return {
        ifCake : false,
        ifCake2 : false,
        ifCake3 : false
    }
  },
  methods : {
    IfCake() {
        if (this.ifCake==false) this.ifCake = true;
        else this.ifCake = false
    }, 
    IfCake2() {
        if (this.ifCake2==false) this.ifCake2 = true;
        else this.ifCake2 = false
    },
    IfCake3() {
        if (this.ifCake3==false) this.ifCake3 = true;
        else this.ifCake3 = false
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
.container {
    min-width: 1414px;
    max-width: 1414px;
    font-family: 'Ubuntu', sans-serif;
    margin-left: 5px;
    margin-right: 5px;
}
.tovar {
    width: 370px;
    height: 500px;
    background-color:#fdeaea;
    border-radius: 20px;
    margin-bottom: 25px;
    margin-right: 61px;
}
.tovar-img {
    width: inherit;
    height: 55%;
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
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #ec008eec 0%, #d35555e9 100%));
    color: #000;
  font-family: 'Ubuntu', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 10px;
  margin-bottom: 5px;
}
.tovar-info {
    margin-left: 20px;
    margin-right: 15px;
}
.tovar-price {
    color: #000;
  font-family: 'Ubuntu', sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 20px;
  margin-bottom: 3px;
}
.nachinki-inner {
    margin-left: 60px;
    margin-right: 60px;
    margin-top: 40px;
}
.nach-div1 {
    margin-top: 20px;
    margin-bottom: 40px;
}
.nach-1 {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
}
.nach-cat-p {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: var(--Gradient-Red-gradient-9, linear-gradient(90deg, #ec008eec 0%, #d35555e9 100%));
    color: #000;
    font-family: 'Ubuntu', sans-serif;
    font-size: 38px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 20px;
    cursor: pointer;
}
.nach-categ {
    display: flex;
    justify-content: center;
    align-items: center;
}
.nach-cat-img {
    width: 20px;
    height: 20px;
    margin-top: 5px;
}
</style>