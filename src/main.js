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
import Hero from './components/Hero.vue';

const app = createApp(App)

app.component("grid", Grid);
app.component("page", Page);
app.component("teaser", Teaser);
app.component("feature", Feature);
app.component("hero", Hero)

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
