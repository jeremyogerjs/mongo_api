<template>
    <div class="login">
        <div class="modal" :class="{ 'is-active': isActiveLog}">
            <div @click="closeLog" class="modal-background"></div>
                <div class="modal-content box">
                    <form action="">
                        <div class="field">
                            <label for="identifiant" class="label">Nom de compte</label>
                            <input type="text" id="identifiant" class="input">
                        </div>

                        <div class="field">
                            <label for="password" class="label">Mot de passe</label>
                            <input type="text" class="input">
                        </div>
                        <div class="field">
                            <p class="control">
                                <button class="button is-success">Login</button>
                            </p>
                        </div>

                    </form>
                </div>
            <button @click="closeLog" class="modal-close is-large" aria-label="close"></button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Login",
    props:{
        isActiveLog:{
            type:Boolean
        }
    },
    data () {
        return {
            
        }
    },
    methods: {
        closeLog () {
            this.isActiveLog = false;
            this.$emit('updateActiveLog',false);
        }
    }
}
</script>

<style>

</style>