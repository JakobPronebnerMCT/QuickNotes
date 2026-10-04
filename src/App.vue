<script setup lang="ts">
import { ref } from 'vue'
import NoteCard from './components/NoteCard.vue'
import NoteForm from './components/NoteForm.vue'
import SearchBar from './components/SearchBar.vue'
import { useNotes } from './composables/useNotes.js'

const searchTerm = ref('')
const { notes, addNote, deleteNote, filteredNotes } = useNotes()
const visibleNotes = filteredNotes(searchTerm)
</script>

<template>
  <main class="app-layout">
    <header class="app-header">
      <p>DEIN PLATZ FÜR IDEEN</p>
      <h1>QuickNotes</h1>
      <p>Gedanken festhalten, mit Tags ordnen und schnell wiederfinden.</p>
    </header>
    <div class="workspace">
      <aside><NoteForm @add="addNote" /></aside>
      <section class="notes-section" aria-labelledby="notes-heading">
        <div class="notes-heading">
          <h2 id="notes-heading">Deine Notizen</h2>
          <span>{{ notes.length }}</span>
        </div>
        <SearchBar v-model="searchTerm" />
        <p role="status">{{ visibleNotes.length }} {{ visibleNotes.length === 1 ? 'Notiz' : 'Notizen' }}{{ searchTerm.trim() ? ' gefunden' : ' gespeichert' }}</p>
        <div v-if="visibleNotes.length" class="notes-list">
          <NoteCard v-for="note in visibleNotes" :key="note.id" :note="note" @delete="deleteNote" />
        </div>
        <div v-else>
          <h3>{{ notes.length ? 'Keine passenden Notizen' : 'Platz für deinen ersten Gedanken' }}</h3>
          <p>{{ notes.length ? 'Versuche einen anderen Titel, Text oder Tag.' : 'Erstelle eine Notiz mit dem Formular. Sie bleibt auch nach einem Neuladen erhalten.' }}</p>
        </div>
      </section>
    </div>
    <footer>QuickNotes · Deine Notizen werden lokal in diesem Browser gespeichert.</footer>
  </main>
</template>
