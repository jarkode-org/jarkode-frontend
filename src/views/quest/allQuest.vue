<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <div class="text-center">
          <h1>Quiz</h1>
          <!-- <router-link :to="{ name: 'qcreate' }" class="btn btn-primary">Create</router-link> -->
        </div>
        <div class="mt-4 pb-4">
          <div v-for="quest in quests" :key="quest.id" class="card bg-light custom-card mb-2">
            <router-link :to="{ path: '/quest/' + quest.kd }">
              <div class="card-body">
                <h5>{{ quest.qtitle }}</h5>
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
      quests: [],
    };
  },
  mounted() {
    axios.get('https://jarkodeapp.000webhostapp.com/api/quests').then((response) => {
      this.quests = response.data.data;
    });
  },
};
</script>

<style>

</style>