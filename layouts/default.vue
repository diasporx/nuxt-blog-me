<template>
  <div class="main">
    <Header/>
    <div class="content pb-5">
      <div class="container">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "~/components/Header.vue"

export default {
  components: {Header}
}
</script>