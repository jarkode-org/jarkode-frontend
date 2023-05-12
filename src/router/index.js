import { createRouter, createWebHistory } from 'vue-router'

import allPost from '../views/post/allPost.vue'
import createPost from '../views/post/createPost.vue'
import showPost from '../views/post/showPost.vue'
import Editor from '../views/Editor.vue'
import allQuest from '../views/quest/allQuest.vue'
import createQuest from '../views/quest/createQuest.vue'
import showQuest from '../views/quest/showQuest.vue'

const routes = [
    { path: "/", name: 'home', component: Editor },
    { path: "/post", name: 'post', component: allPost },
    { path: "/post/create", name: 'create', component: createPost },
    // { path: "/post/:id/edit", name: 'edit', component: editPost },
    { path: "/post/:slug", name: 'show', component: showPost },
    { path: "/quest", name: 'quest', component: allQuest },
    { path: "/quest/create", name: 'qcreate', component: createQuest },
    { path: "/quest/:kd", name: 'qshow', component: showQuest },
    // { path: "/editor", name: 'editor', component: Editor }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;