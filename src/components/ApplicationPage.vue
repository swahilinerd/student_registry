<template>
    <div>
        <HeadBar />
        <div class="container p-5 mt-4">
            <div class="col-md-8 offset-2">
                <h4 class="mb-5"><strong>Create New Application</strong></h4>
                
                <div class="mt-5" v-if="showStepOne">
                    <p style="font-size: 1.5em;">
                        <strong>Personal Information: Step 1 out of 3</strong>
                    </p>
                    <div class="mb-3">
                        <label for="">Full Name</label>
                        <input type="text" class="form-control form-control-lg"> 
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="">Gender</label>
                            <select name="" id="" class="form-control form-control-lg">
                                <option value="">Select gender</option>
                                <option value="">Female</option>
                                <option value="">Male</option> 
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="">Birthdate</label>
                            <input type="date" class="form-control form-control-lg">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="">Phone Number</label>
                            <input type="text" class="form-control form-control-lg">
                        </div>
                        <div class="col-md-6">
                            <label for="">Phone Number(Optional)</label>
                            <input type="text" class="form-control form-control-lg">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="">Email Address(Optional)</label>
                        <input type="email" class="form-control form-control-lg">
                    </div>
                    <div class="mb-3">
                       <div class="row">
                            <div class="col-md-4 d-grid">
                                <button @click="toStepTwo" class="btn btn-success btn-lg">Next</button>
                            </div>
                       </div>
                    </div>
                </div>

                <div class="mt-5" v-if="showStepTwo">
                    <p style="font-size: 1.5em;"><strong>Educational Background: step 2 out of 3</strong></p>
                    <div class="mb-3">
                        <label for="">O-level school name</label>
                        <input type="text" class="form-control form-control-lg">
                    </div>
                    <div class="mb-3">
                        <label for="">Form 4 index number</label>
                        <input type="text" class="form-control form-control-lg">
                    </div>

                    <div class="mb-3">
                        <label for="">A-level school name(Optinal)</label>
                        <input type="text" class="form-control form-control-lg">
                    </div>
                    <div class="mb-3">
                        <label for="">Form 6 index number(Optinal)</label>
                        <input type="text" class="form-control form-control-lg">
                    </div>
                    <div class="row">
                        <div class="col-md-4 d-grid">
                            <button @click="backToStepOne" class="btn btn-primary btn-lg">Previous</button>
                        </div>
                        <div class="col-md-4 d-grid">
                            <button @click="tostepThree" class="btn btn-success btn-lg">Next</button>
                        </div>
                    </div>
                </div>

                <div class="mt-5" v-if="showStepThree">
                    <p style="font-size: 1.5em;"><strong>Programme Selection: step 3 out of 3</strong></p>
                    <div class="mb-3">
                        <label for="" class="label"> Programme</label>
                        <Select class="form-control form-control-lg">
                            <option disabled selected value> -- select a programme -- </option>
                            <option value="">Bachelor of Science in Computer Science</option>
                            <option value="">Bachelor of Science in Architecture</option>
                            <option value="">Bachelor of Science in Computer Engineering</option>
                            <option value="">Bachelor of Science in Computer Graphics</option>
                            <option value="">Bachelor of Science in Education</option>
                        </Select>
                    </div>
                    <div class="row">
                        <div class="col-md-4 d-grid">
                            <button @click="backToStepTwo" class="btn btn-primary btn-lg">Previous</button>
                        </div>
                        <div class="col-md-4 d-grid">
                            <button @click="finish" class="btn btn-success btn-lg">Finish</button>
                        </div>
                    </div>
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
                stepOne: {
                    fullName: "", phoneNumber: "", phoneNumberTwo:  "",
                    gender: "", birthDate: "", email: ""
                },
                stepTwo: {
                    indexNumber: "" 
                },
                showStepOne: true,
                showStepTwo: false, 
                showStepThree: false,   
            }
        },
        methods: {
            toStepTwo() {
                this.showStepOne = false
                this.showStepThree = false 
                this.showStepTwo = true 
            },
            tostepThree() {
                this.showStepOne = false 
                this.showStepTwo = false 
                this.showStepThree = true
            },
            backToStepTwo() {
                this.showStepTwo = true 
                this.showStepOne = false 
                this.showStepThree = false 
            },
            backToStepOne() {
                this.showStepOne = true 
                this.showStepTwo = false 
                this.showStepThree = false 
            },
            finish() {
                this.$router.push("home") 
            }
        },
   
    }
</script>