<template>
    <div>
      <button class="btn btn-primary" @click="toggleCard">Open Card</button>
      <div class="card" v-if="isOpen">
        <div class="card-body">
            <h5 class="card-title">My Card</h5>
            <p class="card-text">{{ cardContent }}</p>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isOpen: false,
            cardContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        };
    },
    methods: {
        toggleCard() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>
  