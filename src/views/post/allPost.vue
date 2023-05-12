<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <div class="text-center">
          <h1>Materi</h1>
          <!-- <router-link :to="{ name: 'create' }" class="btn btn-primary">Create</router-link> -->
        </div>
        <div class="mt-4 pb-4">
          <div v-for="post in posts" :key="post.id" class="card bg-light custom-card mb-2">
            <router-link :to="{ path: '/post/' + post.slug }">
              <div class="card-body">
                <h5>{{ post.title }}</h5>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios.get('http://localhost:8000/api/posts').then((response) => {
      this.posts = response.data.data;
    });
  },
};
</script>

<style>
.card {
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transform: translateY(-2px);
}

</style>