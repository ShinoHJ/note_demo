<script setup>
import { RouterView, RouterLink } from "vue-router";
import ToolBar from "./components/ToolBar.vue";
import NoteList from "./components/NoteList.vue";
</script>

<template>
  <ToolBar />
  <main>
    <div class="container-fluid">
      <div class="row vh-100">
        <div class="col-3 p-3 text-bg-secondary">
          <NoteList />
        </div>
        <div class="col-9 p-3">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </main>
  <footer></footer>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
main {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
i.fa-pen-nib, i.fa-circle-xmark {
  transition: 0.3s;
  cursor: pointer;
  color: #c8c9cb;
}
.my-note:hover i.fa-pen-nib:hover, i.fa-pen-nib:hover{
  color: rgb(32, 196, 147);
  scale: 1.1;
}
.my-note:hover i.fa-circle-xmark:hover {
  color: rgb(248, 17, 17);
  scale: 1.1;
}
</style>
