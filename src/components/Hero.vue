<template>
  <div v-editable="blok" class="block-container">
    <img :src="blok.imageSrc.filename" :alt="blok.altText" class="full-w full-h" />
    <div class="cta-block flex gap-2">
      <h2>{{ blok.title }}</h2>
      <p>{{ blok.subTitle }}</p>
      <button class="bg-sky-200 p-4 pointer" type="button" @click="ctaButtonClick">{{ blok.ctaButtonText }}</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { onMounted } from 'vue';

export default {
  props: {
    blok: Object
  },
  setup(props) {
    const imageSrc = ref(props.blok.imageSrc);
    const altText = ref(props.blok.altText);
    const title = ref(props.blok.title);
    const subTitle = ref(props.blok.subTitle);
    const ctaButtonText = ref(props.blok.ctaButtonText);

    const ctaButtonClick = () => {

      console.log('CTA button clicked!');
    };

    onMounted(() => {
      console.log('hero', props.blok);
    })

    return {
      imageSrc,
      altText,
      title,
      subTitle,
      ctaButtonText,
      ctaButtonClick
    };
  }
};
</script>
