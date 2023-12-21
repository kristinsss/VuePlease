<template>
<MyHeader></MyHeader>
<MyCart></MyCart>
<MyFooter></MyFooter>
</template>

<script>
    import MyHeader from '../../components/MyHeader.vue';
    import MyFooter from '../../components/MyFooter.vue';
    import MyCart from '../../components/MyCart.vue';
    export default {
        name: 'App',
        components: {
          MyHeader,
          MyFooter,
          MyCart
        }
      }
</script>
<style>
#cart {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
</style>
