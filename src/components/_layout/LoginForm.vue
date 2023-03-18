<template>
    <div class="container-fluid">
        <h3><strong>Account Login</strong></h3>
        <form>
            <div class="mb-3">
                <label for="phoneNumber">Phone Number</label>
                <input type="text"  class="form-control form-control-lg" placeholder="Example: 0717567256" >
            </div>
            <div class="mb-3">
                <label for="password">Password</label>
                <input type="text" class="form-control form-control-lg" placeholder="Enter your password" >
            </div>
            <div class="mb-3 d-grid">
                <button class="btn btn-lg btn-success" @click="loginUser">Login In</button>
            </div>
            <div class="mb-3">
                <router-link :to="{ name: 'register' }">Don't have an account? Create Account Now.</router-link>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },

        methods: {
            loginUser() {
                this.$router.push("home") 
            }
        }
    }
</script>