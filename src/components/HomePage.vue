<template>
    <div>
        <HeadBar /> 
        <div class="container p-5">
            <h4>Hi, Salum Patrick</h4>
            <div class="row mt-5">
                <div class="col-md-8 offset-2 text-center">
                    <p>
                        Seems like you haven't done any registration<br>
                        Dont panic you can register now
                    </p>
                    <p>
                        <router-link :to="{ name: 'apply' }"  class="btn btn-outline-success">
                            Create New Application 
                        </router-link>
                    </p>
                </div>
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