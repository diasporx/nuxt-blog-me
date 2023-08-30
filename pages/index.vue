<template>
  <div class="main-page">
    <!-- Форма для создания поста -->
    <div class="form-create-post w-100 align-items-start d-flex flex-column">
      <div class="input-group w-50 mb-3">
        <span class="input-group-text" id="title-input">Title post:</span>
        <input v-model="newPost.title" type="text" class="form-control" placeholder="Title" aria-label="title" aria-describedby="title-input">
      </div>
      <div class="input-group w-50 mb-3">
        <span class="input-group-text">With textarea</span>
        <textarea v-model="newPost.description" class="form-control" aria-label="With textarea"></textarea>
      </div>
      <button @click="createNewPost" type="button" class="btn btn-primary mb-3">New Post</button>
    </div>

    <div class="posts d-flex flex-column align-items-start justify-content-center">
      <div v-for="post in store.state.posts" :key="post.id" class="post mb-3 w-50 p-3">
        <div class="title-post d-flex align-items-center justify-content-between">
          <h2 class="mb-0">{{ post.title }}</h2>
          <span class="mb-0">Created Date: {{ post.date }}</span>
        </div>
        <div class="description-post">
          <p class="mb-0">{{ post.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { ref } from "vue";
import {Post} from "~/types";

const store = useStore();
const newPost = ref<Post>({
  id: 0,
  title: "",
  description: "",
  date: new Date().toLocaleDateString(),
});

const createNewPost = () => {
  if (newPost.value.title && newPost.value.description) {
    newPost.value.id = store.state.posts.length + 1;
    store.dispatch("createPost", { ...newPost.value });
    newPost.value.title = "";
    newPost.value.description = "";
    newPost.value.date = new Date().toLocaleTimeString();
  }
};
</script>

<style lang="scss" scoped>
.posts {
  .post {
    border-radius: 5px;
    background-color: #cccccc;
    border: 1px solid #111;
  }
}
</style>
