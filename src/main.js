import './assets/main.css'

import { createApp } from 'vue'
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import { createPinia } from 'pinia'

import App from './App.vue'
import Grid from "./components/Grid.vue";
import Page from "./components/Page.vue";
import Teaser from "./components/Teaser.vue";
import Feature from "./components/Feature.vue";
import router from './router'

const app = createApp(App)

app.component("Grid", Grid);
app.component("Page", Page);
app.component("Teaser", Teaser);
app.component("Feature", Feature);

app.use(createPinia())
app.use(router)
app.use(StoryblokVue, {
    accessToken: '6rKKLFrzBkjonzueYwWuMQtt',
    bridge: process.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
    use: [apiPlugin],
    apiOptions: {
        region: "eu",
    },
});

app.mount('#app')
