<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link :to="{ name: 'home' }" class="navbar-brand">
            <img src="./image/logo.png" alt="Logo"/>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{ name: 'post' }" class="nav-link">Materi</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'quest' }" class="nav-link">Quiz</router-link>
                </li>
                <li>
                    <a @click="showAlert" class="nav-link me-element">About</a>
                    <!-- <button @click="showAlert" class="btn btn-primary">Send Message</button> -->
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
    methods: {
        showAlert() {
            Swal.fire({
                title: 'About',
                // text: 'Aplikasi Ini Dibuat Oleh: M. Ikhwan Fahmi Ardiansyah',
                html: '<div><h2>Aplikasi ini dibuat oleh:</h2><img src="image/about.png" alt="My Image"><p></p><p>M. Ikhwan Fahmi A. (18050974026)</p><p>S1 Pendidikan Teknologi Informasi</p><p>Universitas Negeri Surabaya</p></div>',
                confirmButtonText: 'OK',
                confirmButtonColor: '#007bff'
            });
        }
    }
}
</script>

<style>
.me-element {
  cursor: pointer;
}

nav img {
    width:50px;
}
 
</style>