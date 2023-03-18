import { createApp } from 'vue'
import {
    createRouter,
    createWebHashHistory
} from "vue-router"

import "fontawesome-free/css/all.css" 
import "fontawesome-free/js/all.js"
import "bootstrap/dist/css/bootstrap.min.css"

import App from './App.vue'
import LoginPage from "./components/LoginPage.vue"
import RegistrationPage from "./components/RegistrationPage.vue"
import HeadBar from "./components/_layout/HeadBar.vue" 
import FootBar from "./components/_layout/FootBar.vue" 
import LoginForm from "./components/_layout/LoginForm.vue" 
import SideBar from "./components/_layout/SideBar.vue"
import RegistrationForm from "./components/_layout/RegistrationForm.vue" 
import HomePage from "./components/HomePage.vue" 
import ApplicationPage from "./components/ApplicationPage.vue" 


const routes = [
    { path: "/",  name: "login", component: LoginPage },
    { path: "/register", name: "register", component: RegistrationPage },
    { path: "/home", name: "dashboard", component: HomePage },
    { path: "/apply", name: "apply", component: ApplicationPage },

]

const router = createRouter({
    history: createWebHashHistory(), 
    routes, 
})

const app = createApp(App)
app.component("LoginPage",  LoginPage)
app.component("RegistrationPage", RegistrationPage) 
app.component("HeadBar", HeadBar) 
app.component("FootBar", FootBar) 
app.component("LoginForm", LoginForm)
app.component("SideBar", SideBar)
app.component("RegistrationForm", RegistrationForm) 
app.component("HomePage", HomePage)

app.use(router) 
app.mount('#app')

