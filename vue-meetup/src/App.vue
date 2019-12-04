<template>
  <div id="app">
    <TheNavbar />
    <router-view/>
    <TheFooter />
    
  </div>
</template>

<script>
import TheNavbar from '@/components/shared/TheNavbar'
import TheFooter from '@/components/shared/TheFooter'
export default {
  name: 'app',
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style lang="scss">
@import 'assets/css/spacing.css';
@import '~bulma/bulma.sass';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.bold {
  font-weight: bold;
}
.cover {
  background-size: cover;
  /*background-position: center;*/
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.hero {
  position: relative;
}
.hero-body {
  padding: 3rem 1.5rem;
}
.hero-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
  url('./assets/biblioteca.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
