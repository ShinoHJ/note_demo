import { defineStore } from "pinia";

export const useNoteStore = defineStore("noteStore", {
  state: () => ({
    notes: [
      // {
      //   id: 1,
      //   title: "整理行李",
      //   content: "要買行李箱嗎?",
      //   isPinned: false,
      // },
      {
        id: 2,
        title: "幫狗洗澡",
        content: "剃毛、洗浴巾",
        isPinned: true,
      },
      {
        id: 3,
        title: "運動",
        content: "健身房慢跑",
        isPinned: false,
      },
      {
        id: 4,
        title: "早餐",
        content: "蛋餅+抓餅",
        isPinned: true,
      },
      {
        id: 5,
        title: "拍照",
        content: "更新照片",
        isPinned: true,
      },
    ],
  }),
  getters: {
    pinnedNotes: (state) => state.notes.filter((note) => note.isPinned),
  },
  actions: {
    addNote(title, content) {
      if (!title) return;
      const last_id = this.notes[this.notes.length - 1].id;
      this.notes.push({
        id: last_id + 1,
        title,
        content,
        isPinned: false,
      });
    },
    editNote(id, title, content) {
      const index = this.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        this.notes[index].title = title;
        this.notes[index].content = content;
      }
    },
    deleteNote(id) {
      const index = this.notes.findIndex((note) => note.id === id)
      if (index !== -1) {
        this.notes.splice(index, 1)
      }
    },
    selectNoteById(id) {
      this.selectedNoteId = id
    },
    markedPinned(id) {
      const index = this.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        this.notes[index].isPinned = !this.notes[index].isPinned;
      }
    },
  },
});
