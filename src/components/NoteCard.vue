<script setup lang="ts">
import BaseCard from './BaseCard.vue'
import type { Note } from '../types/note'

defineProps<{ note: Note }>()
defineEmits<{ delete: [id: string] }>()
</script>

<template>
  <BaseCard>
    <template #header>
      <h3>{{ note.title }}</h3>
      <button type="button" :aria-label="`Notiz ${note.title} löschen`" @click="$emit('delete', note.id)">Löschen</button>
    </template>
    <p class="note-text">{{ note.content }}</p>
    <ul v-if="note.tags.length" class="note-tags" aria-label="Tags">
      <li v-for="tag in note.tags" :key="tag">{{ tag }}</li>
    </ul>
  </BaseCard>
</template>
