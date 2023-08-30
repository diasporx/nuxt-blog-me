<template>
  <div class="main-page">

    <CreatePost v-if="store.state.popupNewPostActive === true" />

    <h5 class="mb-3">Latest posts: {{store.state.posts.length}}</h5>
    <Posts />
  </div>
</template>

<script setup lang="ts">
import {useStore} from "vuex";

const store = useStore();
</script>

<script lang="ts">
import Posts from '~/components/post/Posts.vue'
import CreatePost from '~/components/post/CreatePost.vue'
// import CreatePost from '~/components/post/CreatePost.vue'
export default {
  components: {Posts, CreatePost}
}
</script>
