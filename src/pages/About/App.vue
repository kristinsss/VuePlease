<template>
  <MyHeader> </MyHeader>
  <AboutUs></AboutUs>
  <MyFooter></MyFooter>
  </template>
  
  <script>
  import MyHeader from '../../components/MyHeader.vue';
  import MyFooter from '../../components/MyFooter.vue';
  import AboutUs from '../../components/AboutUs.vue';
  
  export default {
    name: 'App',
    components: {
      MyHeader,
      MyFooter,
      AboutUs
    }
  }
  </script>
  
  <style>
  #aboutus {
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>