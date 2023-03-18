<template>
    <form>
        <div class="mb-3">
            <h3><strong>Create Your Account</strong></h3>
        </div>
        <div class="mb-3">
            <label for="">Username</label>
            <input type="text" class="form-control form-control-lg" >
        </div>
        <div class="mb-3">
            <label for="">Phone Number</label>
            <input type="text" class="form-control form-control-lg" >
        </div>
        <div class="mb-3">
            <label for="">Email Address(Optional)</label>
            <input type="text" class="form-control form-control-lg" >
        </div>
        <div class="mb-3">
            <label for="">Password</label>
            <input type="text" class="form-control form-control-lg" >
        </div>
        <div class="mb-3 d-grid"> 
            <button class="btn btn-lg btn-success">Create Account</button>
        </div>
        <div class="mb-3">
            <router-link :to="{ name: 'login' }">Already have an account? Sign In</router-link>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
            
            }   
        }
    }
</script>