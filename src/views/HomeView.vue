<template>
  <!-- <Hero v-if="story" :blok="story.content" /> -->
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script>
import { useStoryblok, useStoryblokBridge } from '@storyblok/vue';
import Hero from '../components/Hero.vue';
import { onMounted } from 'vue';

export default {
  components: {
    Hero,
  },
  async setup() {
    const story = await useStoryblok('home', { version: 'draft' })

    onMounted(() => {
      console.log('story', story);
      useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
    });

    return {
      story
    }
  }
}
</script>