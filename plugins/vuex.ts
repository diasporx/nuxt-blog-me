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
        ADD_POST(state, post: Post) {
            state.posts.push(post);
            nuxtStorage.localStorage.setData("posts", JSON.stringify(state.posts) || [])
        },
        DELETE_POST(state, post: Post) {
            const index = state.posts.findIndex(p => p.id === post.id);
            if (index !== -1) {
                state.posts.splice(index, 1);
            }
        },
    },
    actions: {
        createPost({commit}, post: Post) {
            commit("ADD_POST", post)
        },
        removePost({ commit }, post: Post) {
            commit("DELETE_POST", post);
        },
    },
    getters: {
        onePost: (state) => (id: number) => {
            return state.posts.find(post => post.id === id);
        }
    }
});


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
});