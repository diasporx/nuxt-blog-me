<template>
  <div>

    <Pagination/>

    <div class="posts">
      <div v-for="post in paginatedPosts" :key="post.id" class="post">
        <div class="image">
          <img v-if="post.image !== ''" :src="`${post.image}`" class="img-thumbnail" :alt="`${post.title}`">
          <div v-else></div>
        </div>
        <div class="p-3">
          <div class="title-post d-flex flex-column justify-content-center">
            <h2 class="mb-0">{{ post.title }}</h2>
            <span class="mb-0">Created Date: {{ post.date }}</span>
          </div>
          <div class="description-post mb-4">
            <p class="mb-0 mini-description">{{ post.description }}</p>
          </div>
          <div class="buttons d-flex justify-content-between align-items-center">
            <button class="btn btn-danger" type="button" @click="deleteThisPost(post)">Delete</button>
            <NuxtLink class="btn btn-success" :to='`/posts/${post.id}`'>Visit</NuxtLink>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {useStore} from "vuex";
import {Post} from "~/types";
import Pagination from "~/components/post/Pagination.vue"

const store = useStore();

const paginatedPosts = computed(() => {
  const startIndex = (store.state.currentPage - 1) * store.state.postsPerPage;
  const endIndex = startIndex + store.state.postsPerPage;
  return store.state.posts.slice(startIndex, endIndex);
});

const deleteThisPost = (post: Post) => {
  store.dispatch("removePost", post)
};
</script>

<style lang="scss" scoped>

.no-posts {
  height: 300px;
  display: flex;
  align-items: center;
  h1 {
    width: 100%;
    text-align: center;
    color: #d3d3d3;
  }
}

.posts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(392px, 1fr));
  gap: 20px;
  justify-items: center;

  .post {
    max-width: 400px;
    overflow: hidden;
    width: 400px;
    min-width: 350px;
    border-radius: 12px;
    background-color: #fff;
    border: 1px solid #E8E8EA;
  }
}
.mini-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.image{
  div {
    width: 398.5px;
    height: 293.45px;
    background: rgb(2,0,36);
    background: linear-gradient(122deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 54%, rgba(0,212,255,1) 100%);
  }
}
</style>