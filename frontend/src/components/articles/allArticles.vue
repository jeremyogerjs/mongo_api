<template>
  <div class="allArticles">
      <div class="columns is-half m-2 is-multiline">
        <div class="card column is-3 m-3" :key="index" v-for="(article,index) in Articles">
          <div class="card-content">
              <router-link :to="`/article/${ article._id }`"><p class="title"> {{ article.title }} </p></router-link>
              <p class="subtitle">Article rédigé par {{ article.author }} et publié le {{ article.date }} </p>
              <p class="content"> {{ article.description }} </p>
          </div>

          <footer class="card-footer">
              <router-link :to="`/edit/article/${ article._id }`"><button class="card-footer-item button is-info mx-2">EDIT</button></router-link>
              <button @click="deleted(article._id)" class="card-footer-item button is-danger">Delete</button>
          </footer>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"AllArticles",
    props:{
        Articles:{
            type:Array,
        }
    },
    data(){
        return{
        }
    },
    methods:{
        deleted (id) {
            let confirmation = confirm("Etes vous sur de vouloir supprimer ?");
            if(confirmation){
                axios({
                    method:"delete",
                    url:`http://localhost:3000/api/articles/${id}`,
                })
            }
        }
    }
}
</script>

<style>

</style>