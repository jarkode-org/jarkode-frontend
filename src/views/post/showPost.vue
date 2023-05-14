<template>
  <div class="container">
    <div class="row align-items-start">
      <div class="col mt-5">
        <div v-if="post">
          <h1>{{ post.title }}</h1>
          <!-- eslint-disable -->
          <quill-editor v-model:content="post.content" contentType="html" readOnly theme=""></quill-editor>
        </div>
        <div v-if="error">{{ error }}</div>
      </div>
      <div class="col-md-4 mt-5 h-50">
        <router-link :to="{ name: 'post' }" class="btn btn-primary w-100">Kembali</router-link>
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
      post: null,
      error: null
    }
  },
  created() {
    const router = useRouter()
    const route = useRoute()
    // const slug = this.$route.params.slug; // get the slug parameter from the route
    axios.get(`https://jarkodeapp.000webhostapp.com/api/posts/${route.params.slug}`)
    .then(response => {
      this.post = response.data.data;
    })
    .catch(error => {
      this.error = error.message;
    });
  },
  methods: { 
    // deletePost(id){
    //   const errorMessage = ref('')

    //   if (confirm('Are you sure?')){
    //     try {
    //       const response = axios.delete(`http://localhost:8000/api/posts/${id}/delete`)

    //       if (!response.data.success) {
    //         throw new Error(response.data.message)
    //       }
    //       router.push({
    //         name: 'post'
    //       })
    //       console.log(response.data)
    //     } catch (error) {
    //       errorMessage.value = error.message
    //     }
    //   }
    // }
    deletePost(id) {
      if (confirm('Are you sure?')){
        axios.delete(`https://jarkodeapp.000webhostapp.com/api/posts/${id}/delete`)
        .then(response => {
          // Handle successful response
          console.log(response);
          this.$router.push('/post');
        })
        .catch(error => {
          // Handle error response
          console.log(error);
        });
      }
    }
  },
}
</script>

<style module>
@import '../../assets/quill-styles.css'
</style>