<template>
    <div>
        <HeadBar /> 
        <br><br>
        <div class="row container m-5">
            <div class="col-md-8">
                <SideBar />
            </div>
            <div class="col-md-4">
                <LoginForm />
            </div>
        </div>
        <FootBar />
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>