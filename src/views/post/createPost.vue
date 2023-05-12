<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h1>Create a new post</h1>
          <form @submit.prevent="store">
            <div class="form-group">
              <label class="fw-medium">Title</label>
              <input v-model="post.title" type="text" class="form-control" placeholder="Insert Title">
              <div v-if="validation.title" class="mt-2 alert alert-danger">
                {{ validation.title[0] }}
              </div>
            </div>
            <div class="form-group">
              <label class="fw-medium">Description</label>
              <!-- <textarea v-model="post.content" class="form-control" rows="5" ref="summernote" placeholder="Masukkan Deskripsi Materi"></textarea> -->
              <!-- eslint-disable -->
              <quill-editor v-model:content="post.content" contentType="html" theme="snow" toolbar="essential"></quill-editor>
              <div v-if="validation.title" class="mt-2 alert alert-danger">
                {{ validation.title[0] }}
              </div>
            </div>
          <button type="submit" class="btn btn-primary">Publish</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'


const post = reactive({
  'title': '',
  'content': ''
})

const validation = ref([])
const router = useRouter()

function store() {
  let title = post.title
  let content = post.content

  axios
  .post('http://localhost:8000/api/posts/create',{
    title: title,
    content: content
  }).then(() => {
    router.push({
      name: 'post'
    })
    // console.log(post)
  }).catch(error =>{
    validation.value = error.response.data.data
  })
}

</script>