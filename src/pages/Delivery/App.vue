<template>
<MyHeader></MyHeader>
<MyDelivery></MyDelivery>
<MyFooter></MyFooter>
</template>
    
<script>
    import MyHeader from '../../components/MyHeader.vue';
    import MyFooter from '../../components/MyFooter.vue';
    import MyDelivery from '../../components/MyDelivery.vue';
    export default {
        name: 'App',
        components: {
          MyHeader,
          MyFooter,
          MyDelivery
        }
      }
</script>
<style>
      #delivery {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
</style>
    
    