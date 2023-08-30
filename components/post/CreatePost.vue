<template>
  <div class="overlay">
    <div class="form-create-post position-relative p-5 w-100 align-items-start d-flex flex-column">
      <h4 class="mb-3">Create new post</h4>
      <div class="input-group mb-3">
        <span class="input-group-text" id="title-input">Title post:</span>
        <input v-model="newPost.title" type="text" class="form-control" placeholder="Title" aria-label="title"
               aria-describedby="title-input">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">With textarea</span>
        <textarea v-model="newPost.description" class="form-control" aria-label="With textarea"></textarea>
      </div>
      <div class="mb-3 w-100">
        <input class="form-control" @change="setImage" type="file" id="formFile">
      </div>
      <button @click="createNewPost" type="button" class="btn btn-primary mb-3">New Post</button>
      <button class="close-popup" @click="store.commit('TOGGLE_POPUP')"><img src="~/assets/img/exit.png" alt="close"></button>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useStore} from "vuex";
import {Post} from "~/types";

const store = useStore();

const newPost = ref<Post>({
  id: 0,
  title: "",
  description: "",
  date: new Date().toLocaleDateString(),
  image: ''
});

const setImage = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && e.target.result) {
        newPost.value.image = e.target.result.toString();
      }
    };
    reader.readAsDataURL(file);
  }
};


const createNewPost = () => {
  if (newPost.value.title && newPost.value.description) {
    newPost.value.id = store.state.posts.length + 1;
    store.dispatch("createPost", {...newPost.value});
    newPost.value.title = "";
    newPost.value.description = "";
    newPost.value.date = new Date().toLocaleTimeString();
    store.commit('TOGGLE_POPUP')
  }
};
</script>

<style scoped lang="scss">
.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: #11111150;
}
.form-create-post {
  border-radius: 7px;
  min-width: 450px;
  max-width: 600px;
  background-color: #fff;
  textarea {
    max-height: 150px;
  }
  button.close-popup {
    position: absolute;
    top:20px;
    right:20px;
    width: 25px;
    transition: all .3s ease;
    &:hover {
      transform: rotate(180deg);
    }
    img {
      width: inherit;
    }
  }
}
</style>