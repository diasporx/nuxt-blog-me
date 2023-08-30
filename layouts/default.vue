<template>
  <main>
    <Header/>
    <div class="content">
      <div class="container">
        <slot/>
      </div>
    </div>
  </main>
</template>
<script>
import Header from "~/components/Header.vue"

export default {
  components: {Header}
}
</script>