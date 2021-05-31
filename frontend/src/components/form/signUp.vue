<template>
  <div class="SignUp">
     
        <div class="modal" :class="{'is-active' : isActiveSign}">
            <div @click="closeSign" class="modal-background"></div>
            <div class="modal-content box">
                 <form action="">
                    <div class="field">
                        <label for="Identifiant" class="label">Votre identifiant</label>
                        <input type="text" id="identifiant" class="input">
                    </div>

                    <div class="field">
                        <label for="password" class="label">Votre mot de passe</label>
                        <input type="text" id="password" class="input">
                    </div>
                    <div class="field">
                        <label for="confirm_password" class="label">Confirmer votre mot de passe</label>
                        <input type="text" id="confirm_password" class="input">
                    </div>
                    <div class="field">
                        <label for="email" class="label">Votre Email</label>
                        <input type="email" id="email" class="input">
                    </div>
                    <div class="field">
                        <p class="control">
                            <button class="button is-success">Sign In</button>
                        </p>
                    </div>
                </form>
            </div>
            <button @click="closeSign" class="modal-close is-large" aria-label="close"></button>
        </div>

  </div>
</template>

<script>
export default {
    name:"SignUp",
    props:{
        isActiveSign:{
            type:Boolean
        }
    },
    data(){
        return{

        }
    },
    methods:{
        closeSign () {
            this.isActiveSign = false;
            this.$emit('updateActiveSign',false)
        }
    }
}
</script>

<style>

</style>