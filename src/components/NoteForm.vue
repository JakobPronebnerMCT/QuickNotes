<script setup lang="ts">
import { ref } from 'vue'
import BaseCard from './BaseCard.vue'
import type { Note } from '../types/note'

const emit = defineEmits<{ add: [note: Omit<Note, 'id'>] }>()
const title = ref('')
const content = ref('')
const tags = ref('')

function submitNote() {
  if (!title.value.trim() || !content.value.trim()) return
  emit('add', { title: title.value, content: content.value, tags: tags.value.split(',') })
  title.value = ''
  content.value = ''
  tags.value = ''
}

</script>

<template>
  <BaseCard>
    <template #header><h2>Neue Notiz</h2></template>
    <form class="note-form" @submit.prevent="submitNote">
      <label for="note-title">Titel *</label>

      <input 
        id="note-title" 
        v-model="title" 
        required 
        placeholder="Was möchtest du festhalten?"
      >
      <label for="note-content">Text *</label>

      <textarea 
        id="note-content" 
        v-model="content" 
        required 
        rows="6" 
        placeholder="Deine Gedanken, Ideen oder Erinnerungen …" 
      />
      <label for="note-tags">Tags (optional)</label>
      <input id="note-tags" v-model="tags" placeholder="z. B. Ideen, Kreativ ...">
      <p id="tags-help">Tags mit Kommas trennen.</p>
      <button type="submit" :disabled="!title.trim() || !content.trim()">+ Notiz speichern</button>
    </form>
  </BaseCard>
</template>
