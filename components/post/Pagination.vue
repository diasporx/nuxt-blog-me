<template>
  <div class="pagination pb-3 d-flex align-items-center justify-content-between">
    <button @click="prevPage" class="btn btn-secondary me-3">Prev Page</button>
    <span class="me-3">Current page navigation: {{currentPage}}</span>
    <button @click="nextPage" class="btn btn-secondary">Next Page</button>
  </div>
</template>
<script setup lang="ts">
import {useStore} from "vuex";
const store = useStore()

const currentPage = computed(() => store.state.currentPage);
const totalPages = computed(() => Math.ceil(store.state.posts.length / store.state.postsPerPage));

function nextPage() {
  if (currentPage.value < totalPages.value) {
    store.state.currentPage++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    store.state.currentPage--;
  }
}
</script>

<style scoped lang="scss">
.pagination {
  width: min-content;
  button, span {
    white-space: nowrap;
  }
}
</style>