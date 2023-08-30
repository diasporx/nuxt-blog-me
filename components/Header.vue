<template>
  <header>
    <div class="container">
      <div class="d-flex align-items-center justify-content-between py-3">
        <span>Blog</span>
        <button @click="store.commit('TOGGLE_POPUP');">+</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {useStore} from "vuex";

const store = useStore();
</script>

<style scoped lang="scss">
button {
  background-color: #dedede;
  transition: all .3s ease;
  color: #656565;
  font-weight: 700;
  font-size: 25px;
  padding: 0 30px;
  border-radius: 5px;
  &:hover {
    color: #111;
  }

}

span {
  font-size: 28px;
  font-weight: 600;
  color: #494949;
}
</style>