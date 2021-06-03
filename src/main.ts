import { createApp } from 'vue'
import App from './app/App.vue'
import router from './router'
import { store } from "@/store";
// import { svgSpritePlugin } from "vue-svg-sprite";
// import svgSprite from "@/app/assets/sprite.svg"


createApp(App)
    // .use(svgSpritePlugin, {
    //     url: svgSprite,
    // })
    .use(store)
    .use(router)
    .mount('#app')
