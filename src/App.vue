<template>

  <nav>
    <div class="navbar">
      <h4>Using SPA Routing</h4>
      <router-link to="/">Home</router-link> |
      <router-link to="/jobs">Jobs</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/admin" class="admin">Admin</router-link>
    </div>

    <br><br> 

    <div class="navbar">
      <h4>Using non-SPA Routing</h4>
      <a href="/">Home</a> | 
      <a href="/jobs">Jobs</a> | 
      <a href="/about">About</a> | 
      <a href="/contact">Contact</a> | 
      <a href="/admin">Admin</a>
    </div>
    

  </nav>

  <div class="nav-buttons">
    <button @click="reDirect" >Redirect</button>
    <button @click="goBack" >Go Back</button>
    <button @click="goForward" >Go Forward</button>
  </div>

  <router-view/>

</template>



<script>
export default {
    methods: {
      reDirect() {
        console.log("reDirect");
        this.$router.push({ name: 'home' });
      },
      goBack() {
        console.log("goBack");
        this.$router.go(-1);
      },
      goForward() {
        console.log("goForward");
        this.$router.go(+1);
      }
    }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
.admin {
  color: darkred;
}
.nav-buttons {
  margin: 40px;
}
button {
  margin: 10px;
  min-height: 35px;
  min-width: 100px;
  border: none;
  border-radius: 5px;
}
.navbar {
  margin: 0 auto;
  padding: 5px;
  background-color: rgb(222, 239, 245);
  max-width: 600px;
  border-radius: 10px;
}
</style>

