<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-white">Register</h3>
          <p class="subtitle has-text-white">Please register to proceed.</p>
          <div class="box">
            <figure class="avatar">
                <img src="../assets/logo.png">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input v-model="form.username"
                         class="input is-large"
                         type="text"
                         placeholder="Username">
                </div>
              </div>
              <!--
              <div class="field">
                <div class="control">
                  <input class="input is-large"
                         type="text"
                         placeholder="Name">
                </div>
              </div>
              -->
              <div class="field">
                <div class="control">
                  <input v-model="form.email"
                         class="input is-large"
                         type="email"
                         placeholder="Your Email">
                </div>
              </div>
              <!--
              <div class="field">
                <div class="control">
                  <input class="input is-large"
                         type="text"
                         placeholder="Avatar"
                         autocomplete="">
                </div>
              </div>
              -->
              <div class="field">
                <div class="control">
                  <input v-model="form.password"
                         class="input is-large"
                         type="password"
                         placeholder="Your Password"
                         autocomplete="new-password">
                </div>
              </div>
              <!--
              <div class="field">
                <div class="control">
                  <input class="input is-large"
                         type="password"
                         placeholder="Password Confirmation"
                         autocomplete="off">
                </div>
              </div>
              -->
              <button @click.prevent="register" type="submit" v-on:click="summit" class="button is-block is-info is-large is-fullwidth">Register</button>
            </form>
          </div>
          <p class="has-text-white">
            <router-link :to="{name:'PageLogin'}">Login</router-link> &nbsp;·&nbsp;
            <a>Sign Up With Google</a> &nbsp;·&nbsp;
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
  export default {
    name: "PageRegister",
    data() {
      return {
        form:{
          username: null,
          email: null, 
          password: null
        }
      }
    },
     methods: {
       register (){
         console.log(this.form)
       }
      /* NOT CONNECTED DAVSATU       
      summit() {
        var url = 'http://localhost:3001/api/signUp';
        var data = {username: 'example'};

        console.log(data);
        console.log(JSON.stringify(data));

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*");
      

        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:myHeaders,
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

      }
    },
    */
  /*      axios.get('http://127.0.0.1:3001/api/product')
          .then(function (res) {
            console.log(res.data);
            })
          .catch(function (err) {
            console.log("error");
            console.log(err);            
            });  */  
    },
  }
</script>

<style scoped>
  .hero.is-success {
    background: #F2F6FA;
    background-image: url('../assets/default-02.jpg');
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .is-4 is-offset-4{
    background: rgba(255,255,255,0.7);
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
    background: #fff;
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
</style>