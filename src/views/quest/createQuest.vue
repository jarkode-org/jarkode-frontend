<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h1>Create a new quiz</h1>
          <form @submit.prevent="store">
            <div class="form-group">
              <label class="fw-medium">Title</label>
              <input v-model="quest.qtitle" type="text" class="form-control" placeholder="Insert Title">
              <div v-if="validation.title" class="mt-2 alert alert-danger">
                {{ validation.qtitle[0] }}
              </div>
            </div>
            <div class="form-group">
              <label class="fw-medium">KD</label>
              <input v-model="quest.kd" type="text" class="form-control" placeholder="Insert KD">
              <div v-if="validation.title" class="mt-2 alert alert-danger">
                {{ validation.qtitle[0] }}
              </div>
            </div>
            <div class="form-group">
              <label class="fw-medium">Question</label>
              <!-- eslint-disable -->
              <quill-editor v-model:content="quest.question" contentType="html" theme="snow" toolbar="essential"></quill-editor>
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

const quest = reactive({
  'qtitle': '',
  'kd': '',
  'question': ''
})

const validation = ref([])
const router = useRouter()

function store() {
  let qtitle = quest.qtitle
  let kd = quest.kd
  let question = quest.question

  axios
  .post('http://localhost:8000/api/quests/create',{
    qtitle: qtitle,
    kd: kd,
    question: question
  }).then(() => {
    router.push({
      name: 'quest'
    })
    // console.log(post)
  }).catch(error =>{
    validation.value = error.response.data.data
  })
}
</script>

<style>

</style>