<template>
<MyHeader></MyHeader>
<MyCatalog></MyCatalog>
<MyFooter></MyFooter>
</template>

<script>
import MyHeader from '../../components/MyHeader.vue';
import MyFooter from '../../components/MyFooter.vue';
import MyCatalog from '../../components/MyCatalog.vue';
export default {
    name: 'App',
    components: {
      MyHeader,
      MyFooter,
      MyCatalog
    }
  }
</script>
<style>
  #catalog {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>

