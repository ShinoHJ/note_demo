<script setup>
import { useRouter, RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="logo">
          <i class="fa-solid fa-hand-pointer"></i>
        </div>
        <a class="navbar-brand" href="#">Quick Note</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'grid' }" class="nav-link">筆記一覽</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/add-note">新增</router-link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav {
  padding: 10px 20px;
}
.logo {
  margin-right: 20px;
}
.router-link-active {
  font-weight: bold;
}
</style>
