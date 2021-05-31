<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <NavBarfooter />
  </div>
</template>


<script>
import NavBar from './components/navbar'
import NavBarfooter from "./components/footer"
export default{
  name:"app",
  components:{
    NavBar,
    NavBarfooter
  }
}
</script>
<style>

</style>
