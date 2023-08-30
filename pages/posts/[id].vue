<template>
<!--  <h1>This is {{ id }}</h1>-->
  <div class="post-detailed">
    <NuxtLink class="btn btn-success mb-3" to="/">Go Home</NuxtLink>
    <div class="this-post">
      <img v-if="post.image !== ''" :src="`${post.image}`" :alt="`${post.title}`">
      <h1>{{post.title}}</h1>
      <span>Created: {{post.date}}</span>
      <hr>
      <p>{{post.description}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const route = useRoute()
const store = useStore();

const post = store.getters.onePost(Number(route.params.id));

</script>