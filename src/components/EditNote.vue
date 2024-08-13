<script setup>
import { ref, watch, computed } from "vue";
import { useNoteStore } from "../store/noteStore";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
const noteStore = useNoteStore();

const currentNote = computed(() =>
  noteStore.notes.find((note) => note.id === parseInt(route.params.id))
);
const newNoteTitle = ref(currentNote.value ? currentNote.value.title : "");
const newNoteContent = ref(currentNote.value ? currentNote.value.content : "");

watch(currentNote, (newNote) => {
  if (newNote) {
    newNoteTitle.value = newNote.title;
    newNoteContent.value = newNote.content;
  }
});

const handleEditNote = () => {
  if (currentNote.value) {
    noteStore.editNote(currentNote.value.id, newNoteTitle.value, newNoteContent.value);
    router.push('/');
  }
}


</script>

<template>
  <div class="container">
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">標題</label>
      <input type="text" class="form-control" id="formGroupExampleInput" v-model="newNoteTitle" />
    </div>
    <div class="form-floating">
      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 200px"
        v-model="newNoteContent"></textarea>
      <label for="floatingTextarea2">內容</label>
    </div>
    <button class="btn btn-outline-secondary mt-3" type="button" @click="handleEditNote()"
      >儲存修改</button>
  </div>
</template>

<style scoped></style>
