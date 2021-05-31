<template>
    <div class="newArticle">
        <form @submit.prevent="submit" >
            <div class="field">
                <label for="title" class="label">Titre de l'article</label>
                <input type="text" id="title" class="input" v-model="values.title">
            </div>

            <div class="field">
                <label for="author" class="label">Votre nom complet</label>
                <input type="text" id="author" class="input" v-model="values.author">
            </div>

            <div class="field">
                <label for="description" class="label"></label>
                <textarea name="description" id="description" cols="30" rows="10" placeholder="Inserez votre description" v-model="values.description"></textarea>
            </div>

            <div class="field">
                <label for="image" class="label">Insérez l'url d'une image</label>
                <input type="text" id="image" class="input" v-model="values.image">
            </div>

            <div class="field">
                <label for="date" class="label">Date de publication</label>
                <input type="date" id="date" class="input" v-model="values.date">
            </div>
            <div class="field">

                <button type="submit" class="button is-success">Envoyer</button>
                <button @click="edited" type="button" class="button is-info">editer</button>
                
            </div>
        </form>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"createArticle",
    data(){
        return{
            values:{
                title:"",
                author:"",
                description:"",
                image:"",
                date:null
            },
            id:this.$route.params.id,
        }
    },
    methods:{
        submit(){
            axios({
                method:'post',
                url:"http://localhost:3000/api/articles",
                data:this.values
            });
        },
        edited(){
            axios({
                method:'put',
                url:`http://localhost:3000/api/articles/${this.id}`,
                data:this.values
            });
            this.$router.push("/")
        }
    }
}
</script>

<style>

</style>