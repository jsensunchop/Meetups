<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" >
        <h1 class="title is-4">Alexandria</h1>
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>

        <a class="navbar-item">
          Foros
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Mas
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link :to="{name: 'PageRegister'}" class="button is-primary">
              <strong>Registrarse</strong>
            </router-link>
            <router-link :to="{name: 'PageLogin'}" class="button is-light">
              Iniciar Sesion
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
  }
</script>

<style scoped>
</style>
