import { createRouter, createWebHistory } from "vue-router";
import NoteGrid from "./components/NoteGrid.vue";
import AddNote from "./components/AddNote.vue";
import EditNote from "./components/EditNote.vue";

const routes = [
  {path:'/', name:'grid', component: NoteGrid},
  {path:'/add-note', name:'add-note', component: AddNote},
  {path:'/edit-note/:id', name:'edit-note', props: true, component: EditNote},
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router;

