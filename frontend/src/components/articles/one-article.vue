<template>
  <div class="singleArticle">
      <div class="card">
          <div class="card-content">
              <p class="title"> {{ article.title }} </p>
              <p class="subtitle"> {{ article.author }} </p>
              <p class="content"> {{ article.description }} </p>
          </div>
          <footer class="card-footer">
              <button class="card-footer-item button is-info">Edit</button>
              <button class="card-footer-item button is-danger">Delete</button>
          </footer>
      </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name:"singleArticle",
    data(){
        return{
            article:null,
            id:this.$route.params.id
        }
    },
    created(){
        axios.get(`http://localhost:3000/api/articles/${this.id}`)
        .then(response => this.article = response.data.article)
        .catch(error => console.log(error))
    }
}
</script>

<style>

</style>