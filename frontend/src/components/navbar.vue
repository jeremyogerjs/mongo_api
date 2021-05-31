<template>
<div>


  <div class="navbar">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item" >
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">
            Home
          </router-link>

          <a href="https://bulma.io" target="_blank" class="navbar-item">
            Documentation
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <router-link to="/about" class="navbar-item">
                About
              </router-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button @click="showSignUp" to="/signUp" class="button is-primary">
                <strong>Sign up</strong>
              </button>
              <button @click="showLogin" class="button is-light">
                Log in
              </button>
              <router-link to="/createArticle" class="button is-info">
                New article
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
      
  </div>
  <Login :isActiveLog="isActiveLog" @updateActiveLog="updateActiveLog" />
  <SignUp :isActiveSign="isActiveSign" @updateActiveSign="updateActiveSign" />
</div>
</template>

<script>
import Login from "../components/form/login"
import SignUp from "../components/form/signUp"
export default {
    name:"navbar",
    components:{
      Login,
      SignUp
    },
    data(){
      return{
        isActiveLog:false,
        isActiveSign:false,
      }
    },
    methods:{
      showLogin () {
        return this.isActiveLog = true;
      },
      updateActiveLog(value) {
        this.isActiveLog = value;
      },
      showSignUp () {
        return this.isActiveSign = true;
      },
      updateActiveSign (value) {
        this.isActiveSign = value;
      }
    }
}
</script>

<style>

</style>