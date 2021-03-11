import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue'
import firebase from "firebase"

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
// Make BootstrapVue available throughout your project
Vue.config.productionTip = false;
Vue.use(BootstrapVue)

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAHnvgvVCM_I3HS6fGhzv2LpLWgj0f6xto",
    authDomain: "fir-auth-73d26.firebaseapp.com",
    projectId: "fir-auth-73d26",
    storageBucket: "fir-auth-73d26.appspot.com",
    messagingSenderId: "179174328047",
    appId: "1:179174328047:web:737985f4ad85054b19bd1a",
    measurementId: "G-LKCMWXNBMG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");







