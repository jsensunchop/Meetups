<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-white">Iniciar Sesion</h3>
          <p class="subtitle has-text-white">Ingrese sus datos para continuar</p>
          <div class="box">
            <figure class="avatar">
                <img src="../assets/logo.png">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input v-model="form.email" 
                         class="input is-large"
                         type="email"
                         placeholder="Your Email"
                         autofocus=""
                         autocomplete="email">

                  <div v-if="$v.form.email.$error" class="form-error">
                    <span v-if="!$v.form.email.required" class="help is-danger">Se requiere una direccion de correo valida</span>
                    <span v-if="!$v.form.email.email" class="help is-danger">Direccion de correo no valida</span>
                  </div>     
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input v-model="form.password"
                         class="input is-large"
                         type="password"
                         placeholder="Your Password"
                         autocomplete="current-password">
                  <div v-if="$v.form.password.$error" class="form-error">
                    <span v-if="!$v.form.password.required" class="help is-danger">Se requiere una contraseña</span>
                  </div>

                </div>
              </div>
              <button @click.prevent="login" class="button is-block is-info is-large is-fullwidth">Iniciar Sesion</button>
            </form>
          </div>
          <p class="has-text-white">
            <a>Sign In With Google</a> &nbsp;·&nbsp;
            <router-link :to="{name: 'PageRegister'}">Sign Up</router-link> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import router from "../router"
  import axios from "axios"
  import {required, email} from 'vuelidate/lib/validators'
  export default {
    data (){
      return{
        form: {
          email: null,
          password: null
        }
      }
    },
    validations: {
      form: {
        email:{
          required, 
          email
        },
        password:{
          required
        },
      } 
    },    
      methods: {    
          login () {    
            this.$v.form.$touch()
            console.log(this.form)
          }
      }
    }
</script>
<style scoped>
  .title has-text-grey{
    background: #ffff
  }
  .is-4 is-offset-4{
    background: rgba(255,255,255,0.7);
  }
  .hero.is-success {
    background: rgba(255,255,255,0.7);
    background-image: url('../assets/default-02.jpg');
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  
  }
  .box {
    margin-top: 5rem;
    background: rgba(255,255,255,0.7);
  }
  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }
  .avatar img {
    padding: 5px;
    background: rgba(255,255,255,0.7);;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }
  input {
    font-weight: 300;
  }
  p {
    font-weight: 700;
  }
  p.subtitle {
    padding-top: 1rem;
  }

  .has-text-grey {
    color: #ffff
  }
</style>