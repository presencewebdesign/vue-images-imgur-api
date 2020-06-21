import Vue from "vue"
import App from "./App"
import store from "./store/"
import VueRouter from "vue-router"
import AuthHandler from "./components/AuthHandler"
import ImageList from "./components/ImageList.vue"
import UploadForm from "./components/UploadForm.vue"
// import FavouriteList from "./components/FavouriteList.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
   mode: "history",
   routes: [
      { path: "/", component: ImageList },
      { path: "/upload", component: UploadForm },
      // { path: "/favourites", component: FavouriteList },
      { path: "/oauth2/callback", component: AuthHandler },
   ],
})
new Vue({
   router,
   store,
   render: (h) => h(App),
}).$mount("#app")
