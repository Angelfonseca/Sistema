<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

</script>
<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <slot/>
  </main>
  <Footer></Footer>
</template>
<style>
@import url('../assets/estilo.css');
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

Footer {
  align-self: flex-end;
}

</style>
