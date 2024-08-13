<script setup>
import { storeToRefs } from "pinia";
import { useNoteStore } from "../store/noteStore";
import { RouterView, RouterLink } from "vue-router";

const noteStore = useNoteStore();
const { notes, pinnedNotes } = storeToRefs(noteStore);
</script>

<template>
  <h4>
    <i class="fa-solid fa-lightbulb" style="color: #ffd43b"></i>&nbsp;重要
  </h4>
  <ul class="list-group important-note">
    <li
      class="list-group-item"
      v-for="(pinned, index) in pinnedNotes"
      :key="index"
    >
      <i class="fa-solid fa-thumbtack" @click="noteStore.markedPinned(pinned.id)">&nbsp;</i>
      {{ pinned.title }}&nbsp;
      <router-link :to="{ name: 'edit-note', params: { id: pinned.id } }">
        <i class="fa-solid fa-pen-nib"></i
      ></router-link>
    </li>
  </ul>

  <h4 class="mt-5">
    <i class="fa-solid fa-list-ul" style="color: #c8ff12"></i>&nbsp;所有
  </h4>
  <ul class="list-group all-note">
    <li class="list-group-item" v-for="note in notes">
      <i class="fa-solid fa-thumbtack" @click="noteStore.markedPinned(note.id)">&nbsp;</i>
      {{ note.title }}&nbsp;
      <router-link :to="{ name: 'edit-note', params: { id: note.id } }">
        <i class="fa-solid fa-pen-nib"></i
      ></router-link>
    </li>
  </ul>
</template>

<style scoped>
nav {
  padding: 10px 20px;
}
.logo {
  margin-right: 20px;
}
.important-note .fa-thumbtack{
  transform: rotateZ(20deg);
  cursor: pointer;
  transition: 0.3s;
  color: rgb(232, 38, 38);
}
.important-note .fa-thumbtack:hover{
  transform: rotateZ(45deg);
  cursor: pointer;
  color: rgba(232, 38, 38, 0.5);
}
.all-note .fa-thumbtack {
  transition: 0.3s;
  cursor: pointer;
}
.all-note .fa-thumbtack:hover {
  transform: translateY(2px);
  color: rgb(232, 38, 38);
}
</style>
