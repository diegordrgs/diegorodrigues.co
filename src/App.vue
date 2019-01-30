<template>
  <article>
    <Header/>
    <router-view/>
    <Footer/>
  </article>
</template>
<script>
import Header from '@/_components/Header'
import Footer from '@/_components/Footer'
export default {
  components: {
    Header,
    Footer
  }  
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: black;
  font-family: "Work Sans", sans-serif;
}
img {
  width: 100%;
  height: 100%;
}
.container {
  width: 80%;
  margin: 0 auto;
}
section {
  margin: 1em 0;
}
.arrow {
  width: 5%;
}
</style>
