<template>
  <div v-editable="blok" class="px-6">
    <StoryblokComponent v-for="inblok in blok.body" :blok="inblok" :key="inblok._uid" />
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  props: {
    blok: {
      type: Object
    }
  },
  setup(props) {

    onMounted(() => {
      console.log(props.blok);
    })
  }
}
</script>