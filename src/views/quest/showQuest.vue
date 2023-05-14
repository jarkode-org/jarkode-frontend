<template>
  <div class="container">
    <div class="row align-items-start">
      <div class="col mt-5">
        <div v-if="quest">
          <h1>{{ quest.qtitle }}</h1>
          <!-- eslint-disable -->
          <quill-editor v-model:content="quest.question" contentType="html" readOnly theme=""></quill-editor>
        </div>
        <div v-if="error">{{ error }}</div>
      </div>
      <div class="col-md-4 mt-5 h-50">
        <router-link :to="{ name: 'quest' }" class="btn btn-primary w-100">Kembali</router-link>
        <!-- <button @click="deletePost(post.id)" class="btn btn-sm btn-danger mt-2 w-100">Delete</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router'

export default {
  data() {
    return {
      quest: null,
      error: null
    }
  },
  created() {
    const router = useRouter()
    const route = useRoute()
    // const slug = this.$route.params.slug; // get the slug parameter from the route
    axios.get(`https://jarkodeapp.000webhostapp.com/api/quests/${route.params.kd}`)
    .then(response => {
      this.quest = response.data.data;
    })
    .catch(error => {
      this.error = error.message;
    });
  },
  methods: {
    // deletePost(id) {
    //   if (confirm('Are you sure?')){
    //     axios.delete(`http://localhost:8000/api/quests/${id}/delete`)
    //     .then(response => {
    //       // Handle successful response
    //       console.log(response);
    //       this.$router.push('/quest');
    //     })
    //     .catch(error => {
    //       // Handle error response
    //       console.log(error);
    //     });
    //   }
    // }
  }
}
</script>

<style module>
@import '../../assets/quill-styles.css'
</style>