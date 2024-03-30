import './assets/main.css'

import { createApp } from 'vue'
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

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
