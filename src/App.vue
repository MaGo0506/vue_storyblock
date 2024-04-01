<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <Suspense>
    <RouterView />
  </Suspense>
</template>


<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  setup() {

    return {
      RouterLink,
      RouterView
    }
  },
}
</script>
