<template>
<MyHeader> </MyHeader>
<MyMainImg></MyMainImg>
<MyMain></MyMain>
<MyFooter></MyFooter>
</template>

<script>
import MyHeader from '../../components/MyHeader.vue';
import MyFooter from '../../components/MyFooter.vue';
import MyMain from '../../components/MyMain.vue';
import MyMainImg from '../../components/MyMainImg.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    MyMain,
    MyMainImg
  }
}
</script>

<style>
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
</style>
