<script setup>
import { ref } from "vue";
import { useNoteStore } from "../store/noteStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter()
const newNoteTitle = ref("");
const newNoteContent = ref("");
const noteStore = useNoteStore();
const { addNote } = noteStore;

const handleAddNote = () => {
  addNote(newNoteTitle.value, newNoteContent.value);
  newNoteTitle.value = "";
  newNoteContent.value = "";
  router.push('/')
};
</script>

<template>
  <div class="container">
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">標題</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        v-model="newNoteTitle"
      />
    </div>
    <div class="form-floating">
      <textarea
        class="form-control"
        placeholder="Leave a comment here"
        id="floatingTextarea2"
        style="height: 200px"
        v-model="newNoteContent"
      ></textarea>
      <label for="floatingTextarea2">內容</label>
    </div>
    <button
      class="btn btn-outline-secondary mt-3"
      type="button"
      @click="handleAddNote(newNoteTitle, newNoteContent)"
    >
      新增
    </button>
  </div>
</template>

<style scoped></style>
