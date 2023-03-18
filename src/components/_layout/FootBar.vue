<template>
<footer class="footer bg-light">
    <div class="container">
        <div class="row">
        <div class="col-md-4">
            <div class="footer-widget">
                <h6 class="footer-widget-title">Internal Links</h6>
                <div class="footer-widget-content">
                    <ul>
                        <li><a href="" target="_blank">About Us</a></li>
                        <li><a href="" target="_blank">Reach Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="footer-widget">
                <h6 class="footer-widget-title">Useful Links</h6>
                <div class="footer-widget-content">
                    <ul>
                        <li><router-link :to="{ name: 'login' }">Home</router-link></li>
                        <li><router-link :to="{ name: 'register' }">Account Registration</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="footer-widget">
                <h6 class="footer-widget-title">Other Resources</h6>
                <div class="footer-widget-content">
                    <ul>
                        <li><a href="" target="_blank">Some University of Science and Techonology</a></li> 
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <div class="row footer-bottom">
        <div class="col-md-6">
            <small>&copy; Copyright Some University of Science and Technology</small>
        </div>
        <div class="col-md-6">
            <ul class="footer-media-list"> 
                <li><a href="" target="_blank">Linkedin</a></li>
                <li><a href="" target="_blank">Instagram</a></li>
                <li><a href="" target="_blank">Twitter</a></li>
                <li><a href="" target="_blank">Facebook</a></li>
                <li><a href="#">Youtube</a></li> 
            </ul>
        </div>
    </div>
    </div>
</footer>
</template>

<script>
    export default {

    }
</script>

<style>

.footer {
    color: rgb(48, 39, 39);
    font-size: 0.8em;
    padding-top: 6em;
    padding-bottom: 2em;
}

.footer-bottom {
    margin-top: 30px;
}

.footer-media-list li {
    display: inline; 
    padding: 0.33em;
}

.footer-widget-title {
    font-weight: bolder;  
    font-size: 1.2em;
}
.footer-widget-content li {
    list-style-type: none;
    margin-left: -2em;
    padding: 0.1em; 
}
.footer-widget-content a {
    text-decoration: none; 
    color: rgb(48, 39, 39);
}

.footer-media-list a {
    color: rgb(48, 39, 39); 
    text-decoration: none;
    font-size: 0.8em;
}
</style>