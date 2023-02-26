<template>
    <div class="login-container">
    <input type="text" @keyup.enter="Login" name="" class="login-form" v-model="username" >
    <button @click="Login" class="login-button"> Login </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: ''
        }
    },
    methods: {
        Login() {
            this.$emit('login', this.username)
        }
    }
}
</script>

<style>

.login-container { 
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login-form {
    height: 2rem;
    width: 15rem;
    padding: 0.2rem;
    border-radius: 2rem;
    margin-top: 10rem;
    border: 2px solid #5aff8e;
}
.login-button {
    height: 2rem;
    width: 6rem;
    border-radius: 2rem;
    margin-top: 1.5rem;
    border: 2px solid #5aff8e;
    color:white;
    font-size: large;
    font-weight: bold;
    background-color: #5aff8e;
    
}
</style>