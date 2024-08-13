<script setup>
import { storeToRefs } from "pinia";
import { useNoteStore } from "../store/noteStore";

const noteStore = useNoteStore();
const { notes, pinnedNotes } = storeToRefs(noteStore);

// const confirmDelete = () => {
//   if(selectedNote)
// }
</script>

<template>
  <div class="container">
    <div class="row text-center pb-5 pt-3">
      <div class="col-md-12 text-center">
        <div class="lc-block"><span editable="inline" class="small mt-4 d-block">never put off until tomorrow what you
            can do today</span>
          <h2 editable="inline" class="display-2 mb-0"><b>MY NOTE</b></h2>
        </div>
      </div>
    </div>
    <div class="row pb-4">
      <!-- Task Start -->
      <div class="col-md-6 col-lg-3 my-3" v-for="(note, index) in notes" key="index">
        <div class="my-note lc-block position-relative text-center mx-2 mt-n4 py-4 bg-light shadow" style="">
          <h4 editable="inline">{{ note.title }}</h4>
          <p editable="inline" class="small">{{ note.content }}</p>
          <div class="nav justify-content-center">
            <router-link :to="{ name: 'edit-note', params: { id: note.id } }">
              <i class="fa-solid fa-pen-nib"></i></router-link>
            <div href="#" class="mx-2" @click="noteStore.deleteNote(note.id)"> <i
                class="fa-regular fa-circle-xmark"></i> </div>
          </div>
        </div>
      </div>
      <!-- Task end -->
    </div>
  </div>
</template>

<style scoped>
.my-note{
  transition: .5s;
}
.my-note:hover {
  transform: translateY(-10px);
  box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.15)!important;
}
.my-note:hover i {
  scale: 1.1;
  color: rgb(122, 122, 122);
}
</style>
