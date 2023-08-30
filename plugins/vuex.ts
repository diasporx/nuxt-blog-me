import {createStore} from "vuex";
import {Post} from "~/types";
// @ts-ignore
import nuxtStorage from 'nuxt-storage';

export interface State {
    posts: Post[];
}

const store = createStore<State>({
    state: {
        posts: JSON.parse(nuxtStorage.localStorage.getData("posts")) || [],
    },
    mutations: {
        ADD_POST(state, post:Post) {
            state.posts.push(post);
            nuxtStorage.localStorage.setData("posts", JSON.stringify(state.posts) || [])
        }
    },
    actions: {
        createPost({commit}, post:Post) {
            commit("ADD_POST", post)
        }
    }
});


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
});