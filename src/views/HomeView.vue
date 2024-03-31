<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script>
import { useStoryblok } from '@storyblok/vue';

export default {
  async setup() {
    const story = await useStoryblok('home', { version: 'draft' })

    return {
      story
    }
  }
}
</script>