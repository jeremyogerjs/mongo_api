<template>
  <div class="home">
      <Articles :Articles="articles" />
      
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Articles from "../components/articles/allArticles"

export default {
  name: 'Home',
  components:{
    Articles,
  },
  data(){
    return{
      articles:null,
    }
  },
  methods:{

  },
  mounted(){
    axios.get('http://localhost:3000/api/articles')
    .then(response =>{
       this.articles = response.data.articles
       
    })
    .catch(function(error){
      console.log(error)
    });
  }
}
</script>
